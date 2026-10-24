#!/usr/bin/env node
// Keeps the extension in step with the raylib-lua-bindings module.
//
//   node scripts/sync.mjs            check: report drift, exit 1 if there is any
//   node scripts/sync.mjs --write    add missing functions to src/completionItems.ts
//                                    and regenerate src/constants.ts
//
// Options: --bindings <dir>  (default ../raylib-lua-bindings; must contain a built raylib.so)
//          --lua <path>      (default <bindings>/lua/src/lua if present, else `lua` on PATH)
//
// The set of functions/constants is read from the *live* module (`require("raylib")`);
// descriptions and parameter names come from raylib.h / raymath.h. Entries that already
// exist in completionItems.ts are never touched, because many were hand-corrected where
// the Lua signature diverges from the C header.

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const argv = process.argv.slice(2);
const write = argv.includes("--write");
const opt = (name) => { const i = argv.indexOf(name); return i >= 0 ? argv[i + 1] : undefined; };

const bindings = path.resolve(root, opt("--bindings") ?? "../raylib-lua-bindings");
const bundledLua = path.join(bindings, "lua/src/lua");
const lua = opt("--lua") ?? (fs.existsSync(bundledLua) ? bundledLua : "lua");

// Lua signatures that differ from the C header, plus bindings that are not raylib functions.
const OVERRIDES = {
  QuaternionToAxisAngle: { params: ["q"], detail: "Gets the rotation axis (Vector3) and angle (radians) of a quaternion; returns axis, angle." },
  MatrixDecompose: { params: ["mat"], detail: "Decomposes a transformation matrix; returns translation, rotation (quaternion), scale." },
  Vector3OrthoNormalize: { params: ["v1", "v2"], detail: "Orthonormalizes two vectors; returns the two new vectors." },
  GetRenderTextureTexture: {
    params: ["renderTexture"],
    detail: "Gets the Texture2D of a render texture so it can be drawn. Shares the GL texture: release with UnloadRenderTexture, never UnloadTexture.",
  },
};

// ---- live module ---------------------------------------------------------------------

const probe = `
local r = require("raylib")
for k, v in pairs(r) do
  local t = type(v)
  if t == "function" then print("f\\t" .. k)
  elseif t == "number" then print("n\\t" .. k .. "\\t" .. string.format("%.17g", v))
  elseif t == "string" then print("s\\t" .. k .. "\\t" .. v)
  elseif t == "table" and v.r and v.g and v.b and v.a then
    print("s\\t" .. k .. "\\t" .. string.format("{r=%d, g=%d, b=%d, a=%d}", v.r, v.g, v.b, v.a)) end
end`;
let out;
try {
  out = execFileSync(lua, ["-e", probe], {
    cwd: bindings,
    env: { ...process.env, LUA_CPATH: path.join(bindings, "?.so") },
    encoding: "utf8",
  });
} catch (e) {
  console.error(`could not load the module with ${lua} from ${bindings} (build it with \`make\` first)\n${e.message}`);
  process.exit(2);
}
const liveFns = new Set();
const liveConsts = new Map();   // name -> value (number | string)
for (const line of out.split("\n")) {
  const [kind, name, value] = line.split("\t");
  if (kind === "f") liveFns.add(name);
  else if (kind === "n") liveConsts.set(name, Number(value));
  else if (kind === "s") liveConsts.set(name, value);
}

// ---- headers -------------------------------------------------------------------------

const read = (p) => fs.readFileSync(path.join(bindings, p), "utf8");
const raylibH = read("raylib/src/raylib.h");
const raymathH = read("raylib/src/raymath.h");

function paramNames(list) {
  const names = [];
  for (const raw of list.split(",")) {
    const p = raw.trim();
    if (!p || p === "void" || p === "...") continue;
    const m = p.replace(/\[[^\]]*\]/g, "").match(/([A-Za-z_]\w*)\s*$/);
    if (m) names.push(m[1]);
  }
  return names;
}

const headerFns = new Map();   // name -> { params, detail }
const sentence = (s) => { s = s.trim(); return s ? (/[.!?]$/.test(s) ? s : s + ".") : s; };

for (const line of raylibH.split("\n")) {
  const m = line.match(/^RLAPI\s+.*?\b([A-Za-z_]\w*)\(([^)]*)\)\s*;\s*(?:\/\/\s*(.*))?$/);
  if (m) headerFns.set(m[1], { params: paramNames(m[2]), detail: sentence(m[3] ?? "") });
}
const mathLines = raymathH.split("\n");
mathLines.forEach((line, i) => {
  const m = line.match(/^RMAPI\s+.*?\b([A-Za-z_]\w*)\(([^)]*)\)\s*$/);
  if (!m) return;
  let detail = "";
  for (let j = i - 1; j >= 0 && mathLines[j].startsWith("//"); j--) {
    const c = mathLines[j].replace(/^\/\/\s*/, "");
    if (!/^(NOTE|TODO|WARNING)/.test(c)) detail = c;   // keep the first line of the block
  }
  headerFns.set(m[1], { params: paramNames(m[2]), detail: sentence(detail) });
});

