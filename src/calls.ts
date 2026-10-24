/** A call such as `raylib.DrawRectangle(10, 20, w, h, RED)` found in Lua source. */
export interface RaylibCall {
  /** Bare function name, e.g. `DrawRectangle`. */
  name: string;
  /** Offsets of the function name (after the namespace and dot). */
  nameStart: number;
  nameEnd: number;
  /** Offset of the opening parenthesis. */
  openParen: number;
  /** Trimmed, non-empty argument ranges at the top level of the call. */
  args: { start: number; end: number }[];
  /** False when the closing parenthesis was not found (call still being typed). */
  closed: boolean;
}

const isIdentChar = (c: string | undefined): boolean => c !== undefined && /[A-Za-z0-9_]/.test(c);
const isSpace = (c: string): boolean => /\s/.test(c);

/** If `i` starts a comment or string, return the offset just past it; otherwise `i`. */
function skipNonCode(text: string, i: number): number {
  const c = text[i];
  if (c === "-" && text[i + 1] === "-") {
    const long = text.slice(i + 2).match(/^\[(=*)\[/);
    if (long) {
      const end = text.indexOf(`]${long[1]}]`, i + 2 + long[0].length);
      return end < 0 ? text.length : end + long[1].length + 2;
    }
    const nl = text.indexOf("\n", i);
    return nl < 0 ? text.length : nl;
  }
  if (c === "[") {
    const long = text.slice(i).match(/^\[(=*)\[/);
    if (long) {
      const end = text.indexOf(`]${long[1]}]`, i + long[0].length);
      return end < 0 ? text.length : end + long[1].length + 2;
    }
  }
  if (c === '"' || c === "'") {
    let j = i + 1;
    while (j < text.length && text[j] !== c && text[j] !== "\n") {
      j += text[j] === "\\" ? 2 : 1;
    }
    return Math.min(j + 1, text.length);
  }
  return i;
}

/** Parse the argument list that opens at `open` (the `(` offset). */
function parseArgs(text: string, open: number): { args: { start: number; end: number }[]; closed: boolean } {
  const args: { start: number; end: number }[] = [];
  let depth = 0;
  let argStart = open + 1;
  const push = (end: number) => {
    let s = argStart;
    let e = end;
    while (s < e && isSpace(text[s])) { s++; }
    while (e > s && isSpace(text[e - 1])) { e--; }
    if (e > s) { args.push({ start: s, end: e }); }
  };
  let i = open + 1;
  while (i < text.length) {
    const skipped = skipNonCode(text, i);
    if (skipped !== i) { i = skipped; continue; }
    const c = text[i];
    if (c === "(" || c === "{" || c === "[") {
      depth++;
    } else if (c === ")" || c === "}" || c === "]") {
      if (depth === 0) {
        if (c !== ")") { return { args, closed: false }; }
        push(i);
        return { args, closed: true };
      }
      depth--;
    } else if (c === "," && depth === 0) {
      push(i);
      argStart = i + 1;
    }
    i++;
  }
  push(text.length);
  return { args, closed: false };
}

/**
 * Find every `<namespace>.<Name>(` call in a Lua source text, ignoring comments and
 * strings. Nested calls are reported too (each call is parsed independently).
 */
export function scanCalls(text: string, namespace: string): RaylibCall[] {
  const calls: RaylibCall[] = [];
  let i = 0;
  while (i < text.length) {
    const skipped = skipNonCode(text, i);
    if (skipped !== i) { i = skipped; continue; }
    if (text.startsWith(namespace, i) && !isIdentChar(text[i - 1]) && text[i - 1] !== "." && text[i - 1] !== ":") {
      let j = i + namespace.length;
      if (!isIdentChar(text[j])) {
        while (j < text.length && isSpace(text[j])) { j++; }
        if (text[j] === ".") {
          j++;
          while (j < text.length && isSpace(text[j])) { j++; }
          const nameStart = j;
          while (isIdentChar(text[j])) { j++; }
          const nameEnd = j;
          while (j < text.length && isSpace(text[j])) { j++; }
          if (nameEnd > nameStart && text[j] === "(") {
            const { args, closed } = parseArgs(text, j);
            calls.push({ name: text.slice(nameStart, nameEnd), nameStart, nameEnd, openParen: j, args, closed });
          }
        }
      }
    }
    i++;
  }
  return calls;
}
