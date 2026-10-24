export interface Deprecation {
  /** Message shown in the editor. */
  message: string;
  /** `deprecated` renders struck through (with a quick fix when `replacement` is set); `note` is a faint hint. */
  kind: "deprecated" | "note";
  /** Drop-in replacement name, when renaming is enough to migrate. */
  replacement?: string;
}

/**
 * Functions whose behavior or name changed in raylib 6.2 (the bindings keep the old
 * names working). Keyed by bare function name.
 */
export const deprecations: Record<string, Deprecation> = {
  GetSplinePointBezierQuad: {
    kind: "deprecated",
    replacement: "GetSplinePointBezierQuadratic",
    message: "Renamed to GetSplinePointBezierQuadratic in raylib 6.2.",
  },
  ImageDrawTriangleEx: {
    kind: "deprecated",
    replacement: "ImageDrawTriangleGradient",
    message: "Renamed to ImageDrawTriangleGradient in raylib 6.2.",
  },
  ImageDraw: {
    kind: "deprecated",
    message: "Removed in raylib 6.2. Use ImageDrawImage, ImageDrawImageEx, ImageDrawImagePro or ImageDrawImageRec.",
  },
  GetTargetFPS: {
    kind: "deprecated",
    replacement: "GetFPS",
    message: "raylib has no GetTargetFPS; it is an alias of GetFPS.",
  },
  DrawCapsule: {
    kind: "note",
    message: "Argument order is (rings, slices) since raylib 6.2; it was (slices, rings) in 6.0.",
  },
  DrawCapsuleWires: {
    kind: "note",
    message: "Argument order is (rings, slices) since raylib 6.2; it was (slices, rings) in 6.0.",
  },
  FileCopy: { kind: "note", message: "Returns 0 on success since raylib 6.2 (6.0 returned 1)." },
  FileMove: { kind: "note", message: "Returns 0 on success since raylib 6.2 (6.0 always returned -1)." },
  ImageColorContrast: { kind: "note", message: "The contrast argument is an integer (-100..100) since raylib 6.2." },
};