// enum members -> group, and #define aliases
const stripped = raylibH.replace(/\/\*[\s\S]*?\*\//g, "").replace(/\/\/[^\n]*/g, "");
const groupOf = new Map();
for (const m of stripped.matchAll(/(?:typedef\s+)?enum\s*(\w*)\s*\{([\s\S]*?)\}\s*(\w*)\s*;/g)) {
  const group = m[3] || m[1] || "enum";
  for (const item of m[2].split(",")) {
    const id = item.trim().match(/^[A-Za-z_]\w*/);
    if (id && !groupOf.has(id[0])) groupOf.set(id[0], group);
  }
}
const aliasOf = new Map();
for (const m of stripped.matchAll(/^\s*#define\s+([A-Z][A-Z0-9_]*)\s+([A-Z][A-Z0-9_]*)\s*$/gm)) {
  if (groupOf.has(m[2]) && !groupOf.has(m[1])) aliasOf.set(m[1], m[2]);
}
const describeConst = (name) => {
  if (groupOf.has(name)) return groupOf.get(name);
  if (aliasOf.has(name)) return `${groupOf.get(aliasOf.get(name))} (alias of ${aliasOf.get(name)})`;
  if (name === "PI" || name === "DEG2RAD" || name === "RAD2DEG") return "Math";
  if (name.startsWith("RAYLIB_VERSION")) return "Version";
  if (typeof liveConsts.get(name) === "string" && liveConsts.get(name).startsWith("{r=")) return "Color";
  return "Constant";
};

// ---- extension data -------------------------------------------------------------------

const itemsPath = path.join(root, "src/completionItems.ts");
const itemsSrc = fs.readFileSync(itemsPath, "utf8");
const known = new Set([...itemsSrc.matchAll(/^\s+\["([A-Za-z0-9_]+)",/gm)].map((m) => m[1]));

const missing = [...liveFns].filter((n) => !known.has(n)).sort();
const stale = [...known].filter((n) => !liveFns.has(n)).sort();

const entryFor = (name) => {
  const info = OVERRIDES[name] ?? headerFns.get(name);
  if (!info) return undefined;
  const detail = OVERRIDES[name]?.detail ?? (info.detail || `Binding for ${name}.`);
  const snippet = info.params.length
    ? `raylib.${name}(${info.params.map((p, i) => `\${${i + 1}:${p}}`).join(", ")})`
    : undefined;
  return `    [${[JSON.stringify(name), JSON.stringify(detail), snippet && JSON.stringify(snippet)].filter(Boolean).join(", ")}],`;
};

const noHeader = missing.filter((n) => !OVERRIDES[n] && !headerFns.has(n));
const newEntries = missing.map(entryFor).filter(Boolean);

const constRows = [...liveConsts.entries()]
  .filter(([n]) => /^[A-Z][A-Za-z0-9_]*$/.test(n))
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([n, v]) => `  [${JSON.stringify(n)}, ${JSON.stringify(describeConst(n))}, ${JSON.stringify(v)}],`);
const constantsSrc = `// GENERATED by scripts/sync.mjs from the raylib-lua-bindings module — do not edit.
// Run \`node scripts/sync.mjs --write\` after the bindings change.

export type ConstantEntry = [name: string, group: string, value: number | string];

export const constants: ConstantEntry[] = [
${constRows.join("\n")}
];
`;
const constantsPath = path.join(root, "src/constants.ts");
const constantsCurrent = fs.existsSync(constantsPath) ? fs.readFileSync(constantsPath, "utf8") : "";
const constantsDrift = constantsSrc !== constantsCurrent;

// ---- report / write -------------------------------------------------------------------

console.log(`live module: ${liveFns.size} functions, ${liveConsts.size} constants`);
console.log(`extension:   ${known.size} functions`);
if (missing.length) console.log(`missing in extension (${missing.length}): ${missing.join(" ")}`);
if (stale.length) console.log(`not in the module any more (${stale.length}): ${stale.join(" ")}`);
if (noHeader.length) console.log(`no header info, skipped (${noHeader.length}): ${noHeader.join(" ")}`);
if (constantsDrift) console.log("src/constants.ts is out of date");

if (write) {
  if (newEntries.length) {
    const marker = "    // <<< AUTO-GENERATED";
    if (!itemsSrc.includes(marker)) { console.error(`marker "${marker}" not found in completionItems.ts`); process.exit(2); }
    fs.writeFileSync(itemsPath, itemsSrc.replace(marker, newEntries.join("\n") + "\n" + marker));
    console.log(`added ${newEntries.length} functions to src/completionItems.ts`);
  }
  if (constantsDrift) {
    fs.writeFileSync(constantsPath, constantsSrc);
    console.log(`wrote src/constants.ts (${constRows.length} constants)`);
  }
  console.log("Update the counts in src/test/extension.test.ts and README.md if they changed.");
}
process.exit(!write && (missing.length || stale.length || constantsDrift) ? 1 : 0);
