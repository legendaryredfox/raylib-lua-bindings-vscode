export function getCompletionItems(vscode: typeof import("vscode")) {
  const completionItems = [];

  const raylib_SetShapesTexture = new vscode.CompletionItem(
    "raylib.SetShapesTexture",
    vscode.CompletionItemKind.Function
  );
  raylib_SetShapesTexture.detail = "Sets the texture to be used for shapes.";
  raylib_SetShapesTexture.documentation = new vscode.MarkdownString(
    "**raylib.SetShapesTexture()**\n\nSets the texture to be used for shapes.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_SetShapesTexture.insertText = new vscode.SnippetString(
    "raylib.SetShapesTexture()"
  );
  completionItems.push(raylib_SetShapesTexture);

  const raylib_GetShapesTexture = new vscode.CompletionItem(
    "raylib.GetShapesTexture",
    vscode.CompletionItemKind.Function
  );
  raylib_GetShapesTexture.detail = "Gets the current texture used for shapes.";
  raylib_GetShapesTexture.documentation = new vscode.MarkdownString(
    "**raylib.GetShapesTexture()**\n\nGets the current texture used for shapes.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetShapesTexture.insertText = new vscode.SnippetString(
    "raylib.GetShapesTexture()"
  );
  completionItems.push(raylib_GetShapesTexture);

  const raylib_GetShapesTextureRectangle = new vscode.CompletionItem(
    "raylib.GetShapesTextureRectangle",
    vscode.CompletionItemKind.Function
  );
  raylib_GetShapesTextureRectangle.detail =
    "Gets the source rectangle of the current shapes texture.";
  raylib_GetShapesTextureRectangle.documentation = new vscode.MarkdownString(
    "**raylib.GetShapesTextureRectangle()**\n\nGets the source rectangle of the current shapes texture.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetShapesTextureRectangle.insertText = new vscode.SnippetString(
    "raylib.GetShapesTextureRectangle()"
  );
  completionItems.push(raylib_GetShapesTextureRectangle);

  const raylib_DrawPixel = new vscode.CompletionItem(
    "raylib.DrawPixel",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawPixel.detail =
    "Draws a pixel at the specified position with the specified color.";
  raylib_DrawPixel.documentation = new vscode.MarkdownString(
    "**raylib.DrawPixel()**\n\nDraws a pixel at the specified position with the specified color.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawPixel.insertText = new vscode.SnippetString("raylib.DrawPixel()");
  completionItems.push(raylib_DrawPixel);

  const raylib_DrawPixelV = new vscode.CompletionItem(
    "raylib.DrawPixelV",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawPixelV.detail =
    "Draws a pixel at the specified position (Vector2) with the specified color.";
  raylib_DrawPixelV.documentation = new vscode.MarkdownString(
    "**raylib.DrawPixelV()**\n\nDraws a pixel at the specified position (Vector2) with the specified color.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawPixelV.insertText = new vscode.SnippetString(
    "raylib.DrawPixelV()"
  );
  completionItems.push(raylib_DrawPixelV);

  const raylib_DrawLineV = new vscode.CompletionItem(
    "raylib.DrawLineV",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawLineV.detail = "Draws a line between two points (Vector2).";
  raylib_DrawLineV.documentation = new vscode.MarkdownString(
    "**raylib.DrawLineV()**\n\nDraws a line between two points (Vector2).\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawLineV.insertText = new vscode.SnippetString("raylib.DrawLineV()");
  completionItems.push(raylib_DrawLineV);

  const raylib_DrawCircleV = new vscode.CompletionItem(
    "raylib.DrawCircleV",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawCircleV.detail =
    "Draws a circle at the specified position (Vector2) with the specified radius and color.";
  raylib_DrawCircleV.documentation = new vscode.MarkdownString(
    "**raylib.DrawCircleV()**\n\nDraws a circle at the specified position (Vector2) with the specified radius and color.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawCircleV.insertText = new vscode.SnippetString(
    "raylib.DrawCircleV()"
  );
  completionItems.push(raylib_DrawCircleV);

  const raylib_DrawCircleLines = new vscode.CompletionItem(
    "raylib.DrawCircleLines",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawCircleLines.detail =
    "Draws the outline of a circle at the specified position with the specified radius and color.";
  raylib_DrawCircleLines.documentation = new vscode.MarkdownString(
    "**raylib.DrawCircleLines()**\n\nDraws the outline of a circle at the specified position with the specified radius and color.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawCircleLines.insertText = new vscode.SnippetString(
    "raylib.DrawCircleLines()"
  );
  completionItems.push(raylib_DrawCircleLines);

  const raylib_DrawCircleLinesV = new vscode.CompletionItem(
    "raylib.DrawCircleLinesV",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawCircleLinesV.detail =
    "Draws the outline of a circle at the specified position (Vector2) with the specified radius and color.";
  raylib_DrawCircleLinesV.documentation = new vscode.MarkdownString(
    "**raylib.DrawCircleLinesV()**\n\nDraws the outline of a circle at the specified position (Vector2) with the specified radius and color.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawCircleLinesV.insertText = new vscode.SnippetString(
    "raylib.DrawCircleLinesV()"
  );
  completionItems.push(raylib_DrawCircleLinesV);

  const raylib_DrawEllipseLines = new vscode.CompletionItem(
    "raylib.DrawEllipseLines",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawEllipseLines.detail =
    "Draws the outline of an ellipse at the specified position with the specified radii and color.";
  raylib_DrawEllipseLines.documentation = new vscode.MarkdownString(
    "**raylib.DrawEllipseLines()**\n\nDraws the outline of an ellipse at the specified position with the specified radii and color.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawEllipseLines.insertText = new vscode.SnippetString(
    "raylib.DrawEllipseLines()"
  );
  completionItems.push(raylib_DrawEllipseLines);

  const raylib_DrawRectangleV = new vscode.CompletionItem(
    "raylib.DrawRectangleV",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawRectangleV.detail =
    "Draws a rectangle at the specified position (Vector2) with the specified width, height, and color.";
  raylib_DrawRectangleV.documentation = new vscode.MarkdownString(
    "**raylib.DrawRectangleV()**\n\nDraws a rectangle at the specified position (Vector2) with the specified width, height, and color.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawRectangleV.insertText = new vscode.SnippetString(
    "raylib.DrawRectangleV()"
  );
  completionItems.push(raylib_DrawRectangleV);

  const raylib_DrawRectangleRec = new vscode.CompletionItem(
    "raylib.DrawRectangleRec",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawRectangleRec.detail =
    "Draws a rectangle using a Rectangle struct.";
  raylib_DrawRectangleRec.documentation = new vscode.MarkdownString(
    "**raylib.DrawRectangleRec()**\n\nDraws a rectangle using a Rectangle struct.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawRectangleRec.insertText = new vscode.SnippetString(
    "raylib.DrawRectangleRec()"
  );
  completionItems.push(raylib_DrawRectangleRec);

  const raylib_DrawRectanglePro = new vscode.CompletionItem(
    "raylib.DrawRectanglePro",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawRectanglePro.detail =
    "Draws a rectangle with the specified position, size, and rotation.";
  raylib_DrawRectanglePro.documentation = new vscode.MarkdownString(
    "**raylib.DrawRectanglePro()**\n\nDraws a rectangle with the specified position, size, and rotation.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawRectanglePro.insertText = new vscode.SnippetString(
    "raylib.DrawRectanglePro()"
  );
  completionItems.push(raylib_DrawRectanglePro);

  const raylib_DrawRectangleGradientH = new vscode.CompletionItem(
    "raylib.DrawRectangleGradientH",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawRectangleGradientH.detail =
    "Draws a rectangle with a horizontal gradient.";
  raylib_DrawRectangleGradientH.documentation = new vscode.MarkdownString(
    "**raylib.DrawRectangleGradientH()**\n\nDraws a rectangle with a horizontal gradient.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawRectangleGradientH.insertText = new vscode.SnippetString(
    "raylib.DrawRectangleGradientH()"
  );
  completionItems.push(raylib_DrawRectangleGradientH);

  const raylib_DrawRectangleLinesEx = new vscode.CompletionItem(
    "raylib.DrawRectangleLinesEx",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawRectangleLinesEx.detail =
    "Draws the outline of a rectangle with extended parameters.";
  raylib_DrawRectangleLinesEx.documentation = new vscode.MarkdownString(
    "**raylib.DrawRectangleLinesEx()**\n\nDraws the outline of a rectangle with extended parameters.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawRectangleLinesEx.insertText = new vscode.SnippetString(
    "raylib.DrawRectangleLinesEx()"
  );
  completionItems.push(raylib_DrawRectangleLinesEx);

  const raylib_DrawSplineLinear = new vscode.CompletionItem(
    "raylib.DrawSplineLinear",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawSplineLinear.detail = "Draws a linear spline.";
  raylib_DrawSplineLinear.documentation = new vscode.MarkdownString(
    "**raylib.DrawSplineLinear()**\n\nDraws a linear spline.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawSplineLinear.insertText = new vscode.SnippetString(
    "raylib.DrawSplineLinear()"
  );
  completionItems.push(raylib_DrawSplineLinear);

  const raylib_DrawSplineBasis = new vscode.CompletionItem(
    "raylib.DrawSplineBasis",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawSplineBasis.detail = "Draws a basis spline.";
  raylib_DrawSplineBasis.documentation = new vscode.MarkdownString(
    "**raylib.DrawSplineBasis()**\n\nDraws a basis spline.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawSplineBasis.insertText = new vscode.SnippetString(
    "raylib.DrawSplineBasis()"
  );
  completionItems.push(raylib_DrawSplineBasis);

  const raylib_DrawSplineCatmullRom = new vscode.CompletionItem(
    "raylib.DrawSplineCatmullRom",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawSplineCatmullRom.detail = "Draws a Catmull-Rom spline.";
  raylib_DrawSplineCatmullRom.documentation = new vscode.MarkdownString(
    "**raylib.DrawSplineCatmullRom()**\n\nDraws a Catmull-Rom spline.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawSplineCatmullRom.insertText = new vscode.SnippetString(
    "raylib.DrawSplineCatmullRom()"
  );
  completionItems.push(raylib_DrawSplineCatmullRom);

  const raylib_DrawSplineBezierQuadratic = new vscode.CompletionItem(
    "raylib.DrawSplineBezierQuadratic",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawSplineBezierQuadratic.detail = "Draws a quadratic Bezier spline.";
  raylib_DrawSplineBezierQuadratic.documentation = new vscode.MarkdownString(
    "**raylib.DrawSplineBezierQuadratic()**\n\nDraws a quadratic Bezier spline.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawSplineBezierQuadratic.insertText = new vscode.SnippetString(
    "raylib.DrawSplineBezierQuadratic()"
  );
  completionItems.push(raylib_DrawSplineBezierQuadratic);

  const raylib_DrawSplineBezierCubic = new vscode.CompletionItem(
    "raylib.DrawSplineBezierCubic",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawSplineBezierCubic.detail = "Draws a cubic Bezier spline.";
  raylib_DrawSplineBezierCubic.documentation = new vscode.MarkdownString(
    "**raylib.DrawSplineBezierCubic()**\n\nDraws a cubic Bezier spline.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawSplineBezierCubic.insertText = new vscode.SnippetString(
    "raylib.DrawSplineBezierCubic()"
  );
  completionItems.push(raylib_DrawSplineBezierCubic);

  const raylib_DrawSplineSegmentLinear = new vscode.CompletionItem(
    "raylib.DrawSplineSegmentLinear",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawSplineSegmentLinear.detail =
    "Draws a segment of a linear spline between two points.";
  raylib_DrawSplineSegmentLinear.documentation = new vscode.MarkdownString(
    "**raylib.DrawSplineSegmentLinear()**\n\nDraws a segment of a linear spline between two points.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawSplineSegmentLinear.insertText = new vscode.SnippetString(
    "raylib.DrawSplineSegmentLinear()"
  );
  completionItems.push(raylib_DrawSplineSegmentLinear);

  const raylib_DrawSplineSegmentBasis = new vscode.CompletionItem(
    "raylib.DrawSplineSegmentBasis",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawSplineSegmentBasis.detail = "Draws a segment of a basis spline.";
  raylib_DrawSplineSegmentBasis.documentation = new vscode.MarkdownString(
    "**raylib.DrawSplineSegmentBasis()**\n\nDraws a segment of a basis spline.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawSplineSegmentBasis.insertText = new vscode.SnippetString(
    "raylib.DrawSplineSegmentBasis()"
  );
  completionItems.push(raylib_DrawSplineSegmentBasis);

  const raylib_DrawSplineSegmentCatmullRom = new vscode.CompletionItem(
    "raylib.DrawSplineSegmentCatmullRom",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawSplineSegmentCatmullRom.detail =
    "Draws a segment of a Catmull-Rom spline.";
  raylib_DrawSplineSegmentCatmullRom.documentation = new vscode.MarkdownString(
    "**raylib.DrawSplineSegmentCatmullRom()**\n\nDraws a segment of a Catmull-Rom spline.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawSplineSegmentCatmullRom.insertText = new vscode.SnippetString(
    "raylib.DrawSplineSegmentCatmullRom()"
  );
  completionItems.push(raylib_DrawSplineSegmentCatmullRom);

  const raylib_DrawSplineSegmentBezierQuadratic = new vscode.CompletionItem(
    "raylib.DrawSplineSegmentBezierQuadratic",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawSplineSegmentBezierQuadratic.detail =
    "Draws a segment of a quadratic Bezier spline.";
  raylib_DrawSplineSegmentBezierQuadratic.documentation =
    new vscode.MarkdownString(
      "**raylib.DrawSplineSegmentBezierQuadratic()**\n\nDraws a segment of a quadratic Bezier spline.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
    );
  raylib_DrawSplineSegmentBezierQuadratic.insertText = new vscode.SnippetString(
    "raylib.DrawSplineSegmentBezierQuadratic()"
  );
  completionItems.push(raylib_DrawSplineSegmentBezierQuadratic);

  const raylib_DrawSplineSegmentBezierCubic = new vscode.CompletionItem(
    "raylib.DrawSplineSegmentBezierCubic",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawSplineSegmentBezierCubic.detail =
    "Draws a segment of a cubic Bezier spline.";
  raylib_DrawSplineSegmentBezierCubic.documentation = new vscode.MarkdownString(
    "**raylib.DrawSplineSegmentBezierCubic()**\n\nDraws a segment of a cubic Bezier spline.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawSplineSegmentBezierCubic.insertText = new vscode.SnippetString(
    "raylib.DrawSplineSegmentBezierCubic()"
  );
  completionItems.push(raylib_DrawSplineSegmentBezierCubic);

  const raylib_GetSplinePointLinear = new vscode.CompletionItem(
    "raylib.GetSplinePointLinear",
    vscode.CompletionItemKind.Function
  );
  raylib_GetSplinePointLinear.detail = "Gets a point on a linear spline.";
  raylib_GetSplinePointLinear.documentation = new vscode.MarkdownString(
    "**raylib.GetSplinePointLinear()**\n\nGets a point on a linear spline.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetSplinePointLinear.insertText = new vscode.SnippetString(
    "raylib.GetSplinePointLinear()"
  );
  completionItems.push(raylib_GetSplinePointLinear);

  const raylib_GetSplinePointBasis = new vscode.CompletionItem(
    "raylib.GetSplinePointBasis",
    vscode.CompletionItemKind.Function
  );
  raylib_GetSplinePointBasis.detail = "Gets a point on a basis spline.";
  raylib_GetSplinePointBasis.documentation = new vscode.MarkdownString(
    "**raylib.GetSplinePointBasis()**\n\nGets a point on a basis spline.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetSplinePointBasis.insertText = new vscode.SnippetString(
    "raylib.GetSplinePointBasis()"
  );
  completionItems.push(raylib_GetSplinePointBasis);

  const raylib_GetSplinePointCatmullRom = new vscode.CompletionItem(
    "raylib.GetSplinePointCatmullRom",
    vscode.CompletionItemKind.Function
  );
  raylib_GetSplinePointCatmullRom.detail =
    "Gets a point on a Catmull-Rom spline.";
  raylib_GetSplinePointCatmullRom.documentation = new vscode.MarkdownString(
    "**raylib.GetSplinePointCatmullRom()**\n\nGets a point on a Catmull-Rom spline.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetSplinePointCatmullRom.insertText = new vscode.SnippetString(
    "raylib.GetSplinePointCatmullRom()"
  );
  completionItems.push(raylib_GetSplinePointCatmullRom);

  const raylib_GetSplinePointBezierQuad = new vscode.CompletionItem(
    "raylib.GetSplinePointBezierQuad",
    vscode.CompletionItemKind.Function
  );
  raylib_GetSplinePointBezierQuad.detail =
    "Gets a point on a quadratic Bezier spline.";
  raylib_GetSplinePointBezierQuad.documentation = new vscode.MarkdownString(
    "**raylib.GetSplinePointBezierQuad()**\n\nGets a point on a quadratic Bezier spline.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetSplinePointBezierQuad.insertText = new vscode.SnippetString(
    "raylib.GetSplinePointBezierQuad()"
  );
  completionItems.push(raylib_GetSplinePointBezierQuad);

  const raylib_GetSplinePointBezierCubic = new vscode.CompletionItem(
    "raylib.GetSplinePointBezierCubic",
    vscode.CompletionItemKind.Function
  );
  raylib_GetSplinePointBezierCubic.detail =
    "Gets a point on a cubic Bezier spline.";
  raylib_GetSplinePointBezierCubic.documentation = new vscode.MarkdownString(
    "**raylib.GetSplinePointBezierCubic()**\n\nGets a point on a cubic Bezier spline.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetSplinePointBezierCubic.insertText = new vscode.SnippetString(
    "raylib.GetSplinePointBezierCubic()"
  );
  completionItems.push(raylib_GetSplinePointBezierCubic);

  const raylib_CheckCollisionRecs = new vscode.CompletionItem(
    "raylib.CheckCollisionRecs",
    vscode.CompletionItemKind.Function
  );
  raylib_CheckCollisionRecs.detail = "Checks collision between two rectangles.";
  raylib_CheckCollisionRecs.documentation = new vscode.MarkdownString(
    "**raylib.CheckCollisionRecs()**\n\nChecks collision between two rectangles.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_CheckCollisionRecs.insertText = new vscode.SnippetString(
    "raylib.CheckCollisionRecs()"
  );
  completionItems.push(raylib_CheckCollisionRecs);

  const raylib_CheckCollisionCircles = new vscode.CompletionItem(
    "raylib.CheckCollisionCircles",
    vscode.CompletionItemKind.Function
  );
  raylib_CheckCollisionCircles.detail = "Checks collision between two circles.";
  raylib_CheckCollisionCircles.documentation = new vscode.MarkdownString(
    "**raylib.CheckCollisionCircles()**\n\nChecks collision between two circles.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_CheckCollisionCircles.insertText = new vscode.SnippetString(
    "raylib.CheckCollisionCircles()"
  );
  completionItems.push(raylib_CheckCollisionCircles);

  const raylib_CheckCollisionCircleRec = new vscode.CompletionItem(
    "raylib.CheckCollisionCircleRec",
    vscode.CompletionItemKind.Function
  );
  raylib_CheckCollisionCircleRec.detail =
    "Checks collision between a circle and a rectangle.";
  raylib_CheckCollisionCircleRec.documentation = new vscode.MarkdownString(
    "**raylib.CheckCollisionCircleRec()**\n\nChecks collision between a circle and a rectangle.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_CheckCollisionCircleRec.insertText = new vscode.SnippetString(
    "raylib.CheckCollisionCircleRec()"
  );
  completionItems.push(raylib_CheckCollisionCircleRec);

  const raylib_CheckCollisionCircleLine = new vscode.CompletionItem(
    "raylib.CheckCollisionCircleLine",
    vscode.CompletionItemKind.Function
  );
  raylib_CheckCollisionCircleLine.detail =
    "Checks collision between a circle and a line.";
  raylib_CheckCollisionCircleLine.documentation = new vscode.MarkdownString(
    "**raylib.CheckCollisionCircleLine()**\n\nChecks collision between a circle and a line.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_CheckCollisionCircleLine.insertText = new vscode.SnippetString(
    "raylib.CheckCollisionCircleLine()"
  );
  completionItems.push(raylib_CheckCollisionCircleLine);

  const raylib_CheckCollisionPointRec = new vscode.CompletionItem(
    "raylib.CheckCollisionPointRec",
    vscode.CompletionItemKind.Function
  );
  raylib_CheckCollisionPointRec.detail =
    "Checks collision between a point and a rectangle.";
  raylib_CheckCollisionPointRec.documentation = new vscode.MarkdownString(
    "**raylib.CheckCollisionPointRec()**\n\nChecks collision between a point and a rectangle.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_CheckCollisionPointRec.insertText = new vscode.SnippetString(
    "raylib.CheckCollisionPointRec()"
  );
  completionItems.push(raylib_CheckCollisionPointRec);

  const raylib_CheckCollisionPointCircle = new vscode.CompletionItem(
    "raylib.CheckCollisionPointCircle",
    vscode.CompletionItemKind.Function
  );
  raylib_CheckCollisionPointCircle.detail =
    "Checks collision between a point and a circle.";
  raylib_CheckCollisionPointCircle.documentation = new vscode.MarkdownString(
    "**raylib.CheckCollisionPointCircle()**\n\nChecks collision between a point and a circle.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_CheckCollisionPointCircle.insertText = new vscode.SnippetString(
    "raylib.CheckCollisionPointCircle()"
  );
  completionItems.push(raylib_CheckCollisionPointCircle);

  const raylib_CheckCollisionPointTriangle = new vscode.CompletionItem(
    "raylib.CheckCollisionPointTriangle",
    vscode.CompletionItemKind.Function
  );
  raylib_CheckCollisionPointTriangle.detail =
    "Checks collision between a point and a triangle.";
  raylib_CheckCollisionPointTriangle.documentation = new vscode.MarkdownString(
    "**raylib.CheckCollisionPointTriangle()**\n\nChecks collision between a point and a triangle.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_CheckCollisionPointTriangle.insertText = new vscode.SnippetString(
    "raylib.CheckCollisionPointTriangle()"
  );
  completionItems.push(raylib_CheckCollisionPointTriangle);

  const raylib_CheckCollisionPointLine = new vscode.CompletionItem(
    "raylib.CheckCollisionPointLine",
    vscode.CompletionItemKind.Function
  );
  raylib_CheckCollisionPointLine.detail =
    "Checks collision between a point and a line.";
  raylib_CheckCollisionPointLine.documentation = new vscode.MarkdownString(
    "**raylib.CheckCollisionPointLine()**\n\nChecks collision between a point and a line.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_CheckCollisionPointLine.insertText = new vscode.SnippetString(
    "raylib.CheckCollisionPointLine()"
  );
  completionItems.push(raylib_CheckCollisionPointLine);

  const raylib_CheckCollisionPointPoly = new vscode.CompletionItem(
    "raylib.CheckCollisionPointPoly",
    vscode.CompletionItemKind.Function
  );
  raylib_CheckCollisionPointPoly.detail =
    "Checks collision between a point and a polygon.";
  raylib_CheckCollisionPointPoly.documentation = new vscode.MarkdownString(
    "**raylib.CheckCollisionPointPoly()**\n\nChecks collision between a point and a polygon.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_CheckCollisionPointPoly.insertText = new vscode.SnippetString(
    "raylib.CheckCollisionPointPoly()"
  );
  completionItems.push(raylib_CheckCollisionPointPoly);

  const raylib_CheckCollisionLines = new vscode.CompletionItem(
    "raylib.CheckCollisionLines",
    vscode.CompletionItemKind.Function
  );
  raylib_CheckCollisionLines.detail = "Checks collision between two lines.";
  raylib_CheckCollisionLines.documentation = new vscode.MarkdownString(
    "**raylib.CheckCollisionLines()**\n\nChecks collision between two lines.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_CheckCollisionLines.insertText = new vscode.SnippetString(
    "raylib.CheckCollisionLines()"
  );
  completionItems.push(raylib_CheckCollisionLines);

  const raylib_GetCollisionRec = new vscode.CompletionItem(
    "raylib.GetCollisionRec",
    vscode.CompletionItemKind.Function
  );
  raylib_GetCollisionRec.detail =
    "Gets the collision rectangle between two rectangles.";
  raylib_GetCollisionRec.documentation = new vscode.MarkdownString(
    "**raylib.GetCollisionRec()**\n\nGets the collision rectangle between two rectangles.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetCollisionRec.insertText = new vscode.SnippetString(
    "raylib.GetCollisionRec()"
  );
  completionItems.push(raylib_GetCollisionRec);

  const raylib_InitWindow = new vscode.CompletionItem(
    "raylib.InitWindow",
    vscode.CompletionItemKind.Function
  );
  raylib_InitWindow.detail =
    "Initializes a window with specified width, height, and title.";
  raylib_InitWindow.documentation = new vscode.MarkdownString(
    "**raylib.InitWindow(width: int, height: int, title: string)**\n\nInitializes a window with specified width, height, and title.\n\n**Parameters:**\n- `width` (int): The width of the window in pixels.\n- `height` (int): The height of the window in pixels.\n- `title` (string): The title displayed in the window's title bar.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_InitWindow.insertText = new vscode.SnippetString(
    "raylib.InitWindow(${1:width}, ${2:height}, ${3:title})"
  );
  completionItems.push(raylib_InitWindow);

  const raylib_CloseWindow = new vscode.CompletionItem(
    "raylib.CloseWindow",
    vscode.CompletionItemKind.Function
  );
  raylib_CloseWindow.detail =
    "Closes the current window and releases all associated resources.";
  raylib_CloseWindow.documentation = new vscode.MarkdownString(
    "**raylib.CloseWindow()**\n\nCloses the current window and releases all associated resources.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_CloseWindow.insertText = new vscode.SnippetString(
    "raylib.CloseWindow()"
  );
  completionItems.push(raylib_CloseWindow);

  const raylib_WindowShouldClose = new vscode.CompletionItem(
    "raylib.WindowShouldClose",
    vscode.CompletionItemKind.Function
  );
  raylib_WindowShouldClose.detail = "Checks if the window should close.";
  raylib_WindowShouldClose.documentation = new vscode.MarkdownString(
    "**raylib.WindowShouldClose()**\n\nChecks if the window should close.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_WindowShouldClose.insertText = new vscode.SnippetString(
    "raylib.WindowShouldClose()"
  );
  completionItems.push(raylib_WindowShouldClose);

  const raylib_GetClipboardImage = new vscode.CompletionItem(
    "raylib.GetClipboardImage",
    vscode.CompletionItemKind.Function
  );
  raylib_GetClipboardImage.detail =
    "Retrieves an image from the system clipboard.";
  raylib_GetClipboardImage.documentation = new vscode.MarkdownString(
    "**raylib.GetClipboardImage()**\n\nRetrieves an image from the system clipboard.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetClipboardImage.insertText = new vscode.SnippetString(
    "raylib.GetClipboardImage()"
  );
  completionItems.push(raylib_GetClipboardImage);

  const raylib_SetWindowIcon = new vscode.CompletionItem(
    "raylib.SetWindowIcon",
    vscode.CompletionItemKind.Function
  );
  raylib_SetWindowIcon.detail = "Sets the window icon using an image.";
  raylib_SetWindowIcon.documentation = new vscode.MarkdownString(
    "**raylib.SetWindowIcon()**\n\nSets the window icon using an image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_SetWindowIcon.insertText = new vscode.SnippetString(
    "raylib.SetWindowIcon()"
  );
  completionItems.push(raylib_SetWindowIcon);

  const raylib_TakeScreenshot = new vscode.CompletionItem(
    "raylib.TakeScreenshot",
    vscode.CompletionItemKind.Function
  );
  raylib_TakeScreenshot.detail = "Captures a screenshot of the current window.";
  raylib_TakeScreenshot.documentation = new vscode.MarkdownString(
    "**raylib.TakeScreenshot()**\n\nCaptures a screenshot of the current window.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_TakeScreenshot.insertText = new vscode.SnippetString(
    "raylib.TakeScreenshot()"
  );
  completionItems.push(raylib_TakeScreenshot);

  const raylib_GetFPS = new vscode.CompletionItem(
    "raylib.GetFPS",
    vscode.CompletionItemKind.Function
  );
  raylib_GetFPS.detail =
    "Retrieves the current frames per second (FPS) of the application.";
  raylib_GetFPS.documentation = new vscode.MarkdownString(
    "**raylib.GetFPS()**\n\nRetrieves the current frames per second (FPS) of the application.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetFPS.insertText = new vscode.SnippetString("raylib.GetFPS()");
  completionItems.push(raylib_GetFPS);

  const raylib_IsWindowMinimized = new vscode.CompletionItem(
    "raylib.IsWindowMinimized",
    vscode.CompletionItemKind.Function
  );
  raylib_IsWindowMinimized.detail =
    "Checks if the current window is minimized.";
  raylib_IsWindowMinimized.documentation = new vscode.MarkdownString(
    "**raylib.IsWindowMinimized()**\n\nChecks if the current window is minimized.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_IsWindowMinimized.insertText = new vscode.SnippetString(
    "raylib.IsWindowMinimized()"
  );
  completionItems.push(raylib_IsWindowMinimized);

  const raylib_IsWindowMaximized = new vscode.CompletionItem(
    "raylib.IsWindowMaximized",
    vscode.CompletionItemKind.Function
  );
  raylib_IsWindowMaximized.detail =
    "Checks if the current window is maximized.";
  raylib_IsWindowMaximized.documentation = new vscode.MarkdownString(
    "**raylib.IsWindowMaximized()**\n\nChecks if the current window is maximized.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_IsWindowMaximized.insertText = new vscode.SnippetString(
    "raylib.IsWindowMaximized()"
  );
  completionItems.push(raylib_IsWindowMaximized);

  const raylib_RestoreWindow = new vscode.CompletionItem(
    "raylib.RestoreWindow",
    vscode.CompletionItemKind.Function
  );
  raylib_RestoreWindow.detail =
    "Restores the window if it is minimized or maximized.";
  raylib_RestoreWindow.documentation = new vscode.MarkdownString(
    "**raylib.RestoreWindow()**\n\nRestores the window if it is minimized or maximized.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_RestoreWindow.insertText = new vscode.SnippetString(
    "raylib.RestoreWindow()"
  );
  completionItems.push(raylib_RestoreWindow);

  const raylib_ToggleFullscreen = new vscode.CompletionItem(
    "raylib.ToggleFullscreen",
    vscode.CompletionItemKind.Function
  );
  raylib_ToggleFullscreen.detail = "Toggles fullscreen mode for the window.";
  raylib_ToggleFullscreen.documentation = new vscode.MarkdownString(
    "**raylib.ToggleFullscreen()**\n\nToggles fullscreen mode for the window.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ToggleFullscreen.insertText = new vscode.SnippetString(
    "raylib.ToggleFullscreen()"
  );
  completionItems.push(raylib_ToggleFullscreen);

  const raylib_SetClipboardText = new vscode.CompletionItem(
    "raylib.SetClipboardText",
    vscode.CompletionItemKind.Function
  );
  raylib_SetClipboardText.detail =
    "Sets the clipboard text to the specified value.";
  raylib_SetClipboardText.documentation = new vscode.MarkdownString(
    "**raylib.SetClipboardText()**\n\nSets the clipboard text to the specified value.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_SetClipboardText.insertText = new vscode.SnippetString(
    "raylib.SetClipboardText()"
  );
  completionItems.push(raylib_SetClipboardText);

  const raylib_GetClipboardText = new vscode.CompletionItem(
    "raylib.GetClipboardText",
    vscode.CompletionItemKind.Function
  );
  raylib_GetClipboardText.detail =
    "Gets the text currently stored in the system clipboard.";
  raylib_GetClipboardText.documentation = new vscode.MarkdownString(
    "**raylib.GetClipboardText()**\n\nGets the text currently stored in the system clipboard.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetClipboardText.insertText = new vscode.SnippetString(
    "raylib.GetClipboardText()"
  );
  completionItems.push(raylib_GetClipboardText);

  const raylib_GetMouseX = new vscode.CompletionItem(
    "raylib.GetMouseX",
    vscode.CompletionItemKind.Function
  );
  raylib_GetMouseX.detail =
    "Gets the X coordinate of the current mouse position.";
  raylib_GetMouseX.documentation = new vscode.MarkdownString(
    "**raylib.GetMouseX()**\n\nGets the X coordinate of the current mouse position.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetMouseX.insertText = new vscode.SnippetString("raylib.GetMouseX()");
  completionItems.push(raylib_GetMouseX);

  const raylib_GetMouseY = new vscode.CompletionItem(
    "raylib.GetMouseY",
    vscode.CompletionItemKind.Function
  );
  raylib_GetMouseY.detail =
    "Gets the Y coordinate of the current mouse position.";
  raylib_GetMouseY.documentation = new vscode.MarkdownString(
    "**raylib.GetMouseY()**\n\nGets the Y coordinate of the current mouse position.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetMouseY.insertText = new vscode.SnippetString("raylib.GetMouseY()");
  completionItems.push(raylib_GetMouseY);

  const raylib_GetMousePosition = new vscode.CompletionItem(
    "raylib.GetMousePosition",
    vscode.CompletionItemKind.Function
  );
  raylib_GetMousePosition.detail =
    "Gets the current position of the mouse as a Vector2.";
  raylib_GetMousePosition.documentation = new vscode.MarkdownString(
    "**raylib.GetMousePosition()**\n\nGets the current position of the mouse as a Vector2.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetMousePosition.insertText = new vscode.SnippetString(
    "raylib.GetMousePosition()"
  );
  completionItems.push(raylib_GetMousePosition);

  const raylib_GetMouseWheelMove = new vscode.CompletionItem(
    "raylib.GetMouseWheelMove",
    vscode.CompletionItemKind.Function
  );
  raylib_GetMouseWheelMove.detail = "Gets the movement of the mouse wheel.";
  raylib_GetMouseWheelMove.documentation = new vscode.MarkdownString(
    "**raylib.GetMouseWheelMove()**\n\nGets the movement of the mouse wheel.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetMouseWheelMove.insertText = new vscode.SnippetString(
    "raylib.GetMouseWheelMove()"
  );
  completionItems.push(raylib_GetMouseWheelMove);

  const raylib_GetFrameTime = new vscode.CompletionItem(
    "raylib.GetFrameTime",
    vscode.CompletionItemKind.Function
  );
  raylib_GetFrameTime.detail =
    "Gets the frame time (time to process one frame) in seconds.";
  raylib_GetFrameTime.documentation = new vscode.MarkdownString(
    "**raylib.GetFrameTime()**\n\nGets the frame time (time to process one frame) in seconds.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetFrameTime.insertText = new vscode.SnippetString(
    "raylib.GetFrameTime()"
  );
  completionItems.push(raylib_GetFrameTime);

  const raylib_IsKeyReleased = new vscode.CompletionItem(
    "raylib.IsKeyReleased",
    vscode.CompletionItemKind.Function
  );
  raylib_IsKeyReleased.detail =
    "Checks if a specific key was released during the current frame.";
  raylib_IsKeyReleased.documentation = new vscode.MarkdownString(
    "**raylib.IsKeyReleased()**\n\nChecks if a specific key was released during the current frame.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_IsKeyReleased.insertText = new vscode.SnippetString(
    "raylib.IsKeyReleased()"
  );
  completionItems.push(raylib_IsKeyReleased);

  const raylib_GetMonitorWidth = new vscode.CompletionItem(
    "raylib.GetMonitorWidth",
    vscode.CompletionItemKind.Function
  );
  raylib_GetMonitorWidth.detail = "Gets the width of the specified monitor.";
  raylib_GetMonitorWidth.documentation = new vscode.MarkdownString(
    "**raylib.GetMonitorWidth()**\n\nGets the width of the specified monitor.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetMonitorWidth.insertText = new vscode.SnippetString(
    "raylib.GetMonitorWidth()"
  );
  completionItems.push(raylib_GetMonitorWidth);

  const raylib_GetMonitorHeight = new vscode.CompletionItem(
    "raylib.GetMonitorHeight",
    vscode.CompletionItemKind.Function
  );
  raylib_GetMonitorHeight.detail = "Gets the height of the specified monitor.";
  raylib_GetMonitorHeight.documentation = new vscode.MarkdownString(
    "**raylib.GetMonitorHeight()**\n\nGets the height of the specified monitor.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetMonitorHeight.insertText = new vscode.SnippetString(
    "raylib.GetMonitorHeight()"
  );
  completionItems.push(raylib_GetMonitorHeight);

  const raylib_MaximizeWindow = new vscode.CompletionItem(
    "raylib.MaximizeWindow",
    vscode.CompletionItemKind.Function
  );
  raylib_MaximizeWindow.detail = "Maximizes the application window.";
  raylib_MaximizeWindow.documentation = new vscode.MarkdownString(
    "**raylib.MaximizeWindow()**\n\nMaximizes the application window.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_MaximizeWindow.insertText = new vscode.SnippetString(
    "raylib.MaximizeWindow()"
  );
  completionItems.push(raylib_MaximizeWindow);

  const raylib_MinimizeWindow = new vscode.CompletionItem(
    "raylib.MinimizeWindow",
    vscode.CompletionItemKind.Function
  );
  raylib_MinimizeWindow.detail = "Minimizes the application window.";
  raylib_MinimizeWindow.documentation = new vscode.MarkdownString(
    "**raylib.MinimizeWindow()**\n\nMinimizes the application window.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_MinimizeWindow.insertText = new vscode.SnippetString(
    "raylib.MinimizeWindow()"
  );
  completionItems.push(raylib_MinimizeWindow);

  const raylib_SetWindowTitle = new vscode.CompletionItem(
    "raylib.SetWindowTitle",
    vscode.CompletionItemKind.Function
  );
  raylib_SetWindowTitle.detail = "Sets the title of the application window.";
  raylib_SetWindowTitle.documentation = new vscode.MarkdownString(
    "**raylib.SetWindowTitle()**\n\nSets the title of the application window.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_SetWindowTitle.insertText = new vscode.SnippetString(
    "raylib.SetWindowTitle()"
  );
  completionItems.push(raylib_SetWindowTitle);

  const raylib_SetWindowPosition = new vscode.CompletionItem(
    "raylib.SetWindowPosition",
    vscode.CompletionItemKind.Function
  );
  raylib_SetWindowPosition.detail =
    "Sets the position of the application window.";
  raylib_SetWindowPosition.documentation = new vscode.MarkdownString(
    "**raylib.SetWindowPosition()**\n\nSets the position of the application window.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_SetWindowPosition.insertText = new vscode.SnippetString(
    "raylib.SetWindowPosition()"
  );
  completionItems.push(raylib_SetWindowPosition);

  const raylib_SetWindowMonitor = new vscode.CompletionItem(
    "raylib.SetWindowMonitor",
    vscode.CompletionItemKind.Function
  );
  raylib_SetWindowMonitor.detail =
    "Sets the monitor on which the window is displayed.";
  raylib_SetWindowMonitor.documentation = new vscode.MarkdownString(
    "**raylib.SetWindowMonitor()**\n\nSets the monitor on which the window is displayed.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_SetWindowMonitor.insertText = new vscode.SnippetString(
    "raylib.SetWindowMonitor()"
  );
  completionItems.push(raylib_SetWindowMonitor);

  const raylib_SetWindowSize = new vscode.CompletionItem(
    "raylib.SetWindowSize",
    vscode.CompletionItemKind.Function
  );
  raylib_SetWindowSize.detail = "Sets the size of the application window.";
  raylib_SetWindowSize.documentation = new vscode.MarkdownString(
    "**raylib.SetWindowSize()**\n\nSets the size of the application window.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_SetWindowSize.insertText = new vscode.SnippetString(
    "raylib.SetWindowSize()"
  );
  completionItems.push(raylib_SetWindowSize);

  const raylib_SetConfigFlags = new vscode.CompletionItem(
    "raylib.SetConfigFlags",
    vscode.CompletionItemKind.Function
  );
  raylib_SetConfigFlags.detail =
    "Sets configuration flags for the application window.";
  raylib_SetConfigFlags.documentation = new vscode.MarkdownString(
    "**raylib.SetConfigFlags()**\n\nSets configuration flags for the application window.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_SetConfigFlags.insertText = new vscode.SnippetString(
    "raylib.SetConfigFlags()"
  );
  completionItems.push(raylib_SetConfigFlags);

  const raylib_GetScreenWidth = new vscode.CompletionItem(
    "raylib.GetScreenWidth",
    vscode.CompletionItemKind.Function
  );
  raylib_GetScreenWidth.detail = "Gets the width of the screen.";
  raylib_GetScreenWidth.documentation = new vscode.MarkdownString(
    "**raylib.GetScreenWidth()**\n\nGets the width of the screen.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetScreenWidth.insertText = new vscode.SnippetString(
    "raylib.GetScreenWidth()"
  );
  completionItems.push(raylib_GetScreenWidth);

  const raylib_GetScreenHeight = new vscode.CompletionItem(
    "raylib.GetScreenHeight",
    vscode.CompletionItemKind.Function
  );
  raylib_GetScreenHeight.detail = "Gets the height of the screen.";
  raylib_GetScreenHeight.documentation = new vscode.MarkdownString(
    "**raylib.GetScreenHeight()**\n\nGets the height of the screen.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetScreenHeight.insertText = new vscode.SnippetString(
    "raylib.GetScreenHeight()"
  );
  completionItems.push(raylib_GetScreenHeight);

  const raylib_GetMonitorCount = new vscode.CompletionItem(
    "raylib.GetMonitorCount",
    vscode.CompletionItemKind.Function
  );
  raylib_GetMonitorCount.detail = "Gets the number of connected monitors.";
  raylib_GetMonitorCount.documentation = new vscode.MarkdownString(
    "**raylib.GetMonitorCount()**\n\nGets the number of connected monitors.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetMonitorCount.insertText = new vscode.SnippetString(
    "raylib.GetMonitorCount()"
  );
  completionItems.push(raylib_GetMonitorCount);

  const raylib_GetMonitorName = new vscode.CompletionItem(
    "raylib.GetMonitorName",
    vscode.CompletionItemKind.Function
  );
  raylib_GetMonitorName.detail = "Gets the name of a specific monitor.";
  raylib_GetMonitorName.documentation = new vscode.MarkdownString(
    "**raylib.GetMonitorName()**\n\nGets the name of a specific monitor.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetMonitorName.insertText = new vscode.SnippetString(
    "raylib.GetMonitorName()"
  );
  completionItems.push(raylib_GetMonitorName);

  const raylib_GetMonitorPhysicalWidth = new vscode.CompletionItem(
    "raylib.GetMonitorPhysicalWidth",
    vscode.CompletionItemKind.Function
  );
  raylib_GetMonitorPhysicalWidth.detail =
    "Gets the physical width of a specific monitor in millimeters.";
  raylib_GetMonitorPhysicalWidth.documentation = new vscode.MarkdownString(
    "**raylib.GetMonitorPhysicalWidth()**\n\nGets the physical width of a specific monitor in millimeters.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetMonitorPhysicalWidth.insertText = new vscode.SnippetString(
    "raylib.GetMonitorPhysicalWidth()"
  );
  completionItems.push(raylib_GetMonitorPhysicalWidth);

  const raylib_GetMonitorPhysicalHeight = new vscode.CompletionItem(
    "raylib.GetMonitorPhysicalHeight",
    vscode.CompletionItemKind.Function
  );
  raylib_GetMonitorPhysicalHeight.detail =
    "Gets the physical height of a specific monitor in millimeters.";
  raylib_GetMonitorPhysicalHeight.documentation = new vscode.MarkdownString(
    "**raylib.GetMonitorPhysicalHeight()**\n\nGets the physical height of a specific monitor in millimeters.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetMonitorPhysicalHeight.insertText = new vscode.SnippetString(
    "raylib.GetMonitorPhysicalHeight()"
  );
  completionItems.push(raylib_GetMonitorPhysicalHeight);

  const raylib_GetMonitorRefreshRate = new vscode.CompletionItem(
    "raylib.GetMonitorRefreshRate",
    vscode.CompletionItemKind.Function
  );
  raylib_GetMonitorRefreshRate.detail =
    "Gets the refresh rate of a specific monitor.";
  raylib_GetMonitorRefreshRate.documentation = new vscode.MarkdownString(
    "**raylib.GetMonitorRefreshRate()**\n\nGets the refresh rate of a specific monitor.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetMonitorRefreshRate.insertText = new vscode.SnippetString(
    "raylib.GetMonitorRefreshRate()"
  );
  completionItems.push(raylib_GetMonitorRefreshRate);

  const raylib_GetMonitorPosition = new vscode.CompletionItem(
    "raylib.GetMonitorPosition",
    vscode.CompletionItemKind.Function
  );
  raylib_GetMonitorPosition.detail =
    "Gets the position of a specific monitor on the screen.";
  raylib_GetMonitorPosition.documentation = new vscode.MarkdownString(
    "**raylib.GetMonitorPosition()**\n\nGets the position of a specific monitor on the screen.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetMonitorPosition.insertText = new vscode.SnippetString(
    "raylib.GetMonitorPosition()"
  );
  completionItems.push(raylib_GetMonitorPosition);

  const raylib_GetTime = new vscode.CompletionItem(
    "raylib.GetTime",
    vscode.CompletionItemKind.Function
  );
  raylib_GetTime.detail =
    "Gets the current time since the application started.";
  raylib_GetTime.documentation = new vscode.MarkdownString(
    "**raylib.GetTime()**\n\nGets the current time since the application started.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetTime.insertText = new vscode.SnippetString("raylib.GetTime()");
  completionItems.push(raylib_GetTime);

  const raylib_GetRandomValue = new vscode.CompletionItem(
    "raylib.GetRandomValue",
    vscode.CompletionItemKind.Function
  );
  raylib_GetRandomValue.detail =
    "Gets a random integer value between min and max (inclusive).";
  raylib_GetRandomValue.documentation = new vscode.MarkdownString(
    "**raylib.GetRandomValue()**\n\nGets a random integer value between min and max (inclusive).\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetRandomValue.insertText = new vscode.SnippetString(
    "raylib.GetRandomValue()"
  );
  completionItems.push(raylib_GetRandomValue);

  const raylib_SetTargetFPS = new vscode.CompletionItem(
    "raylib.SetTargetFPS",
    vscode.CompletionItemKind.Function
  );
  raylib_SetTargetFPS.detail =
    "Sets the target frames per second (FPS) for the application.";
  raylib_SetTargetFPS.documentation = new vscode.MarkdownString(
    "**raylib.SetTargetFPS()**\n\nSets the target frames per second (FPS) for the application.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_SetTargetFPS.insertText = new vscode.SnippetString(
    "raylib.SetTargetFPS()"
  );
  completionItems.push(raylib_SetTargetFPS);

  const raylib_GetTargetFPS = new vscode.CompletionItem(
    "raylib.GetTargetFPS",
    vscode.CompletionItemKind.Function
  );
  raylib_GetTargetFPS.detail =
    "Gets the currently set target frames per second (FPS).";
  raylib_GetTargetFPS.documentation = new vscode.MarkdownString(
    "**raylib.GetTargetFPS()**\n\nGets the currently set target frames per second (FPS).\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetTargetFPS.insertText = new vscode.SnippetString(
    "raylib.GetTargetFPS()"
  );
  completionItems.push(raylib_GetTargetFPS);

  const raylib_IsKeyDown = new vscode.CompletionItem(
    "raylib.IsKeyDown",
    vscode.CompletionItemKind.Function
  );
  raylib_IsKeyDown.detail =
    "Checks if a specific key is currently being held down.";
  raylib_IsKeyDown.documentation = new vscode.MarkdownString(
    "**raylib.IsKeyDown()**\n\nChecks if a specific key is currently being held down.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_IsKeyDown.insertText = new vscode.SnippetString("raylib.IsKeyDown()");
  completionItems.push(raylib_IsKeyDown);

  const raylib_IsKeyUp = new vscode.CompletionItem(
    "raylib.IsKeyUp",
    vscode.CompletionItemKind.Function
  );
  raylib_IsKeyUp.detail =
    "Checks if a specific key is currently not being held down.";
  raylib_IsKeyUp.documentation = new vscode.MarkdownString(
    "**raylib.IsKeyUp()**\n\nChecks if a specific key is currently not being held down.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_IsKeyUp.insertText = new vscode.SnippetString("raylib.IsKeyUp()");
  completionItems.push(raylib_IsKeyUp);

  const raylib_IsMouseButtonDown = new vscode.CompletionItem(
    "raylib.IsMouseButtonDown",
    vscode.CompletionItemKind.Function
  );
  raylib_IsMouseButtonDown.detail =
    "Checks if a specific mouse button is currently being held down.";
  raylib_IsMouseButtonDown.documentation = new vscode.MarkdownString(
    "**raylib.IsMouseButtonDown()**\n\nChecks if a specific mouse button is currently being held down.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_IsMouseButtonDown.insertText = new vscode.SnippetString(
    "raylib.IsMouseButtonDown()"
  );
  completionItems.push(raylib_IsMouseButtonDown);

  const raylib_IsMouseButtonUp = new vscode.CompletionItem(
    "raylib.IsMouseButtonUp",
    vscode.CompletionItemKind.Function
  );
  raylib_IsMouseButtonUp.detail =
    "Checks if a specific mouse button is currently up (not pressed).";
  raylib_IsMouseButtonUp.documentation = new vscode.MarkdownString(
    "**raylib.IsMouseButtonUp()**\n\nChecks if a specific mouse button is currently up (not pressed).\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_IsMouseButtonUp.insertText = new vscode.SnippetString(
    "raylib.IsMouseButtonUp()"
  );
  completionItems.push(raylib_IsMouseButtonUp);

  const raylib_SetMousePosition = new vscode.CompletionItem(
    "raylib.SetMousePosition",
    vscode.CompletionItemKind.Function
  );
  raylib_SetMousePosition.detail = "Sets the mouse position on the screen.";
  raylib_SetMousePosition.documentation = new vscode.MarkdownString(
    "**raylib.SetMousePosition()**\n\nSets the mouse position on the screen.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_SetMousePosition.insertText = new vscode.SnippetString(
    "raylib.SetMousePosition()"
  );
  completionItems.push(raylib_SetMousePosition);

  const raylib_SetMouseOffset = new vscode.CompletionItem(
    "raylib.SetMouseOffset",
    vscode.CompletionItemKind.Function
  );
  raylib_SetMouseOffset.detail =
    "Sets the mouse offset relative to the window.";
  raylib_SetMouseOffset.documentation = new vscode.MarkdownString(
    "**raylib.SetMouseOffset()**\n\nSets the mouse offset relative to the window.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_SetMouseOffset.insertText = new vscode.SnippetString(
    "raylib.SetMouseOffset()"
  );
  completionItems.push(raylib_SetMouseOffset);

  const raylib_SetMouseScale = new vscode.CompletionItem(
    "raylib.SetMouseScale",
    vscode.CompletionItemKind.Function
  );
  raylib_SetMouseScale.detail = "Sets the scale for mouse input.";
  raylib_SetMouseScale.documentation = new vscode.MarkdownString(
    "**raylib.SetMouseScale()**\n\nSets the scale for mouse input.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_SetMouseScale.insertText = new vscode.SnippetString(
    "raylib.SetMouseScale()"
  );
  completionItems.push(raylib_SetMouseScale);

  const raylib_GetTouchPosition = new vscode.CompletionItem(
    "raylib.GetTouchPosition",
    vscode.CompletionItemKind.Function
  );
  raylib_GetTouchPosition.detail = "Gets the position of a touch input.";
  raylib_GetTouchPosition.documentation = new vscode.MarkdownString(
    "**raylib.GetTouchPosition()**\n\nGets the position of a touch input.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetTouchPosition.insertText = new vscode.SnippetString(
    "raylib.GetTouchPosition()"
  );
  completionItems.push(raylib_GetTouchPosition);

  const raylib_ShowCursor = new vscode.CompletionItem(
    "raylib.ShowCursor",
    vscode.CompletionItemKind.Function
  );
  raylib_ShowCursor.detail = "Shows the mouse cursor on the screen.";
  raylib_ShowCursor.documentation = new vscode.MarkdownString(
    "**raylib.ShowCursor()**\n\nShows the mouse cursor on the screen.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ShowCursor.insertText = new vscode.SnippetString(
    "raylib.ShowCursor()"
  );
  completionItems.push(raylib_ShowCursor);

  const raylib_HideCursor = new vscode.CompletionItem(
    "raylib.HideCursor",
    vscode.CompletionItemKind.Function
  );
  raylib_HideCursor.detail = "Hides the mouse cursor on the screen.";
  raylib_HideCursor.documentation = new vscode.MarkdownString(
    "**raylib.HideCursor()**\n\nHides the mouse cursor on the screen.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_HideCursor.insertText = new vscode.SnippetString(
    "raylib.HideCursor()"
  );
  completionItems.push(raylib_HideCursor);

  const raylib_IsCursorHidden = new vscode.CompletionItem(
    "raylib.IsCursorHidden",
    vscode.CompletionItemKind.Function
  );
  raylib_IsCursorHidden.detail = "Checks if the cursor is currently hidden.";
  raylib_IsCursorHidden.documentation = new vscode.MarkdownString(
    "**raylib.IsCursorHidden()**\n\nChecks if the cursor is currently hidden.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_IsCursorHidden.insertText = new vscode.SnippetString(
    "raylib.IsCursorHidden()"
  );
  completionItems.push(raylib_IsCursorHidden);

  const raylib_EnableCursor = new vscode.CompletionItem(
    "raylib.EnableCursor",
    vscode.CompletionItemKind.Function
  );
  raylib_EnableCursor.detail = "Enables the mouse cursor.";
  raylib_EnableCursor.documentation = new vscode.MarkdownString(
    "**raylib.EnableCursor()**\n\nEnables the mouse cursor.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_EnableCursor.insertText = new vscode.SnippetString(
    "raylib.EnableCursor()"
  );
  completionItems.push(raylib_EnableCursor);

  const raylib_DisableCursor = new vscode.CompletionItem(
    "raylib.DisableCursor",
    vscode.CompletionItemKind.Function
  );
  raylib_DisableCursor.detail = "Disables the mouse cursor.";
  raylib_DisableCursor.documentation = new vscode.MarkdownString(
    "**raylib.DisableCursor()**\n\nDisables the mouse cursor.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DisableCursor.insertText = new vscode.SnippetString(
    "raylib.DisableCursor()"
  );
  completionItems.push(raylib_DisableCursor);

  const raylib_GetClipboardTextLength = new vscode.CompletionItem(
    "raylib.GetClipboardTextLength",
    vscode.CompletionItemKind.Function
  );
  raylib_GetClipboardTextLength.detail =
    "Gets the length of the clipboard text.";
  raylib_GetClipboardTextLength.documentation = new vscode.MarkdownString(
    "**raylib.GetClipboardTextLength()**\n\nGets the length of the clipboard text.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetClipboardTextLength.insertText = new vscode.SnippetString(
    "raylib.GetClipboardTextLength()"
  );
  completionItems.push(raylib_GetClipboardTextLength);

  const raylib_IsWindowReady = new vscode.CompletionItem(
    "raylib.IsWindowReady",
    vscode.CompletionItemKind.Function
  );
  raylib_IsWindowReady.detail = "Checks if the window is ready.";
  raylib_IsWindowReady.documentation = new vscode.MarkdownString(
    "**raylib.IsWindowReady()**\n\nChecks if the window is ready.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_IsWindowReady.insertText = new vscode.SnippetString(
    "raylib.IsWindowReady()"
  );
  completionItems.push(raylib_IsWindowReady);

  const raylib_IsWindowFocused = new vscode.CompletionItem(
    "raylib.IsWindowFocused",
    vscode.CompletionItemKind.Function
  );
  raylib_IsWindowFocused.detail = "Checks if the window is currently focused.";
  raylib_IsWindowFocused.documentation = new vscode.MarkdownString(
    "**raylib.IsWindowFocused()**\n\nChecks if the window is currently focused.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_IsWindowFocused.insertText = new vscode.SnippetString(
    "raylib.IsWindowFocused()"
  );
  completionItems.push(raylib_IsWindowFocused);

  const raylib_IsWindowFullscreen = new vscode.CompletionItem(
    "raylib.IsWindowFullscreen",
    vscode.CompletionItemKind.Function
  );
  raylib_IsWindowFullscreen.detail =
    "Checks if the window is in fullscreen mode.";
  raylib_IsWindowFullscreen.documentation = new vscode.MarkdownString(
    "**raylib.IsWindowFullscreen()**\n\nChecks if the window is in fullscreen mode.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_IsWindowFullscreen.insertText = new vscode.SnippetString(
    "raylib.IsWindowFullscreen()"
  );
  completionItems.push(raylib_IsWindowFullscreen);

  const raylib_IsWindowHidden = new vscode.CompletionItem(
    "raylib.IsWindowHidden",
    vscode.CompletionItemKind.Function
  );
  raylib_IsWindowHidden.detail = "Checks if the window is currently hidden.";
  raylib_IsWindowHidden.documentation = new vscode.MarkdownString(
    "**raylib.IsWindowHidden()**\n\nChecks if the window is currently hidden.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_IsWindowHidden.insertText = new vscode.SnippetString(
    "raylib.IsWindowHidden()"
  );
  completionItems.push(raylib_IsWindowHidden);

  const raylib_IsWindowResized = new vscode.CompletionItem(
    "raylib.IsWindowResized",
    vscode.CompletionItemKind.Function
  );
  raylib_IsWindowResized.detail = "Checks if the window has been resized.";
  raylib_IsWindowResized.documentation = new vscode.MarkdownString(
    "**raylib.IsWindowResized()**\n\nChecks if the window has been resized.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_IsWindowResized.insertText = new vscode.SnippetString(
    "raylib.IsWindowResized()"
  );
  completionItems.push(raylib_IsWindowResized);

  const raylib_IsWindowState = new vscode.CompletionItem(
    "raylib.IsWindowState",
    vscode.CompletionItemKind.Function
  );
  raylib_IsWindowState.detail = "Checks if the window has a specific state.";
  raylib_IsWindowState.documentation = new vscode.MarkdownString(
    "**raylib.IsWindowState()**\n\nChecks if the window has a specific state.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_IsWindowState.insertText = new vscode.SnippetString(
    "raylib.IsWindowState()"
  );
  completionItems.push(raylib_IsWindowState);

  const raylib_SetWindowState = new vscode.CompletionItem(
    "raylib.SetWindowState",
    vscode.CompletionItemKind.Function
  );
  raylib_SetWindowState.detail = "Sets a specific state for the window.";
  raylib_SetWindowState.documentation = new vscode.MarkdownString(
    "**raylib.SetWindowState()**\n\nSets a specific state for the window.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_SetWindowState.insertText = new vscode.SnippetString(
    "raylib.SetWindowState()"
  );
  completionItems.push(raylib_SetWindowState);

  const raylib_ClearWindowState = new vscode.CompletionItem(
    "raylib.ClearWindowState",
    vscode.CompletionItemKind.Function
  );
  raylib_ClearWindowState.detail = "Clears a specific state for the window.";
  raylib_ClearWindowState.documentation = new vscode.MarkdownString(
    "**raylib.ClearWindowState()**\n\nClears a specific state for the window.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ClearWindowState.insertText = new vscode.SnippetString(
    "raylib.ClearWindowState()"
  );
  completionItems.push(raylib_ClearWindowState);

  const raylib_ToggleBorderlessWindowed = new vscode.CompletionItem(
    "raylib.ToggleBorderlessWindowed",
    vscode.CompletionItemKind.Function
  );
  raylib_ToggleBorderlessWindowed.detail = "Toggles borderless windowed mode.";
  raylib_ToggleBorderlessWindowed.documentation = new vscode.MarkdownString(
    "**raylib.ToggleBorderlessWindowed()**\n\nToggles borderless windowed mode.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ToggleBorderlessWindowed.insertText = new vscode.SnippetString(
    "raylib.ToggleBorderlessWindowed()"
  );
  completionItems.push(raylib_ToggleBorderlessWindowed);

  const raylib_SetWindowMinSize = new vscode.CompletionItem(
    "raylib.SetWindowMinSize",
    vscode.CompletionItemKind.Function
  );
  raylib_SetWindowMinSize.detail = "Sets the minimum size of the window.";
  raylib_SetWindowMinSize.documentation = new vscode.MarkdownString(
    "**raylib.SetWindowMinSize()**\n\nSets the minimum size of the window.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_SetWindowMinSize.insertText = new vscode.SnippetString(
    "raylib.SetWindowMinSize()"
  );
  completionItems.push(raylib_SetWindowMinSize);

  const raylib_SetWindowMaxSize = new vscode.CompletionItem(
    "raylib.SetWindowMaxSize",
    vscode.CompletionItemKind.Function
  );
  raylib_SetWindowMaxSize.detail = "Sets the maximum size of the window.";
  raylib_SetWindowMaxSize.documentation = new vscode.MarkdownString(
    "**raylib.SetWindowMaxSize()**\n\nSets the maximum size of the window.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_SetWindowMaxSize.insertText = new vscode.SnippetString(
    "raylib.SetWindowMaxSize()"
  );
  completionItems.push(raylib_SetWindowMaxSize);

  const raylib_SetWindowOpacity = new vscode.CompletionItem(
    "raylib.SetWindowOpacity",
    vscode.CompletionItemKind.Function
  );
  raylib_SetWindowOpacity.detail = "Sets the opacity of the window.";
  raylib_SetWindowOpacity.documentation = new vscode.MarkdownString(
    "**raylib.SetWindowOpacity()**\n\nSets the opacity of the window.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_SetWindowOpacity.insertText = new vscode.SnippetString(
    "raylib.SetWindowOpacity()"
  );
  completionItems.push(raylib_SetWindowOpacity);

  const raylib_SetWindowFocused = new vscode.CompletionItem(
    "raylib.SetWindowFocused",
    vscode.CompletionItemKind.Function
  );
  raylib_SetWindowFocused.detail = "Sets the window as focused.";
  raylib_SetWindowFocused.documentation = new vscode.MarkdownString(
    "**raylib.SetWindowFocused()**\n\nSets the window as focused.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_SetWindowFocused.insertText = new vscode.SnippetString(
    "raylib.SetWindowFocused()"
  );
  completionItems.push(raylib_SetWindowFocused);

  const raylib_GetWindowHandle = new vscode.CompletionItem(
    "raylib.GetWindowHandle",
    vscode.CompletionItemKind.Function
  );
  raylib_GetWindowHandle.detail = "Gets the window handle.";
  raylib_GetWindowHandle.documentation = new vscode.MarkdownString(
    "**raylib.GetWindowHandle()**\n\nGets the window handle.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetWindowHandle.insertText = new vscode.SnippetString(
    "raylib.GetWindowHandle()"
  );
  completionItems.push(raylib_GetWindowHandle);

  const raylib_GetCurrentMonitor = new vscode.CompletionItem(
    "raylib.GetCurrentMonitor",
    vscode.CompletionItemKind.Function
  );
  raylib_GetCurrentMonitor.detail = "Gets the current monitor.";
  raylib_GetCurrentMonitor.documentation = new vscode.MarkdownString(
    "**raylib.GetCurrentMonitor()**\n\nGets the current monitor.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetCurrentMonitor.insertText = new vscode.SnippetString(
    "raylib.GetCurrentMonitor()"
  );
  completionItems.push(raylib_GetCurrentMonitor);

  const raylib_GetWindowScaleDPI = new vscode.CompletionItem(
    "raylib.GetWindowScaleDPI",
    vscode.CompletionItemKind.Function
  );
  raylib_GetWindowScaleDPI.detail = "Gets the window's DPI scale.";
  raylib_GetWindowScaleDPI.documentation = new vscode.MarkdownString(
    "**raylib.GetWindowScaleDPI()**\n\nGets the window's DPI scale.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetWindowScaleDPI.insertText = new vscode.SnippetString(
    "raylib.GetWindowScaleDPI()"
  );
  completionItems.push(raylib_GetWindowScaleDPI);

  const raylib_EnableEventWaiting = new vscode.CompletionItem(
    "raylib.EnableEventWaiting",
    vscode.CompletionItemKind.Function
  );
  raylib_EnableEventWaiting.detail = "Enables event waiting.";
  raylib_EnableEventWaiting.documentation = new vscode.MarkdownString(
    "**raylib.EnableEventWaiting()**\n\nEnables event waiting.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_EnableEventWaiting.insertText = new vscode.SnippetString(
    "raylib.EnableEventWaiting()"
  );
  completionItems.push(raylib_EnableEventWaiting);

  const raylib_DisableEventWaiting = new vscode.CompletionItem(
    "raylib.DisableEventWaiting",
    vscode.CompletionItemKind.Function
  );
  raylib_DisableEventWaiting.detail = "Disables event waiting.";
  raylib_DisableEventWaiting.documentation = new vscode.MarkdownString(
    "**raylib.DisableEventWaiting()**\n\nDisables event waiting.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DisableEventWaiting.insertText = new vscode.SnippetString(
    "raylib.DisableEventWaiting()"
  );
  completionItems.push(raylib_DisableEventWaiting);

  const raylib_IsCursorOnScreen = new vscode.CompletionItem(
    "raylib.IsCursorOnScreen",
    vscode.CompletionItemKind.Function
  );
  raylib_IsCursorOnScreen.detail = "Checks if the cursor is on the screen.";
  raylib_IsCursorOnScreen.documentation = new vscode.MarkdownString(
    "**raylib.IsCursorOnScreen()**\n\nChecks if the cursor is on the screen.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_IsCursorOnScreen.insertText = new vscode.SnippetString(
    "raylib.IsCursorOnScreen()"
  );
  completionItems.push(raylib_IsCursorOnScreen);

  const raylib_BeginDrawing = new vscode.CompletionItem(
    "raylib.BeginDrawing",
    vscode.CompletionItemKind.Function
  );
  raylib_BeginDrawing.detail = "Starts a new frame for drawing on the screen.";
  raylib_BeginDrawing.documentation = new vscode.MarkdownString(
    "**raylib.BeginDrawing()**\n\nStarts a new frame for drawing on the screen.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_BeginDrawing.insertText = new vscode.SnippetString(
    "raylib.BeginDrawing()"
  );
  completionItems.push(raylib_BeginDrawing);

  const raylib_EndDrawing = new vscode.CompletionItem(
    "raylib.EndDrawing",
    vscode.CompletionItemKind.Function
  );
  raylib_EndDrawing.detail =
    "Ends the current frame and presents the drawn content to the screen.";
  raylib_EndDrawing.documentation = new vscode.MarkdownString(
    "**raylib.EndDrawing()**\n\nEnds the current frame and presents the drawn content to the screen.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_EndDrawing.insertText = new vscode.SnippetString(
    "raylib.EndDrawing()"
  );
  completionItems.push(raylib_EndDrawing);

  const raylib_ClearBackground = new vscode.CompletionItem(
    "raylib.ClearBackground",
    vscode.CompletionItemKind.Function
  );
  raylib_ClearBackground.detail =
    "Clears the entire screen with the specified color.";
  raylib_ClearBackground.documentation = new vscode.MarkdownString(
    "**raylib.ClearBackground()**\n\nClears the entire screen with the specified color.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ClearBackground.insertText = new vscode.SnippetString(
    "raylib.ClearBackground()"
  );
  completionItems.push(raylib_ClearBackground);

  const raylib_DrawRectangle = new vscode.CompletionItem(
    "raylib.DrawRectangle",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawRectangle.detail = "Draws a color-filled rectangle on the screen.";
  raylib_DrawRectangle.documentation = new vscode.MarkdownString(
    "**raylib.DrawRectangle(posX: int, posY: int, width: int, height: int, color: table)**\n\nDraws a color-filled rectangle on the screen.\n\n**Parameters:**\n- `posX` (int): X-coordinate of the top-left corner of the rectangle.\n- `posY` (int): Y-coordinate of the top-left corner of the rectangle.\n- `width` (int): Width of the rectangle.\n- `height` (int): Height of the rectangle.\n- `color` (table): Color table with `r`, `g`, `b`, and optional `a` components in the range [0, 255].\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawRectangle.insertText = new vscode.SnippetString(
    "raylib.DrawRectangle(${1:posX}, ${2:posY}, ${3:width}, ${4:height}, ${5:color})"
  );
  completionItems.push(raylib_DrawRectangle);

  const raylib_DrawCircle = new vscode.CompletionItem(
    "raylib.DrawCircle",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawCircle.detail = "Draws a color-filled circle on the screen.";
  raylib_DrawCircle.documentation = new vscode.MarkdownString(
    "**raylib.DrawCircle(centerX: int, centerY: int, radius: float, color: table)**\n\nDraws a color-filled circle on the screen.\n\n**Parameters:**\n- `centerX` (int): X-coordinate of the center of the circle.\n- `centerY` (int): Y-coordinate of the center of the circle.\n- `radius` (float): Radius of the circle.\n- `color` (table): Color table with `r`, `g`, `b`, and optional `a` components in the range [0, 255].\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawCircle.insertText = new vscode.SnippetString(
    "raylib.DrawCircle(${1:centerX}, ${2:centerY}, ${3:radius}, ${4:color})"
  );
  completionItems.push(raylib_DrawCircle);

  const raylib_DrawLineEx = new vscode.CompletionItem(
    "raylib.DrawLineEx",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawLineEx.detail =
    "Draws a thick line with customizable start and end points.";
  raylib_DrawLineEx.documentation = new vscode.MarkdownString(
    "**raylib.DrawLineEx(startX: float, startY: float, endX: float, endY: float, thickness: float, color: table)**\n\nDraws a thick line with customizable start and end points.\n\n**Parameters:**\n- `startX` (float): X-coordinate of the start position.\n- `startY` (float): Y-coordinate of the start position.\n- `endX` (float): X-coordinate of the end position.\n- `endY` (float): Y-coordinate of the end position.\n- `thickness` (float): Thickness of the line.\n- `color` (table): Color table with `r`, `g`, `b`, and optional `a` components in the range [0, 255].\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawLineEx.insertText = new vscode.SnippetString(
    "raylib.DrawLineEx(${1:startX}, ${2:startY}, ${3:endX}, ${4:endY}, ${5:thickness}, ${6:color})"
  );
  completionItems.push(raylib_DrawLineEx);

  const raylib_DrawEllipse = new vscode.CompletionItem(
    "raylib.DrawEllipse",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawEllipse.detail = "Draws a color-filled ellipse on the screen.";
  raylib_DrawEllipse.documentation = new vscode.MarkdownString(
    "**raylib.DrawEllipse(centerX: int, centerY: int, radiusH: float, radiusV: float, color: table)**\n\nDraws a color-filled ellipse on the screen.\n\n**Parameters:**\n- `centerX` (int): X-coordinate of the center of the ellipse.\n- `centerY` (int): Y-coordinate of the center of the ellipse.\n- `radiusH` (float): Horizontal radius of the ellipse.\n- `radiusV` (float): Vertical radius of the ellipse.\n- `color` (table): Color table with `r`, `g`, `b`, and optional `a` components in the range [0, 255].\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawEllipse.insertText = new vscode.SnippetString(
    "raylib.DrawEllipse(${1:centerX}, ${2:centerY}, ${3:radiusH}, ${4:radiusV}, ${5:color})"
  );
  completionItems.push(raylib_DrawEllipse);

  const raylib_DrawRectangleLines = new vscode.CompletionItem(
    "raylib.DrawRectangleLines",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawRectangleLines.detail =
    "Draws the outline of a rectangle with specified parameters.";
  raylib_DrawRectangleLines.documentation = new vscode.MarkdownString(
    "**raylib.DrawRectangleLines(posX: int, posY: int, width: int, height: int, color: table)**\n\nDraws the outline of a rectangle with specified parameters.\n\n**Parameters:**\n- `posX` (int): X-coordinate of the top-left corner of the rectangle.\n- `posY` (int): Y-coordinate of the top-left corner of the rectangle.\n- `width` (int): Width of the rectangle.\n- `height` (int): Height of the rectangle.\n- `color` (table): Color table with `r`, `g`, `b`, and optional `a` components in the range [0, 255].\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawRectangleLines.insertText = new vscode.SnippetString(
    "raylib.DrawRectangleLines(${1:posX}, ${2:posY}, ${3:width}, ${4:height}, ${5:color})"
  );
  completionItems.push(raylib_DrawRectangleLines);

  const raylib_DrawRectangleGradient = new vscode.CompletionItem(
    "raylib.DrawRectangleGradient",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawRectangleGradient.detail =
    "Draws a rectangle with a gradient fill.";
  raylib_DrawRectangleGradient.documentation = new vscode.MarkdownString(
    "**raylib.DrawRectangleGradient(posX: int, posY: int, width: int, height: int, color1: table, color2: table)**\n\nDraws a rectangle with a gradient fill.\n\n**Parameters:**\n- `posX` (int): X-coordinate of the top-left corner of the rectangle.\n- `posY` (int): Y-coordinate of the top-left corner of the rectangle.\n- `width` (int): Width of the rectangle.\n- `height` (int): Height of the rectangle.\n- `color1` (table): First color in the gradient (top or left).\n- `color2` (table): Second color in the gradient (bottom or right).\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawRectangleGradient.insertText = new vscode.SnippetString(
    "raylib.DrawRectangleGradient(${1:posX}, ${2:posY}, ${3:width}, ${4:height}, ${5:color1}, ${6:color2})"
  );
  completionItems.push(raylib_DrawRectangleGradient);

  const raylib_DrawRectangleRounded = new vscode.CompletionItem(
    "raylib.DrawRectangleRounded",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawRectangleRounded.detail =
    "Draws a rounded rectangle with specified parameters.";
  raylib_DrawRectangleRounded.documentation = new vscode.MarkdownString(
    "**raylib.DrawRectangleRounded(posX: int, posY: int, width: int, height: int, roundness: float, segments: int, color: table)**\n\nDraws a rounded rectangle with specified parameters.\n\n**Parameters:**\n- `posX` (int): X-coordinate of the top-left corner of the rectangle.\n- `posY` (int): Y-coordinate of the top-left corner of the rectangle.\n- `width` (int): Width of the rectangle.\n- `height` (int): Height of the rectangle.\n- `roundness` (float): Controls the roundness of the rectangle's corners (value between 0.0 and 1.0).\n- `segments` (int): Number of segments used to draw the rounded corners.\n- `color` (table): Color table with `r`, `g`, `b`, and optional `a` components in the range [0, 255].\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawRectangleRounded.insertText = new vscode.SnippetString(
    "raylib.DrawRectangleRounded(${1:posX}, ${2:posY}, ${3:width}, ${4:height}, ${5:roundness}, ${6:segments}, ${7:color})"
  );
  completionItems.push(raylib_DrawRectangleRounded);

  const raylib_DrawLineStrip = new vscode.CompletionItem(
    "raylib.DrawLineStrip",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawLineStrip.detail = "Draws a line strip with specified parameters.";
  raylib_DrawLineStrip.documentation = new vscode.MarkdownString(
    "**raylib.DrawLineStrip(points: table, color: table)**\n\nDraws a line strip with specified parameters.\n\n**Parameters:**\n- `points` (table): An array of points (Vector2) representing the vertices of the line strip.\n- `color` (table): Color table with `r`, `g`, `b`, and optional `a` components in the range [0, 255].\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawLineStrip.insertText = new vscode.SnippetString(
    "raylib.DrawLineStrip(${1:points}, ${2:color})"
  );
  completionItems.push(raylib_DrawLineStrip);

  const raylib_DrawPoly = new vscode.CompletionItem(
    "raylib.DrawPoly",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawPoly.detail = "Draws a polygon with specified parameters.";
  raylib_DrawPoly.documentation = new vscode.MarkdownString(
    "**raylib.DrawPoly(center: table, sides: int, radius: float, rotation: float, color: table)**\n\nDraws a polygon with specified parameters.\n\n**Parameters:**\n- `center` (table): The center position of the polygon as a Vector2 `{x, y}`.\n- `sides` (int): The number of sides of the polygon (e.g., 3 for a triangle, 6 for a hexagon).\n- `radius` (float): The radius of the polygon (distance from center to vertex).\n- `rotation` (float): The rotation of the polygon in degrees.\n- `color` (table): Color table with `r`, `g`, `b`, and optional `a` components in the range [0, 255].\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawPoly.insertText = new vscode.SnippetString(
    "raylib.DrawPoly(${1:center}, ${2:sides}, ${3:radius}, ${4:rotation}, ${5:color})"
  );
  completionItems.push(raylib_DrawPoly);

  const raylib_DrawPolyLines = new vscode.CompletionItem(
    "raylib.DrawPolyLines",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawPolyLines.detail =
    "Draws the outline of a polygon with specified parameters.";
  raylib_DrawPolyLines.documentation = new vscode.MarkdownString(
    "**raylib.DrawPolyLines(center: table, sides: int, radius: float, rotation: float, color: table)**\n\nDraws the outline of a polygon with specified parameters.\n\n**Parameters:**\n- `center` (table): The center position of the polygon as a Vector2 `{x, y}`.\n- `sides` (int): The number of sides of the polygon (e.g., 3 for a triangle, 6 for a hexagon).\n- `radius` (float): The radius of the polygon (distance from center to vertex).\n- `rotation` (float): The rotation of the polygon in degrees.\n- `color` (table): Color table with `r`, `g`, `b`, and optional `a` components in the range [0, 255].\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawPolyLines.insertText = new vscode.SnippetString(
    "raylib.DrawPolyLines(${1:center}, ${2:sides}, ${3:radius}, ${4:rotation}, ${5:color})"
  );
  completionItems.push(raylib_DrawPolyLines);

  const raylib_DrawPolyLinesEx = new vscode.CompletionItem(
    "raylib.DrawPolyLinesEx",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawPolyLinesEx.detail =
    "Draws the outline of a polygon with extended parameters.";
  raylib_DrawPolyLinesEx.documentation = new vscode.MarkdownString(
    "**raylib.DrawPolyLinesEx(center: table, sides: int, radius: float, rotation: float, thickness: float, color: table)**\n\nDraws the outline of a polygon with extended parameters.\n\n**Parameters:**\n- `center` (table): The center position of the polygon as a Vector2 `{x, y}`.\n- `sides` (int): The number of sides of the polygon (e.g., 3 for a triangle, 6 for a hexagon).\n- `radius` (float): The radius of the polygon (distance from center to vertex).\n- `rotation` (float): The rotation of the polygon in degrees.\n- `thickness` (float): The thickness of the outline in pixels.\n- `color` (table): Color table with `r`, `g`, `b`, and optional `a` components in the range [0, 255].\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawPolyLinesEx.insertText = new vscode.SnippetString(
    "raylib.DrawPolyLinesEx(${1:center}, ${2:sides}, ${3:radius}, ${4:rotation}, ${5:thickness}, ${6:color})"
  );
  completionItems.push(raylib_DrawPolyLinesEx);

  const raylib_DrawCircleSector = new vscode.CompletionItem(
    "raylib.DrawCircleSector",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawCircleSector.detail =
    "Draws a sector of a circle with specified parameters.";
  raylib_DrawCircleSector.documentation = new vscode.MarkdownString(
    "**raylib.DrawCircleSector(center: table, radius: float, startAngle: float, endAngle: float, segments: int, color: table)**\n\nDraws a sector of a circle with specified parameters.\n\n**Parameters:**\n- `center` (table): The center position of the circle as a Vector2 `{x, y}`.\n- `radius` (float): The radius of the sector.\n- `startAngle` (float): The starting angle of the sector in degrees.\n- `endAngle` (float): The ending angle of the sector in degrees.\n- `segments` (int): The number of segments used to draw the curve (higher values produce smoother edges).\n- `color` (table): Color table with `r`, `g`, `b`, and optional `a` components in the range [0, 255].\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawCircleSector.insertText = new vscode.SnippetString(
    "raylib.DrawCircleSector(${1:center}, ${2:radius}, ${3:startAngle}, ${4:endAngle}, ${5:segments}, ${6:color})"
  );
  completionItems.push(raylib_DrawCircleSector);

  const raylib_DrawCircleSectorLines = new vscode.CompletionItem(
    "raylib.DrawCircleSectorLines",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawCircleSectorLines.detail =
    "Draws the outline of a sector of a circle with specified parameters.";
  raylib_DrawCircleSectorLines.documentation = new vscode.MarkdownString(
    "**raylib.DrawCircleSectorLines(center: table, radius: float, startAngle: float, endAngle: float, segments: int, color: table)**\n\nDraws the outline of a sector of a circle with specified parameters.\n\n**Parameters:**\n- `center` (table): The center position of the circle as a Vector2 `{x, y}`.\n- `radius` (float): The radius of the sector.\n- `startAngle` (float): The starting angle of the sector in degrees.\n- `endAngle` (float): The ending angle of the sector in degrees.\n- `segments` (int): The number of segments used to draw the curve (higher values produce smoother edges).\n- `color` (table): Color table with `r`, `g`, `b`, and optional `a` components in the range [0, 255].\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawCircleSectorLines.insertText = new vscode.SnippetString(
    "raylib.DrawCircleSectorLines(${1:center}, ${2:radius}, ${3:startAngle}, ${4:endAngle}, ${5:segments}, ${6:color})"
  );
  completionItems.push(raylib_DrawCircleSectorLines);

  const raylib_DrawRectangleGradientV = new vscode.CompletionItem(
    "raylib.DrawRectangleGradientV",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawRectangleGradientV.detail =
    "Draws a rectangle with a vertical gradient fill.";
  raylib_DrawRectangleGradientV.documentation = new vscode.MarkdownString(
    "**raylib.DrawRectangleGradientV(posX: int, posY: int, width: int, height: int, top: table, bottom: table)**\n\nDraws a rectangle with a vertical gradient fill.\n\n**Parameters:**\n- `posX` (int): The x-coordinate of the top-left corner of the rectangle.\n- `posY` (int): The y-coordinate of the top-left corner of the rectangle.\n- `width` (int): The width of the rectangle.\n- `height` (int): The height of the rectangle.\n- `top` (table): The color for the top of the rectangle, as a table with `r`, `g`, `b`, and optional `a` components.\n- `bottom` (table): The color for the bottom of the rectangle, as a table with `r`, `g`, `b`, and optional `a` components.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawRectangleGradientV.insertText = new vscode.SnippetString(
    "raylib.DrawRectangleGradientV(${1:posX}, ${2:posY}, ${3:width}, ${4:height}, ${5:top}, ${6:bottom})"
  );
  completionItems.push(raylib_DrawRectangleGradientV);

  const raylib_DrawRectangleGradientEx = new vscode.CompletionItem(
    "raylib.DrawRectangleGradientEx",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawRectangleGradientEx.detail =
    "Draws a rectangle with an extended gradient fill.";
  raylib_DrawRectangleGradientEx.documentation = new vscode.MarkdownString(
    "**raylib.DrawRectangleGradientEx(rec: table, topLeft: table, topRight: table, bottomLeft: table, bottomRight: table)**\n\nDraws a rectangle with an extended gradient fill.\n\n**Parameters:**\n- `rec` (table): A table representing the rectangle as `{x, y, width, height}`.\n- `topLeft` (table): The color of the top-left corner, as a table with `r`, `g`, `b`, and optional `a` components.\n- `topRight` (table): The color of the top-right corner, as a table with `r`, `g`, `b`, and optional `a` components.\n- `bottomLeft` (table): The color of the bottom-left corner, as a table with `r`, `g`, `b`, and optional `a` components.\n- `bottomRight` (table): The color of the bottom-right corner, as a table with `r`, `g`, `b`, and optional `a` components.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawRectangleGradientEx.insertText = new vscode.SnippetString(
    "raylib.DrawRectangleGradientEx(${1:rec}, ${2:topLeft}, ${3:topRight}, ${4:bottomLeft}, ${5:bottomRight})"
  );
  completionItems.push(raylib_DrawRectangleGradientEx);

  const raylib_DrawCircleGradient = new vscode.CompletionItem(
    "raylib.DrawCircleGradient",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawCircleGradient.detail = "Draws a circle with a gradient fill.";
  raylib_DrawCircleGradient.documentation = new vscode.MarkdownString(
    "**raylib.DrawCircleGradient(centerX: int, centerY: int, radius: float, innerColor: table, outerColor: table)**\n\nDraws a circle with a gradient fill.\n\n**Parameters:**\n- `centerX` (int): The x-coordinate of the center of the circle.\n- `centerY` (int): The y-coordinate of the center of the circle.\n- `radius` (float): The radius of the circle.\n- `innerColor` (table): The color at the center of the circle, as a table with `r`, `g`, `b`, and optional `a` components.\n- `outerColor` (table): The color at the edge of the circle, as a table with `r`, `g`, `b`, and optional `a` components.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawCircleGradient.insertText = new vscode.SnippetString(
    "raylib.DrawCircleGradient(${1:centerX}, ${2:centerY}, ${3:radius}, ${4:innerColor}, ${5:outerColor})"
  );
  completionItems.push(raylib_DrawCircleGradient);

  const raylib_DrawLine = new vscode.CompletionItem(
    "raylib.DrawLine",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawLine.detail = "Draws a line between two points.";
  raylib_DrawLine.documentation = new vscode.MarkdownString(
    "**raylib.DrawLine(startX: int, startY: int, endX: int, endY: int, color: table)**\n\nDraws a line between two points.\n\n**Parameters:**\n- `startX` (int): The x-coordinate of the start of the line.\n- `startY` (int): The y-coordinate of the start of the line.\n- `endX` (int): The x-coordinate of the end of the line.\n- `endY` (int): The y-coordinate of the end of the line.\n- `color` (table): Color table with `r`, `g`, `b`, and optional `a` components in the range [0, 255].\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawLine.insertText = new vscode.SnippetString(
    "raylib.DrawLine(${1:startX}, ${2:startY}, ${3:endX}, ${4:endY}, ${5:color})"
  );
  completionItems.push(raylib_DrawLine);

  const raylib_DrawLineBezier = new vscode.CompletionItem(
    "raylib.DrawLineBezier",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawLineBezier.detail =
    "Draws a Bezier line with specified parameters.";
  raylib_DrawLineBezier.documentation = new vscode.MarkdownString(
    "**raylib.DrawLineBezier(startPos: table, endPos: table, thick: float, color: table)**\n\nDraws a Bezier line with specified parameters.\n\n**Parameters:**\n- `startPos` (table): The start position of the line as a Vector2 `{x, y}`.\n- `endPos` (table): The end position of the line as a Vector2 `{x, y}`.\n- `thick` (float): The thickness of the Bezier curve line.\n- `color` (table): Color table with `r`, `g`, `b`, and optional `a` components in the range [0, 255].\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawLineBezier.insertText = new vscode.SnippetString(
    "raylib.DrawLineBezier(${1:startPos}, ${2:endPos}, ${3:thick}, ${4:color})"
  );
  completionItems.push(raylib_DrawLineBezier);

  const raylib_DrawTriangle = new vscode.CompletionItem(
    "raylib.DrawTriangle",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawTriangle.detail = "Draws a triangle with specified parameters.";
  raylib_DrawTriangle.documentation = new vscode.MarkdownString(
    "**raylib.DrawTriangle(v1: table, v2: table, v3: table, color: table)**\n\nDraws a triangle with specified parameters.\n\n**Parameters:**\n- `v1` (table): The first vertex of the triangle as a Vector2 `{x, y}`.\n- `v2` (table): The second vertex of the triangle as a Vector2 `{x, y}`.\n- `v3` (table): The third vertex of the triangle as a Vector2 `{x, y}`.\n- `color` (table): Color table with `r`, `g`, `b`, and optional `a` components in the range [0, 255].\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawTriangle.insertText = new vscode.SnippetString(
    "raylib.DrawTriangle(${1:v1}, ${2:v2}, ${3:v3}, ${4:color})"
  );
  completionItems.push(raylib_DrawTriangle);

  const raylib_DrawTriangleLines = new vscode.CompletionItem(
    "raylib.DrawTriangleLines",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawTriangleLines.detail =
    "Draws the outline of a triangle with specified parameters.";
  raylib_DrawTriangleLines.documentation = new vscode.MarkdownString(
    "**raylib.DrawTriangleLines(v1: table, v2: table, v3: table, color: table)**\n\nDraws the outline of a triangle with specified parameters.\n\n**Parameters:**\n- `v1` (table): The first vertex of the triangle as a Vector2 `{x, y}`.\n- `v2` (table): The second vertex of the triangle as a Vector2 `{x, y}`.\n- `v3` (table): The third vertex of the triangle as a Vector2 `{x, y}`.\n- `color` (table): Color table with `r`, `g`, `b`, and optional `a` components in the range [0, 255].\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawTriangleLines.insertText = new vscode.SnippetString(
    "raylib.DrawTriangleLines(${1:v1}, ${2:v2}, ${3:v3}, ${4:color})"
  );
  completionItems.push(raylib_DrawTriangleLines);

  const raylib_DrawTriangleStrip = new vscode.CompletionItem(
    "raylib.DrawTriangleStrip",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawTriangleStrip.detail =
    "Draws a strip of connected triangles using a list of vertices.";
  raylib_DrawTriangleStrip.documentation = new vscode.MarkdownString(
    "**raylib.DrawTriangleStrip(points: table, color: table)**\n\nDraws a strip of connected triangles using a list of vertices.\n\n**Parameters:**\n- `points` (table): An array of Vector2 points `{ {x, y}, {x, y}, ... }` that define the vertices of the triangle strip.\n- `color` (table): Color table with `r`, `g`, `b`, and optional `a` components in the range [0, 255].\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawTriangleStrip.insertText = new vscode.SnippetString(
    "raylib.DrawTriangleStrip(${1:points}, ${2:color})"
  );
  completionItems.push(raylib_DrawTriangleStrip);

  const raylib_DrawRing = new vscode.CompletionItem(
    "raylib.DrawRing",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawRing.detail = "Draws a ring with specified parameters.";
  raylib_DrawRing.documentation = new vscode.MarkdownString(
    "**raylib.DrawRing(center: table, innerRadius: number, outerRadius: number, startAngle: number, endAngle: number, segments: number, color: table)**\n\nDraws a ring with specified parameters.\n\n**Parameters:**\n- `center` (table): The center position of the ring as a Vector2 `{x, y}`.\n- `innerRadius` (number): The inner radius of the ring.\n- `outerRadius` (number): The outer radius of the ring.\n- `startAngle` (number): The starting angle of the ring sector (in degrees).\n- `endAngle` (number): The ending angle of the ring sector (in degrees).\n- `segments` (number): The number of segments to divide the ring into.\n- `color` (table): Color table with `r`, `g`, `b`, and optional `a` components in the range [0, 255].\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawRing.insertText = new vscode.SnippetString(
    "raylib.DrawRing(${1:center}, ${2:innerRadius}, ${3:outerRadius}, ${4:startAngle}, ${5:endAngle}, ${6:segments}, ${7:color})"
  );
  completionItems.push(raylib_DrawRing);

  const raylib_DrawRingLines = new vscode.CompletionItem(
    "raylib.DrawRingLines",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawRingLines.detail =
    "Draws the outline of a ring with specified parameters.";
  raylib_DrawRingLines.documentation = new vscode.MarkdownString(
    "**raylib.DrawRingLines(center: table, innerRadius: number, outerRadius: number, startAngle: number, endAngle: number, segments: number, color: table)**\n\nDraws the outline of a ring with specified parameters.\n\n**Parameters:**\n- `center` (table): The center position of the ring as a Vector2 `{x, y}`.\n- `innerRadius` (number): The inner radius of the ring.\n- `outerRadius` (number): The outer radius of the ring.\n- `startAngle` (number): The starting angle of the ring sector (in degrees).\n- `endAngle` (number): The ending angle of the ring sector (in degrees).\n- `segments` (number): The number of segments to divide the ring into.\n- `color` (table): Color table with `r`, `g`, `b`, and optional `a` components in the range [0, 255].\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawRingLines.insertText = new vscode.SnippetString(
    "raylib.DrawRingLines(${1:center}, ${2:innerRadius}, ${3:outerRadius}, ${4:startAngle}, ${5:endAngle}, ${6:segments}, ${7:color})"
  );
  completionItems.push(raylib_DrawRingLines);

  const raylib_LoadSound = new vscode.CompletionItem(
    "raylib.LoadSound",
    vscode.CompletionItemKind.Function
  );
  raylib_LoadSound.detail = "Loads a sound from a file into memory.";
  raylib_LoadSound.documentation = new vscode.MarkdownString(
    "**raylib.LoadSound(fileName: string)**\n\nLoads a sound from a file into memory.\n\n**Parameters:**\n- `fileName` (string): Path to the audio file to be loaded.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_LoadSound.insertText = new vscode.SnippetString(
    "raylib.LoadSound(${1:fileName})"
  );
  completionItems.push(raylib_LoadSound);

  const raylib_PlaySound = new vscode.CompletionItem(
    "raylib.PlaySound",
    vscode.CompletionItemKind.Function
  );
  raylib_PlaySound.detail = "Plays a loaded sound.";
  raylib_PlaySound.documentation = new vscode.MarkdownString(
    "**raylib.PlaySound(sound: Sound)**\n\nPlays a loaded sound.\n\n**Parameters:**\n- `sound` (Sound): A Sound object returned from `LoadSound()`.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_PlaySound.insertText = new vscode.SnippetString(
    "raylib.PlaySound(${1:sound})"
  );
  completionItems.push(raylib_PlaySound);

  const raylib_StopSound = new vscode.CompletionItem(
    "raylib.StopSound",
    vscode.CompletionItemKind.Function
  );
  raylib_StopSound.detail = "Stops a currently playing sound.";
  raylib_StopSound.documentation = new vscode.MarkdownString(
    "**raylib.StopSound(sound: Sound)**\n\nStops a currently playing sound.\n\n**Parameters:**\n- `sound` (Sound): A Sound object returned from `LoadSound()`.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_StopSound.insertText = new vscode.SnippetString(
    "raylib.StopSound(${1:sound})"
  );
  completionItems.push(raylib_StopSound);

  const raylib_UnloadSound = new vscode.CompletionItem(
    "raylib.UnloadSound",
    vscode.CompletionItemKind.Function
  );
  raylib_UnloadSound.detail = "Unloads a loaded sound from memory.";
  raylib_UnloadSound.documentation = new vscode.MarkdownString(
    "**raylib.UnloadSound(sound: Sound)**\n\nUnloads a loaded sound from memory.\n\n**Parameters:**\n- `sound` (Sound): A Sound object returned from `LoadSound()`.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_UnloadSound.insertText = new vscode.SnippetString(
    "raylib.UnloadSound(${1:sound})"
  );
  completionItems.push(raylib_UnloadSound);

  const raylib_LoadMusicStream = new vscode.CompletionItem(
    "raylib.LoadMusicStream",
    vscode.CompletionItemKind.Function
  );
  raylib_LoadMusicStream.detail =
    "Loads a music stream from a file into memory.";
  raylib_LoadMusicStream.documentation = new vscode.MarkdownString(
    "**raylib.LoadMusicStream(fileName: string)**\n\nLoads a music stream from a file into memory.\n\n**Parameters:**\n- `fileName` (string): Path to the audio file to be loaded.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_LoadMusicStream.insertText = new vscode.SnippetString(
    "raylib.LoadMusicStream(${1:fileName})"
  );
  completionItems.push(raylib_LoadMusicStream);

  const raylib_PlayMusicStream = new vscode.CompletionItem(
    "raylib.PlayMusicStream",
    vscode.CompletionItemKind.Function
  );
  raylib_PlayMusicStream.detail = "Plays a loaded music stream.";
  raylib_PlayMusicStream.documentation = new vscode.MarkdownString(
    "**raylib.PlayMusicStream(music: Music)**\n\nPlays a loaded music stream.\n\n**Parameters:**\n- `music` (Music): A Music object returned from `LoadMusicStream()`.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_PlayMusicStream.insertText = new vscode.SnippetString(
    "raylib.PlayMusicStream(${1:music})"
  );
  completionItems.push(raylib_PlayMusicStream);

  const raylib_StopMusicStream = new vscode.CompletionItem(
    "raylib.StopMusicStream",
    vscode.CompletionItemKind.Function
  );
  raylib_StopMusicStream.detail = "Stops a currently playing music stream.";
  raylib_StopMusicStream.documentation = new vscode.MarkdownString(
    "**raylib.StopMusicStream(music: Music)**\n\nStops a currently playing music stream.\n\n**Parameters:**\n- `music` (Music): A Music object returned from `LoadMusicStream()`.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_StopMusicStream.insertText = new vscode.SnippetString(
    "raylib.StopMusicStream(${1:music})"
  );
  completionItems.push(raylib_StopMusicStream);

  const raylib_UpdateMusicStream = new vscode.CompletionItem(
    "raylib.UpdateMusicStream",
    vscode.CompletionItemKind.Function
  );
  raylib_UpdateMusicStream.detail = "Updates the buffers for a music stream.";
  raylib_UpdateMusicStream.documentation = new vscode.MarkdownString(
    "**raylib.UpdateMusicStream(music: Music)**\n\nUpdates the buffers for a music stream.\n\n**Parameters:**\n- `music` (Music): A Music object returned from `LoadMusicStream()`.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_UpdateMusicStream.insertText = new vscode.SnippetString(
    "raylib.UpdateMusicStream(${1:music})"
  );
  completionItems.push(raylib_UpdateMusicStream);

  const raylib_SetMusicVolume = new vscode.CompletionItem(
    "raylib.SetMusicVolume",
    vscode.CompletionItemKind.Function
  );
  raylib_SetMusicVolume.detail = "Sets the volume for a music stream.";
  raylib_SetMusicVolume.documentation = new vscode.MarkdownString(
    "**raylib.SetMusicVolume(music: Music, volume: number)**\n\nSets the volume for a music stream.\n\n**Parameters:**\n- `music` (Music): A Music object returned from `LoadMusicStream()`.\n- `volume` (number): The desired volume level (range: 0.0 to 1.0).\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_SetMusicVolume.insertText = new vscode.SnippetString(
    "raylib.SetMusicVolume(${1:music}, ${2:volume})"
  );
  completionItems.push(raylib_SetMusicVolume);

  const raylib_SetSoundVolume = new vscode.CompletionItem(
    "raylib.SetSoundVolume",
    vscode.CompletionItemKind.Function
  );
  raylib_SetSoundVolume.detail = "Sets the volume for a sound.";
  raylib_SetSoundVolume.documentation = new vscode.MarkdownString(
    "**raylib.SetSoundVolume(sound: Sound, volume: number)**\n\nSets the volume for a sound.\n\n**Parameters:**\n- `sound` (Sound): A Sound object returned from `LoadSound()`.\n- `volume` (number): The desired volume level (range: 0.0 to 1.0).\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_SetSoundVolume.insertText = new vscode.SnippetString(
    "raylib.SetSoundVolume(${1:sound}, ${2:volume})"
  );
  completionItems.push(raylib_SetSoundVolume);

  const raylib_IsSoundPlaying = new vscode.CompletionItem(
    "raylib.IsSoundPlaying",
    vscode.CompletionItemKind.Function
  );
  raylib_IsSoundPlaying.detail = "Checks if a sound is currently playing.";
  raylib_IsSoundPlaying.documentation = new vscode.MarkdownString(
    "**raylib.IsSoundPlaying(sound: Sound)**\n\nChecks if a sound is currently playing.\n\n**Parameters:**\n- `sound` (Sound): A Sound object returned from `LoadSound()`.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_IsSoundPlaying.insertText = new vscode.SnippetString(
    "raylib.IsSoundPlaying(${1:sound})"
  );
  completionItems.push(raylib_IsSoundPlaying);

  const raylib_InitAudioDevice = new vscode.CompletionItem(
    "raylib.InitAudioDevice",
    vscode.CompletionItemKind.Function
  );
  raylib_InitAudioDevice.detail = "Initializes the audio device.";
  raylib_InitAudioDevice.documentation = new vscode.MarkdownString(
    "**raylib.InitAudioDevice()**\n\nInitializes the audio device.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_InitAudioDevice.insertText = new vscode.SnippetString(
    "raylib.InitAudioDevice()"
  );
  completionItems.push(raylib_InitAudioDevice);

  const raylib_CloseAudioDevice = new vscode.CompletionItem(
    "raylib.CloseAudioDevice",
    vscode.CompletionItemKind.Function
  );
  raylib_CloseAudioDevice.detail = "Closes the audio device.";
  raylib_CloseAudioDevice.documentation = new vscode.MarkdownString(
    "**raylib.CloseAudioDevice()**\n\nCloses the audio device.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_CloseAudioDevice.insertText = new vscode.SnippetString(
    "raylib.CloseAudioDevice()"
  );
  completionItems.push(raylib_CloseAudioDevice);

  const raylib_IsAudioDeviceReady = new vscode.CompletionItem(
    "raylib.IsAudioDeviceReady",
    vscode.CompletionItemKind.Function
  );
  raylib_IsAudioDeviceReady.detail = "Checks if the audio device is ready.";
  raylib_IsAudioDeviceReady.documentation = new vscode.MarkdownString(
    "**raylib.IsAudioDeviceReady()**\n\nChecks if the audio device is ready.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_IsAudioDeviceReady.insertText = new vscode.SnippetString(
    "raylib.IsAudioDeviceReady()"
  );
  completionItems.push(raylib_IsAudioDeviceReady);

  const raylib_SetMasterVolume = new vscode.CompletionItem(
    "raylib.SetMasterVolume",
    vscode.CompletionItemKind.Function
  );
  raylib_SetMasterVolume.detail = "Sets the master volume for all audio.";
  raylib_SetMasterVolume.documentation = new vscode.MarkdownString(
    "**raylib.SetMasterVolume(volume: number)**\n\nSets the master volume for all audio.\n\n**Parameters:**\n- `volume` (number): The desired master volume (range: 0.0 to 1.0).\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_SetMasterVolume.insertText = new vscode.SnippetString(
    "raylib.SetMasterVolume(${1:volume})"
  );
  completionItems.push(raylib_SetMasterVolume);

  const raylib_GetMasterVolume = new vscode.CompletionItem(
    "raylib.GetMasterVolume",
    vscode.CompletionItemKind.Function
  );
  raylib_GetMasterVolume.detail = "Gets the master volume for all audio.";
  raylib_GetMasterVolume.documentation = new vscode.MarkdownString(
    "**raylib.GetMasterVolume()**\n\nGets the master volume for all audio.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetMasterVolume.insertText = new vscode.SnippetString(
    "raylib.GetMasterVolume()"
  );
  completionItems.push(raylib_GetMasterVolume);

  const raylib_IsWaveValid = new vscode.CompletionItem(
    "raylib.IsWaveValid",
    vscode.CompletionItemKind.Function
  );
  raylib_IsWaveValid.detail = "Checks if a wave is valid.";
  raylib_IsWaveValid.documentation = new vscode.MarkdownString(
    "**raylib.IsWaveValid(wave: Wave)**\n\nChecks if a wave is valid.\n\n**Parameters:**\n- `wave` (Wave): The Wave object to check.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_IsWaveValid.insertText = new vscode.SnippetString(
    "raylib.IsWaveValid(${1:wave})"
  );
  completionItems.push(raylib_IsWaveValid);

  const raylib_LoadSoundFromWave = new vscode.CompletionItem(
    "raylib.LoadSoundFromWave",
    vscode.CompletionItemKind.Function
  );
  raylib_LoadSoundFromWave.detail = "Loads a sound from a wave.";
  raylib_LoadSoundFromWave.documentation = new vscode.MarkdownString(
    "**raylib.LoadSoundFromWave(wave: Wave)**\n\nLoads a sound from a wave.\n\n**Parameters:**\n- `wave` (Wave): The source Wave object to convert into a Sound.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_LoadSoundFromWave.insertText = new vscode.SnippetString(
    "raylib.LoadSoundFromWave(${1:wave})"
  );
  completionItems.push(raylib_LoadSoundFromWave);

  const raylib_LoadWave = new vscode.CompletionItem(
    "raylib.LoadWave",
    vscode.CompletionItemKind.Function
  );
  raylib_LoadWave.detail = "Loads a wave from a file.";
  raylib_LoadWave.documentation = new vscode.MarkdownString(
    "**raylib.LoadWave(fileName: string)**\n\nLoads a wave from a file.\n\n**Parameters:**\n- `fileName` (string): The path to the audio file to load.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_LoadWave.insertText = new vscode.SnippetString(
    "raylib.LoadWave(${1:fileName})"
  );
  completionItems.push(raylib_LoadWave);

  const raylib_LoadWaveFromMemory = new vscode.CompletionItem(
    "raylib.LoadWaveFromMemory",
    vscode.CompletionItemKind.Function
  );
  raylib_LoadWaveFromMemory.detail = "Loads a wave from memory.";
  raylib_LoadWaveFromMemory.documentation = new vscode.MarkdownString(
    '**raylib.LoadWaveFromMemory(fileType: string, fileData: string, dataSize: integer)**\n\nLoads a wave from memory.\n\n**Parameters:**\n- `fileType` (string): The file type/extension (e.g., "wav", "ogg", "mp3").\n- `fileData` (string): The raw file data as a Lua string.\n- `dataSize` (integer): The size of the file data buffer.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```'
  );
  raylib_LoadWaveFromMemory.insertText = new vscode.SnippetString(
    "raylib.LoadWaveFromMemory(${1:fileType}, ${2:fileData}, ${3:dataSize})"
  );
  completionItems.push(raylib_LoadWaveFromMemory);

  const raylib_LoadSoundAlias = new vscode.CompletionItem(
    "raylib.LoadSoundAlias",
    vscode.CompletionItemKind.Function
  );
  raylib_LoadSoundAlias.detail = "Loads a sound alias.";
  raylib_LoadSoundAlias.documentation = new vscode.MarkdownString(
    "**raylib.LoadSoundAlias(alias: string, fileName: string)**\n\nLoads a sound alias.\n\n**Parameters:**\n- `alias` (string): The alias name to associate with the sound.\n- `fileName` (string): The path to the sound file to be loaded.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_LoadSoundAlias.insertText = new vscode.SnippetString(
    "raylib.LoadSoundAlias(${1:alias}, ${2:fileName})"
  );
  completionItems.push(raylib_LoadSoundAlias);

  const raylib_IsSoundValid = new vscode.CompletionItem(
    "raylib.IsSoundValid",
    vscode.CompletionItemKind.Function
  );
  raylib_IsSoundValid.detail = "Checks if a sound is valid.";
  raylib_IsSoundValid.documentation = new vscode.MarkdownString(
    "**raylib.IsSoundValid(sound: Sound)**\n\nChecks if a sound is valid.\n\n**Parameters:**\n- `sound` (Sound): The Sound object to validate.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_IsSoundValid.insertText = new vscode.SnippetString(
    "raylib.IsSoundValid(${1:sound})"
  );
  completionItems.push(raylib_IsSoundValid);

  const raylib_UpdateSound = new vscode.CompletionItem(
    "raylib.UpdateSound",
    vscode.CompletionItemKind.Function
  );
  raylib_UpdateSound.detail = "Updates a sound buffer with new data.";
  raylib_UpdateSound.documentation = new vscode.MarkdownString(
    "**raylib.UpdateSound(sound: Sound, data: string, dataSize: integer)**\n\nUpdates a sound buffer with new data.\n\n**Parameters:**\n- `sound` (Sound): The Sound object to update.\n- `data` (string): The new sound data to update the sound with.\n- `dataSize` (integer): The size of the data buffer.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_UpdateSound.insertText = new vscode.SnippetString(
    "raylib.UpdateSound(${1:sound}, ${2:data}, ${3:dataSize})"
  );
  completionItems.push(raylib_UpdateSound);

  const raylib_UnloadWave = new vscode.CompletionItem(
    "raylib.UnloadWave",
    vscode.CompletionItemKind.Function
  );
  raylib_UnloadWave.detail = "Unloads a wave from memory.";
  raylib_UnloadWave.documentation = new vscode.MarkdownString(
    "**raylib.UnloadWave(wave: Wave)**\n\nUnloads a wave from memory.\n\n**Parameters:**\n- `wave` (Wave): The Wave object to unload.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_UnloadWave.insertText = new vscode.SnippetString(
    "raylib.UnloadWave(${1:wave})"
  );
  completionItems.push(raylib_UnloadWave);

  const raylib_UnloadSoundAlias = new vscode.CompletionItem(
    "raylib.UnloadSoundAlias",
    vscode.CompletionItemKind.Function
  );
  raylib_UnloadSoundAlias.detail = "Unloads a sound alias from memory.";
  raylib_UnloadSoundAlias.documentation = new vscode.MarkdownString(
    "**raylib.UnloadSoundAlias(alias: string)**\n\nUnloads a sound alias from memory.\n\n**Parameters:**\n- `alias` (string): The name of the sound alias to unload.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_UnloadSoundAlias.insertText = new vscode.SnippetString(
    "raylib.UnloadSoundAlias(${1:alias})"
  );
  completionItems.push(raylib_UnloadSoundAlias);

  const raylib_ExportWave = new vscode.CompletionItem(
    "raylib.ExportWave",
    vscode.CompletionItemKind.Function
  );
  raylib_ExportWave.detail = "Exports a wave to a file.";
  raylib_ExportWave.documentation = new vscode.MarkdownString(
    '**raylib.ExportWave(wave: Wave, fileName: string)**\n\nExports a wave to a file.\n\n**Parameters:**\n- `wave` (Wave): The Wave object to export.\n- `fileName` (string): The name of the file to save the wave to (e.g., "output.wav").\n\n**Usage Example:**\n```lua\nNo usage example available.\n```'
  );
  raylib_ExportWave.insertText = new vscode.SnippetString(
    "raylib.ExportWave(${1:wave}, ${2:fileName})"
  );
  completionItems.push(raylib_ExportWave);

  const raylib_ExportWaveAsCode = new vscode.CompletionItem(
    "raylib.ExportWaveAsCode",
    vscode.CompletionItemKind.Function
  );
  raylib_ExportWaveAsCode.detail = "Exports a wave as C code.";
  raylib_ExportWaveAsCode.documentation = new vscode.MarkdownString(
    '**raylib.ExportWaveAsCode(wave: Wave, fileName: string)**\n\nExports a wave as C code.\n\n**Parameters:**\n- `wave` (Wave): The Wave object to export as code.\n- `fileName` (string): The name of the file to save the code to (e.g., "wave_data.c").\n\n**Usage Example:**\n```lua\nNo usage example available.\n```'
  );
  raylib_ExportWaveAsCode.insertText = new vscode.SnippetString(
    "raylib.ExportWaveAsCode(${1:wave}, ${2:fileName})"
  );
  completionItems.push(raylib_ExportWaveAsCode);

  const raylib_WaveCopy = new vscode.CompletionItem(
    "raylib.WaveCopy",
    vscode.CompletionItemKind.Function
  );
  raylib_WaveCopy.detail = "Copies a wave.";
  raylib_WaveCopy.documentation = new vscode.MarkdownString(
    "**raylib.WaveCopy(wave: Wave)**\n\nCopies a wave.\n\n**Parameters:**\n- `wave` (Wave): The Wave object to be copied.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_WaveCopy.insertText = new vscode.SnippetString(
    "raylib.WaveCopy(${1:wave})"
  );
  completionItems.push(raylib_WaveCopy);

  const raylib_WaveCrop = new vscode.CompletionItem(
    "raylib.WaveCrop",
    vscode.CompletionItemKind.Function
  );
  raylib_WaveCrop.detail = "Crops a wave.";
  raylib_WaveCrop.documentation = new vscode.MarkdownString(
    "**raylib.WaveCrop(wave: Wave, initSample: integer, finalSample: integer)**\n\nCrops a wave.\n\n**Parameters:**\n- `wave` (Wave): The Wave object to crop.\n- `initSample` (integer): The starting sample index to keep.\n- `finalSample` (integer): The ending sample index to keep.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_WaveCrop.insertText = new vscode.SnippetString(
    "raylib.WaveCrop(${1:wave}, ${2:initSample}, ${3:finalSample})"
  );
  completionItems.push(raylib_WaveCrop);

  const raylib_WaveFormat = new vscode.CompletionItem(
    "raylib.WaveFormat",
    vscode.CompletionItemKind.Function
  );
  raylib_WaveFormat.detail = "Formats a wave.";
  raylib_WaveFormat.documentation = new vscode.MarkdownString(
    "**raylib.WaveFormat(wave: Wave, sampleRate: integer, sampleSize: integer, channels: integer)**\n\nFormats a wave.\n\n**Parameters:**\n- `wave` (Wave): The Wave object to format.\n- `sampleRate` (integer): The new sample rate (e.g., 44100).\n- `sampleSize` (integer): The new sample size in bits (e.g., 16, 24, 32).\n- `channels` (integer): The number of audio channels (e.g., 1 for mono, 2 for stereo).\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_WaveFormat.insertText = new vscode.SnippetString(
    "raylib.WaveFormat(${1:wave}, ${2:sampleRate}, ${3:sampleSize}, ${4:channels})"
  );
  completionItems.push(raylib_WaveFormat);

  const raylib_LoadWaveSamples = new vscode.CompletionItem(
    "raylib.LoadWaveSamples",
    vscode.CompletionItemKind.Function
  );
  raylib_LoadWaveSamples.detail = "Loads wave samples.";
  raylib_LoadWaveSamples.documentation = new vscode.MarkdownString(
    "**raylib.LoadWaveSamples(wave: Wave)**\n\nLoads wave samples.\n\n**Parameters:**\n- `wave` (Wave): The Wave object from which to extract samples.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_LoadWaveSamples.insertText = new vscode.SnippetString(
    "raylib.LoadWaveSamples(${1:wave})"
  );
  completionItems.push(raylib_LoadWaveSamples);

  const raylib_UnloadWaveSamples = new vscode.CompletionItem(
    "raylib.UnloadWaveSamples",
    vscode.CompletionItemKind.Function
  );
  raylib_UnloadWaveSamples.detail = "Unloads wave samples from memory.";
  raylib_UnloadWaveSamples.documentation = new vscode.MarkdownString(
    "**raylib.UnloadWaveSamples(samples: table)**\n\nUnloads wave samples from memory.\n\n**Parameters:**\n- `samples` (table): The array of wave samples to unload.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_UnloadWaveSamples.insertText = new vscode.SnippetString(
    "raylib.UnloadWaveSamples(${1:samples})"
  );
  completionItems.push(raylib_UnloadWaveSamples);

  const raylib_IsMusicValid = new vscode.CompletionItem(
    "raylib.IsMusicValid",
    vscode.CompletionItemKind.Function
  );
  raylib_IsMusicValid.detail = "Checks if a music object is valid.";
  raylib_IsMusicValid.documentation = new vscode.MarkdownString(
    "**raylib.IsMusicValid(music: Music)**\n\nChecks if a music object is valid.\n\n**Parameters:**\n- `music` (Music): The music object to be checked.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_IsMusicValid.insertText = new vscode.SnippetString(
    "raylib.IsMusicValid(${1:music})"
  );
  completionItems.push(raylib_IsMusicValid);

  const raylib_UnloadMusicStream = new vscode.CompletionItem(
    "raylib.UnloadMusicStream",
    vscode.CompletionItemKind.Function
  );
  raylib_UnloadMusicStream.detail = "Unloads a music stream from memory.";
  raylib_UnloadMusicStream.documentation = new vscode.MarkdownString(
    "**raylib.UnloadMusicStream(music: Music)**\n\nUnloads a music stream from memory.\n\n**Parameters:**\n- `music` (Music): The music stream to be unloaded.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_UnloadMusicStream.insertText = new vscode.SnippetString(
    "raylib.UnloadMusicStream(${1:music})"
  );
  completionItems.push(raylib_UnloadMusicStream);

  const raylib_IsMusicStreamPlaying = new vscode.CompletionItem(
    "raylib.IsMusicStreamPlaying",
    vscode.CompletionItemKind.Function
  );
  raylib_IsMusicStreamPlaying.detail =
    "Checks if a music stream is currently playing.";
  raylib_IsMusicStreamPlaying.documentation = new vscode.MarkdownString(
    "**raylib.IsMusicStreamPlaying(music: Music)**\n\nChecks if a music stream is currently playing.\n\n**Parameters:**\n- `music` (Music): The music stream to check for playback status.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_IsMusicStreamPlaying.insertText = new vscode.SnippetString(
    "raylib.IsMusicStreamPlaying(${1:music})"
  );
  completionItems.push(raylib_IsMusicStreamPlaying);

  const raylib_PauseMusicStream = new vscode.CompletionItem(
    "raylib.PauseMusicStream",
    vscode.CompletionItemKind.Function
  );
  raylib_PauseMusicStream.detail = "Pauses the currently playing music stream.";
  raylib_PauseMusicStream.documentation = new vscode.MarkdownString(
    "**raylib.PauseMusicStream(music: Music)**\n\nPauses the currently playing music stream.\n\n**Parameters:**\n- `music` (Music): The music stream to be paused.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_PauseMusicStream.insertText = new vscode.SnippetString(
    "raylib.PauseMusicStream(${1:music})"
  );
  completionItems.push(raylib_PauseMusicStream);

  const raylib_ResumeMusicStream = new vscode.CompletionItem(
    "raylib.ResumeMusicStream",
    vscode.CompletionItemKind.Function
  );
  raylib_ResumeMusicStream.detail = "Resumes the paused music stream.";
  raylib_ResumeMusicStream.documentation = new vscode.MarkdownString(
    "**raylib.ResumeMusicStream(music: Music)**\n\nResumes the paused music stream.\n\n**Parameters:**\n- `music` (Music): The music stream to be resumed.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ResumeMusicStream.insertText = new vscode.SnippetString(
    "raylib.ResumeMusicStream(${1:music})"
  );
  completionItems.push(raylib_ResumeMusicStream);

  const raylib_SeekMusicStream = new vscode.CompletionItem(
    "raylib.SeekMusicStream",
    vscode.CompletionItemKind.Function
  );
  raylib_SeekMusicStream.detail =
    "Seeks to a specific position in the music stream.";
  raylib_SeekMusicStream.documentation = new vscode.MarkdownString(
    "**raylib.SeekMusicStream(music: Music, position: float)**\n\nSeeks to a specific position in the music stream.\n\n**Parameters:**\n- `music` (Music): The music stream where the position will be set.\n- `position` (float): The position (in seconds) to seek to in the music stream.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_SeekMusicStream.insertText = new vscode.SnippetString(
    "raylib.SeekMusicStream(${1:music}, ${2:position})"
  );
  completionItems.push(raylib_SeekMusicStream);

  const raylib_SetMusicPitch = new vscode.CompletionItem(
    "raylib.SetMusicPitch",
    vscode.CompletionItemKind.Function
  );
  raylib_SetMusicPitch.detail = "Sets the pitch for the music stream.";
  raylib_SetMusicPitch.documentation = new vscode.MarkdownString(
    "**raylib.SetMusicPitch(music: Music, pitch: float)**\n\nSets the pitch for the music stream.\n\n**Parameters:**\n- `music` (Music): The music stream whose pitch will be changed.\n- `pitch` (float): The new pitch value (e.g., 1.0 for normal pitch, 2.0 for double speed, 0.5 for half speed).\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_SetMusicPitch.insertText = new vscode.SnippetString(
    "raylib.SetMusicPitch(${1:music}, ${2:pitch})"
  );
  completionItems.push(raylib_SetMusicPitch);

  const raylib_SetMusicPan = new vscode.CompletionItem(
    "raylib.SetMusicPan",
    vscode.CompletionItemKind.Function
  );
  raylib_SetMusicPan.detail = "Sets the pan for the music stream.";
  raylib_SetMusicPan.documentation = new vscode.MarkdownString(
    "**raylib.SetMusicPan(music: Music, pan: float)**\n\nSets the pan for the music stream.\n\n**Parameters:**\n- `music` (Music): The music stream whose pan will be changed.\n- `pan` (float): The new pan value (range: -1.0 to 1.0).\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_SetMusicPan.insertText = new vscode.SnippetString(
    "raylib.SetMusicPan(${1:music}, ${2:pan})"
  );
  completionItems.push(raylib_SetMusicPan);

  const raylib_GetMusicTimeLength = new vscode.CompletionItem(
    "raylib.GetMusicTimeLength",
    vscode.CompletionItemKind.Function
  );
  raylib_GetMusicTimeLength.detail =
    "Gets the total length of the music stream.";
  raylib_GetMusicTimeLength.documentation = new vscode.MarkdownString(
    "**raylib.GetMusicTimeLength(music: Music)**\n\nGets the total length of the music stream.\n\n**Parameters:**\n- `music` (Music): The music stream to get the duration of.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetMusicTimeLength.insertText = new vscode.SnippetString(
    "raylib.GetMusicTimeLength(${1:music})"
  );
  completionItems.push(raylib_GetMusicTimeLength);

  const raylib_GetMusicTimePlayed = new vscode.CompletionItem(
    "raylib.GetMusicTimePlayed",
    vscode.CompletionItemKind.Function
  );
  raylib_GetMusicTimePlayed.detail =
    "Gets the total time played of the music stream.";
  raylib_GetMusicTimePlayed.documentation = new vscode.MarkdownString(
    "**raylib.GetMusicTimePlayed(music: Music)**\n\nGets the total time played of the music stream.\n\n**Parameters:**\n- `music` (Music): The music stream to get the current playback time of.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetMusicTimePlayed.insertText = new vscode.SnippetString(
    "raylib.GetMusicTimePlayed(${1:music})"
  );
  completionItems.push(raylib_GetMusicTimePlayed);

  const raylib_LoadAudioStream = new vscode.CompletionItem(
    "raylib.LoadAudioStream",
    vscode.CompletionItemKind.Function
  );
  raylib_LoadAudioStream.detail =
    "Loads an audio stream with specified sample rate, sample size, and channel count.";
  raylib_LoadAudioStream.documentation = new vscode.MarkdownString(
    "**raylib.LoadAudioStream(sampleRate: int, sampleSize: int, channels: int)**\n\nLoads an audio stream with specified sample rate, sample size, and channel count.\n\n**Parameters:**\n- `sampleRate` (int): The sample rate of the audio stream (e.g., 44100 for standard audio).\n- `sampleSize` (int): The bit depth of each sample (e.g., 16 or 32 bits).\n- `channels` (int): The number of audio channels (e.g., 1 for mono, 2 for stereo).\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_LoadAudioStream.insertText = new vscode.SnippetString(
    "raylib.LoadAudioStream(${1:sampleRate}, ${2:sampleSize}, ${3:channels})"
  );
  completionItems.push(raylib_LoadAudioStream);

  const raylib_IsAudioStreamValid = new vscode.CompletionItem(
    "raylib.IsAudioStreamValid",
    vscode.CompletionItemKind.Function
  );
  raylib_IsAudioStreamValid.detail = "Checks if an audio stream is valid.";
  raylib_IsAudioStreamValid.documentation = new vscode.MarkdownString(
    "**raylib.IsAudioStreamValid(stream: AudioStream)**\n\nChecks if an audio stream is valid.\n\n**Parameters:**\n- `stream` (AudioStream): The audio stream to check for validity.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_IsAudioStreamValid.insertText = new vscode.SnippetString(
    "raylib.IsAudioStreamValid(${1:stream})"
  );
  completionItems.push(raylib_IsAudioStreamValid);

  const raylib_UnloadAudioStream = new vscode.CompletionItem(
    "raylib.UnloadAudioStream",
    vscode.CompletionItemKind.Function
  );
  raylib_UnloadAudioStream.detail =
    "Unloads an audio stream from memory, freeing all associated resources.";
  raylib_UnloadAudioStream.documentation = new vscode.MarkdownString(
    "**raylib.UnloadAudioStream(stream: AudioStream)**\n\nUnloads an audio stream from memory, freeing all associated resources.\n\n**Parameters:**\n- `stream` (AudioStream): The audio stream to be unloaded.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_UnloadAudioStream.insertText = new vscode.SnippetString(
    "raylib.UnloadAudioStream(${1:stream})"
  );
  completionItems.push(raylib_UnloadAudioStream);

  const raylib_UpdateAudioStream = new vscode.CompletionItem(
    "raylib.UpdateAudioStream",
    vscode.CompletionItemKind.Function
  );
  raylib_UpdateAudioStream.detail =
    "Updates an audio stream with new audio data.";
  raylib_UpdateAudioStream.documentation = new vscode.MarkdownString(
    "**raylib.UpdateAudioStream(stream: AudioStream, data: string, frameCount: int)**\n\nUpdates an audio stream with new audio data.\n\n**Parameters:**\n- `stream` (AudioStream): The audio stream to update.\n- `data` (string): A raw binary string containing the new audio data to be streamed.\n- `frameCount` (int): The number of frames contained in the data.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_UpdateAudioStream.insertText = new vscode.SnippetString(
    "raylib.UpdateAudioStream(${1:stream}, ${2:data}, ${3:frameCount})"
  );
  completionItems.push(raylib_UpdateAudioStream);

  const raylib_IsAudioStreamProcessed = new vscode.CompletionItem(
    "raylib.IsAudioStreamProcessed",
    vscode.CompletionItemKind.Function
  );
  raylib_IsAudioStreamProcessed.detail =
    "Checks if an audio stream is currently being processed.";
  raylib_IsAudioStreamProcessed.documentation = new vscode.MarkdownString(
    "**raylib.IsAudioStreamProcessed(stream: AudioStream)**\n\nChecks if an audio stream is currently being processed.\n\n**Parameters:**\n- `stream` (AudioStream): The audio stream to check.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_IsAudioStreamProcessed.insertText = new vscode.SnippetString(
    "raylib.IsAudioStreamProcessed(${1:stream})"
  );
  completionItems.push(raylib_IsAudioStreamProcessed);

  const raylib_PlayAudioStream = new vscode.CompletionItem(
    "raylib.PlayAudioStream",
    vscode.CompletionItemKind.Function
  );
  raylib_PlayAudioStream.detail =
    "Plays an audio stream, starting from the current buffer position.";
  raylib_PlayAudioStream.documentation = new vscode.MarkdownString(
    "**raylib.PlayAudioStream(stream: AudioStream)**\n\nPlays an audio stream, starting from the current buffer position.\n\n**Parameters:**\n- `stream` (AudioStream): The audio stream to play.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_PlayAudioStream.insertText = new vscode.SnippetString(
    "raylib.PlayAudioStream(${1:stream})"
  );
  completionItems.push(raylib_PlayAudioStream);

  const raylib_PauseAudioStream = new vscode.CompletionItem(
    "raylib.PauseAudioStream",
    vscode.CompletionItemKind.Function
  );
  raylib_PauseAudioStream.detail = "Pauses the currently playing audio stream.";
  raylib_PauseAudioStream.documentation = new vscode.MarkdownString(
    "**raylib.PauseAudioStream(stream: AudioStream)**\n\nPauses the currently playing audio stream.\n\n**Parameters:**\n- `stream` (AudioStream): The audio stream to pause.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_PauseAudioStream.insertText = new vscode.SnippetString(
    "raylib.PauseAudioStream(${1:stream})"
  );
  completionItems.push(raylib_PauseAudioStream);

  const raylib_ResumeAudioStream = new vscode.CompletionItem(
    "raylib.ResumeAudioStream",
    vscode.CompletionItemKind.Function
  );
  raylib_ResumeAudioStream.detail =
    "Resumes a paused audio stream, continuing playback from its current position.";
  raylib_ResumeAudioStream.documentation = new vscode.MarkdownString(
    "**raylib.ResumeAudioStream(stream: AudioStream)**\n\nResumes a paused audio stream, continuing playback from its current position.\n\n**Parameters:**\n- `stream` (AudioStream): The audio stream to resume.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ResumeAudioStream.insertText = new vscode.SnippetString(
    "raylib.ResumeAudioStream(${1:stream})"
  );
  completionItems.push(raylib_ResumeAudioStream);

  const raylib_IsAudioStreamPlaying = new vscode.CompletionItem(
    "raylib.IsAudioStreamPlaying",
    vscode.CompletionItemKind.Function
  );
  raylib_IsAudioStreamPlaying.detail =
    "Checks if an audio stream is currently playing.";
  raylib_IsAudioStreamPlaying.documentation = new vscode.MarkdownString(
    "**raylib.IsAudioStreamPlaying(stream: AudioStream)**\n\nChecks if an audio stream is currently playing.\n\n**Parameters:**\n- `stream` (AudioStream): The audio stream to check.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_IsAudioStreamPlaying.insertText = new vscode.SnippetString(
    "raylib.IsAudioStreamPlaying(${1:stream})"
  );
  completionItems.push(raylib_IsAudioStreamPlaying);

  const raylib_StopAudioStream = new vscode.CompletionItem(
    "raylib.StopAudioStream",
    vscode.CompletionItemKind.Function
  );
  raylib_StopAudioStream.detail =
    "Stops the currently playing audio stream and resets its playback position.";
  raylib_StopAudioStream.documentation = new vscode.MarkdownString(
    "**raylib.StopAudioStream(stream: AudioStream)**\n\nStops the currently playing audio stream and resets its playback position.\n\n**Parameters:**\n- `stream` (AudioStream): The audio stream to stop.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_StopAudioStream.insertText = new vscode.SnippetString(
    "raylib.StopAudioStream(${1:stream})"
  );
  completionItems.push(raylib_StopAudioStream);

  const raylib_SetAudioStreamVolume = new vscode.CompletionItem(
    "raylib.SetAudioStreamVolume",
    vscode.CompletionItemKind.Function
  );
  raylib_SetAudioStreamVolume.detail = "Sets the volume for an audio stream.";
  raylib_SetAudioStreamVolume.documentation = new vscode.MarkdownString(
    "**raylib.SetAudioStreamVolume(stream: AudioStream, volume: float)**\n\nSets the volume for an audio stream.\n\n**Parameters:**\n- `stream` (AudioStream): The audio stream for which the volume will be set.\n- `volume` (float): The desired volume value (0.0 to 1.0).\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_SetAudioStreamVolume.insertText = new vscode.SnippetString(
    "raylib.SetAudioStreamVolume(${1:stream}, ${2:volume})"
  );
  completionItems.push(raylib_SetAudioStreamVolume);

  const raylib_SetAudioStreamPitch = new vscode.CompletionItem(
    "raylib.SetAudioStreamPitch",
    vscode.CompletionItemKind.Function
  );
  raylib_SetAudioStreamPitch.detail = "Sets the pitch for an audio stream.";
  raylib_SetAudioStreamPitch.documentation = new vscode.MarkdownString(
    "**raylib.SetAudioStreamPitch(stream: AudioStream, pitch: float)**\n\nSets the pitch for an audio stream.\n\n**Parameters:**\n- `stream` (AudioStream): The audio stream for which the pitch will be set.\n- `pitch` (float): The desired pitch multiplier (default is 1.0).\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_SetAudioStreamPitch.insertText = new vscode.SnippetString(
    "raylib.SetAudioStreamPitch(${1:stream}, ${2:pitch})"
  );
  completionItems.push(raylib_SetAudioStreamPitch);

  const raylib_SetAudioStreamPan = new vscode.CompletionItem(
    "raylib.SetAudioStreamPan",
    vscode.CompletionItemKind.Function
  );
  raylib_SetAudioStreamPan.detail = "Sets the pan for an audio stream.";
  raylib_SetAudioStreamPan.documentation = new vscode.MarkdownString(
    "**raylib.SetAudioStreamPan(stream: AudioStream, pan: float)**\n\nSets the pan for an audio stream.\n\n**Parameters:**\n- `stream` (AudioStream): The audio stream for which the pan will be set.\n- `pan` (float): The desired pan value (-1.0 for left, 1.0 for right, 0.0 for center).\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_SetAudioStreamPan.insertText = new vscode.SnippetString(
    "raylib.SetAudioStreamPan(${1:stream}, ${2:pan})"
  );
  completionItems.push(raylib_SetAudioStreamPan);

  const raylib_SetAudioStreamBufferSizeDefault = new vscode.CompletionItem(
    "raylib.SetAudioStreamBufferSizeDefault",
    vscode.CompletionItemKind.Function
  );
  raylib_SetAudioStreamBufferSizeDefault.detail =
    "Sets the default buffer size for an audio stream.";
  raylib_SetAudioStreamBufferSizeDefault.documentation =
    new vscode.MarkdownString(
      "**raylib.SetAudioStreamBufferSizeDefault(bufferSize: int)**\n\nSets the default buffer size for an audio stream.\n\n**Parameters:**\n- `bufferSize` (int): The size of the buffer in samples.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
    );
  raylib_SetAudioStreamBufferSizeDefault.insertText = new vscode.SnippetString(
    "raylib.SetAudioStreamBufferSizeDefault(${1:bufferSize})"
  );
  completionItems.push(raylib_SetAudioStreamBufferSizeDefault);

  const raylib_SetAudioStreamCallback = new vscode.CompletionItem(
    "raylib.SetAudioStreamCallback",
    vscode.CompletionItemKind.Function
  );
  raylib_SetAudioStreamCallback.detail =
    "Sets a callback function for an audio stream.";
  raylib_SetAudioStreamCallback.documentation = new vscode.MarkdownString(
    "**raylib.SetAudioStreamCallback(stream: AudioStream, callback: function)**\n\nSets a callback function for an audio stream.\n\n**Parameters:**\n- `stream` (AudioStream): The audio stream to which the callback will be attached.\n- `callback` (function): A Lua function that will be called to provide audio samples for the stream.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_SetAudioStreamCallback.insertText = new vscode.SnippetString(
    "raylib.SetAudioStreamCallback(${1:stream}, ${2:callback})"
  );
  completionItems.push(raylib_SetAudioStreamCallback);

  const raylib_AttachAudioStreamProcessor = new vscode.CompletionItem(
    "raylib.AttachAudioStreamProcessor",
    vscode.CompletionItemKind.Function
  );
  raylib_AttachAudioStreamProcessor.detail =
    "Attaches a processor to an audio stream.";
  raylib_AttachAudioStreamProcessor.documentation = new vscode.MarkdownString(
    "**raylib.AttachAudioStreamProcessor(stream: AudioStream, processor: function)**\n\nAttaches a processor to an audio stream.\n\n**Parameters:**\n- `stream` (AudioStream): The audio stream to which the processor will be attached.\n- `processor` (function): A Lua function that processes audio samples in real time.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_AttachAudioStreamProcessor.insertText = new vscode.SnippetString(
    "raylib.AttachAudioStreamProcessor(${1:stream}, ${2:processor})"
  );
  completionItems.push(raylib_AttachAudioStreamProcessor);

  const raylib_DetachAudioStreamProcessor = new vscode.CompletionItem(
    "raylib.DetachAudioStreamProcessor",
    vscode.CompletionItemKind.Function
  );
  raylib_DetachAudioStreamProcessor.detail =
    "Detaches a processor from an audio stream.";
  raylib_DetachAudioStreamProcessor.documentation = new vscode.MarkdownString(
    "**raylib.DetachAudioStreamProcessor(stream: AudioStream, processor: function)**\n\nDetaches a processor from an audio stream.\n\n**Parameters:**\n- `stream` (AudioStream): The audio stream from which the processor will be detached.\n- `processor` (function): The specific Lua processor function to detach.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DetachAudioStreamProcessor.insertText = new vscode.SnippetString(
    "raylib.DetachAudioStreamProcessor(${1:stream}, ${2:processor})"
  );
  completionItems.push(raylib_DetachAudioStreamProcessor);

  const raylib_AttachAudioMixedProcessor = new vscode.CompletionItem(
    "raylib.AttachAudioMixedProcessor",
    vscode.CompletionItemKind.Function
  );
  raylib_AttachAudioMixedProcessor.detail =
    "Attaches a processor to the mixed audio.";
  raylib_AttachAudioMixedProcessor.documentation = new vscode.MarkdownString(
    "**raylib.AttachAudioMixedProcessor(processor: function)**\n\nAttaches a processor to the mixed audio.\n\n**Parameters:**\n- `processor` (function): A Lua function that processes the mixed audio data.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_AttachAudioMixedProcessor.insertText = new vscode.SnippetString(
    "raylib.AttachAudioMixedProcessor(${1:processor})"
  );
  completionItems.push(raylib_AttachAudioMixedProcessor);

  const raylib_DetachAudioMixedProcessor = new vscode.CompletionItem(
    "raylib.DetachAudioMixedProcessor",
    vscode.CompletionItemKind.Function
  );
  raylib_DetachAudioMixedProcessor.detail =
    "Detaches a processor from the mixed audio.";
  raylib_DetachAudioMixedProcessor.documentation = new vscode.MarkdownString(
    "**raylib.DetachAudioMixedProcessor(processor: function)**\n\nDetaches a processor from the mixed audio.\n\n**Parameters:**\n- `processor` (function): The Lua processor function to be detached from the mixed audio.\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DetachAudioMixedProcessor.insertText = new vscode.SnippetString(
    "raylib.DetachAudioMixedProcessor(${1:processor})"
  );
  completionItems.push(raylib_DetachAudioMixedProcessor);

  const raylib_GetFontDefault = new vscode.CompletionItem(
    "raylib.GetFontDefault",
    vscode.CompletionItemKind.Function
  );
  raylib_GetFontDefault.detail = "Gets the default font.";
  raylib_GetFontDefault.documentation = new vscode.MarkdownString(
    "**raylib.GetFontDefault()**\n\nGets the default font.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetFontDefault.insertText = new vscode.SnippetString(
    "raylib.GetFontDefault()"
  );
  completionItems.push(raylib_GetFontDefault);

  const raylib_LoadFont = new vscode.CompletionItem(
    "raylib.LoadFont",
    vscode.CompletionItemKind.Function
  );
  raylib_LoadFont.detail = "Loads a font from a file.";
  raylib_LoadFont.documentation = new vscode.MarkdownString(
    "**raylib.LoadFont()**\n\nLoads a font from a file.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_LoadFont.insertText = new vscode.SnippetString("raylib.LoadFont()");
  completionItems.push(raylib_LoadFont);

  const raylib_LoadFontEx = new vscode.CompletionItem(
    "raylib.LoadFontEx",
    vscode.CompletionItemKind.Function
  );
  raylib_LoadFontEx.detail =
    "Loads a font from a file with extended parameters.";
  raylib_LoadFontEx.documentation = new vscode.MarkdownString(
    "**raylib.LoadFontEx()**\n\nLoads a font from a file with extended parameters.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_LoadFontEx.insertText = new vscode.SnippetString(
    "raylib.LoadFontEx()"
  );
  completionItems.push(raylib_LoadFontEx);

  const raylib_LoadFontFromImage = new vscode.CompletionItem(
    "raylib.LoadFontFromImage",
    vscode.CompletionItemKind.Function
  );
  raylib_LoadFontFromImage.detail = "Loads a font from an image.";
  raylib_LoadFontFromImage.documentation = new vscode.MarkdownString(
    "**raylib.LoadFontFromImage()**\n\nLoads a font from an image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_LoadFontFromImage.insertText = new vscode.SnippetString(
    "raylib.LoadFontFromImage()"
  );
  completionItems.push(raylib_LoadFontFromImage);

  const raylib_LoadFontFromMemory = new vscode.CompletionItem(
    "raylib.LoadFontFromMemory",
    vscode.CompletionItemKind.Function
  );
  raylib_LoadFontFromMemory.detail = "Loads a font from memory.";
  raylib_LoadFontFromMemory.documentation = new vscode.MarkdownString(
    "**raylib.LoadFontFromMemory()**\n\nLoads a font from memory.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_LoadFontFromMemory.insertText = new vscode.SnippetString(
    "raylib.LoadFontFromMemory()"
  );
  completionItems.push(raylib_LoadFontFromMemory);

  const raylib_IsFontValid = new vscode.CompletionItem(
    "raylib.IsFontValid",
    vscode.CompletionItemKind.Function
  );
  raylib_IsFontValid.detail = "Checks if a font is valid.";
  raylib_IsFontValid.documentation = new vscode.MarkdownString(
    "**raylib.IsFontValid()**\n\nChecks if a font is valid.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_IsFontValid.insertText = new vscode.SnippetString(
    "raylib.IsFontValid()"
  );
  completionItems.push(raylib_IsFontValid);

  const raylib_UnloadFont = new vscode.CompletionItem(
    "raylib.UnloadFont",
    vscode.CompletionItemKind.Function
  );
  raylib_UnloadFont.detail = "Unloads a font from memory.";
  raylib_UnloadFont.documentation = new vscode.MarkdownString(
    "**raylib.UnloadFont()**\n\nUnloads a font from memory.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_UnloadFont.insertText = new vscode.SnippetString(
    "raylib.UnloadFont()"
  );
  completionItems.push(raylib_UnloadFont);

  const raylib_ExportFontAsCode = new vscode.CompletionItem(
    "raylib.ExportFontAsCode",
    vscode.CompletionItemKind.Function
  );
  raylib_ExportFontAsCode.detail = "Exports a font as C code.";
  raylib_ExportFontAsCode.documentation = new vscode.MarkdownString(
    "**raylib.ExportFontAsCode()**\n\nExports a font as C code.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ExportFontAsCode.insertText = new vscode.SnippetString(
    "raylib.ExportFontAsCode()"
  );
  completionItems.push(raylib_ExportFontAsCode);

  const raylib_DrawFPS = new vscode.CompletionItem(
    "raylib.DrawFPS",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawFPS.detail = "Draws the current FPS on the screen.";
  raylib_DrawFPS.documentation = new vscode.MarkdownString(
    "**raylib.DrawFPS()**\n\nDraws the current FPS on the screen.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawFPS.insertText = new vscode.SnippetString("raylib.DrawFPS()");
  completionItems.push(raylib_DrawFPS);

  const raylib_DrawText = new vscode.CompletionItem(
    "raylib.DrawText",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawText.detail = "Draws text on the screen.";
  raylib_DrawText.documentation = new vscode.MarkdownString(
    "**raylib.DrawText()**\n\nDraws text on the screen.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawText.insertText = new vscode.SnippetString("raylib.DrawText()");
  completionItems.push(raylib_DrawText);

  const raylib_DrawTextEx = new vscode.CompletionItem(
    "raylib.DrawTextEx",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawTextEx.detail =
    "Draws text on the screen with extended parameters.";
  raylib_DrawTextEx.documentation = new vscode.MarkdownString(
    "**raylib.DrawTextEx()**\n\nDraws text on the screen with extended parameters.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawTextEx.insertText = new vscode.SnippetString(
    "raylib.DrawTextEx()"
  );
  completionItems.push(raylib_DrawTextEx);

  const raylib_DrawTextPro = new vscode.CompletionItem(
    "raylib.DrawTextPro",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawTextPro.detail =
    "Draws text on the screen with additional options.";
  raylib_DrawTextPro.documentation = new vscode.MarkdownString(
    "**raylib.DrawTextPro()**\n\nDraws text on the screen with additional options.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawTextPro.insertText = new vscode.SnippetString(
    "raylib.DrawTextPro()"
  );
  completionItems.push(raylib_DrawTextPro);

  const raylib_DrawTextCodepoint = new vscode.CompletionItem(
    "raylib.DrawTextCodepoint",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawTextCodepoint.detail =
    "Draws a single codepoint as text on the screen.";
  raylib_DrawTextCodepoint.documentation = new vscode.MarkdownString(
    "**raylib.DrawTextCodepoint()**\n\nDraws a single codepoint as text on the screen.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawTextCodepoint.insertText = new vscode.SnippetString(
    "raylib.DrawTextCodepoint()"
  );
  completionItems.push(raylib_DrawTextCodepoint);

  const raylib_DrawTextCodepoints = new vscode.CompletionItem(
    "raylib.DrawTextCodepoints",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawTextCodepoints.detail =
    "Draws multiple codepoints as text on the screen.";
  raylib_DrawTextCodepoints.documentation = new vscode.MarkdownString(
    "**raylib.DrawTextCodepoints()**\n\nDraws multiple codepoints as text on the screen.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawTextCodepoints.insertText = new vscode.SnippetString(
    "raylib.DrawTextCodepoints()"
  );
  completionItems.push(raylib_DrawTextCodepoints);

  const raylib_SetTextLineSpacing = new vscode.CompletionItem(
    "raylib.SetTextLineSpacing",
    vscode.CompletionItemKind.Function
  );
  raylib_SetTextLineSpacing.detail = "Sets the line spacing for text.";
  raylib_SetTextLineSpacing.documentation = new vscode.MarkdownString(
    "**raylib.SetTextLineSpacing()**\n\nSets the line spacing for text.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_SetTextLineSpacing.insertText = new vscode.SnippetString(
    "raylib.SetTextLineSpacing()"
  );
  completionItems.push(raylib_SetTextLineSpacing);

  const raylib_MeasureText = new vscode.CompletionItem(
    "raylib.MeasureText",
    vscode.CompletionItemKind.Function
  );
  raylib_MeasureText.detail = "Measures the width of the text.";
  raylib_MeasureText.documentation = new vscode.MarkdownString(
    "**raylib.MeasureText()**\n\nMeasures the width of the text.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_MeasureText.insertText = new vscode.SnippetString(
    "raylib.MeasureText()"
  );
  completionItems.push(raylib_MeasureText);

  const raylib_MeasureTextEx = new vscode.CompletionItem(
    "raylib.MeasureTextEx",
    vscode.CompletionItemKind.Function
  );
  raylib_MeasureTextEx.detail =
    "Measures the size of the text with extended parameters.";
  raylib_MeasureTextEx.documentation = new vscode.MarkdownString(
    "**raylib.MeasureTextEx()**\n\nMeasures the size of the text with extended parameters.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_MeasureTextEx.insertText = new vscode.SnippetString(
    "raylib.MeasureTextEx()"
  );
  completionItems.push(raylib_MeasureTextEx);

  const raylib_GetGlyphIndex = new vscode.CompletionItem(
    "raylib.GetGlyphIndex",
    vscode.CompletionItemKind.Function
  );
  raylib_GetGlyphIndex.detail = "Gets the index of a glyph in the font.";
  raylib_GetGlyphIndex.documentation = new vscode.MarkdownString(
    "**raylib.GetGlyphIndex()**\n\nGets the index of a glyph in the font.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetGlyphIndex.insertText = new vscode.SnippetString(
    "raylib.GetGlyphIndex()"
  );
  completionItems.push(raylib_GetGlyphIndex);

  const raylib_GetGlyphInfo = new vscode.CompletionItem(
    "raylib.GetGlyphInfo",
    vscode.CompletionItemKind.Function
  );
  raylib_GetGlyphInfo.detail = "Gets information about a glyph in the font.";
  raylib_GetGlyphInfo.documentation = new vscode.MarkdownString(
    "**raylib.GetGlyphInfo()**\n\nGets information about a glyph in the font.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetGlyphInfo.insertText = new vscode.SnippetString(
    "raylib.GetGlyphInfo()"
  );
  completionItems.push(raylib_GetGlyphInfo);

  const raylib_GetGlyphAtlasRec = new vscode.CompletionItem(
    "raylib.GetGlyphAtlasRec",
    vscode.CompletionItemKind.Function
  );
  raylib_GetGlyphAtlasRec.detail =
    "Gets the atlas rectangle of a glyph in the font.";
  raylib_GetGlyphAtlasRec.documentation = new vscode.MarkdownString(
    "**raylib.GetGlyphAtlasRec()**\n\nGets the atlas rectangle of a glyph in the font.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetGlyphAtlasRec.insertText = new vscode.SnippetString(
    "raylib.GetGlyphAtlasRec()"
  );
  completionItems.push(raylib_GetGlyphAtlasRec);

  const raylib_LoadUTF8 = new vscode.CompletionItem(
    "raylib.LoadUTF8",
    vscode.CompletionItemKind.Function
  );
  raylib_LoadUTF8.detail = "Loads a UTF-8 string.";
  raylib_LoadUTF8.documentation = new vscode.MarkdownString(
    "**raylib.LoadUTF8()**\n\nLoads a UTF-8 string.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_LoadUTF8.insertText = new vscode.SnippetString("raylib.LoadUTF8()");
  completionItems.push(raylib_LoadUTF8);

  const raylib_UnloadUTF8 = new vscode.CompletionItem(
    "raylib.UnloadUTF8",
    vscode.CompletionItemKind.Function
  );
  raylib_UnloadUTF8.detail = "Unloads a UTF-8 string from memory.";
  raylib_UnloadUTF8.documentation = new vscode.MarkdownString(
    "**raylib.UnloadUTF8()**\n\nUnloads a UTF-8 string from memory.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_UnloadUTF8.insertText = new vscode.SnippetString(
    "raylib.UnloadUTF8()"
  );
  completionItems.push(raylib_UnloadUTF8);

  const raylib_LoadCodepoints = new vscode.CompletionItem(
    "raylib.LoadCodepoints",
    vscode.CompletionItemKind.Function
  );
  raylib_LoadCodepoints.detail = "Loads codepoints from a UTF-8 string.";
  raylib_LoadCodepoints.documentation = new vscode.MarkdownString(
    "**raylib.LoadCodepoints()**\n\nLoads codepoints from a UTF-8 string.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_LoadCodepoints.insertText = new vscode.SnippetString(
    "raylib.LoadCodepoints()"
  );
  completionItems.push(raylib_LoadCodepoints);

  const raylib_UnloadCodepoints = new vscode.CompletionItem(
    "raylib.UnloadCodepoints",
    vscode.CompletionItemKind.Function
  );
  raylib_UnloadCodepoints.detail = "Unloads codepoints from memory.";
  raylib_UnloadCodepoints.documentation = new vscode.MarkdownString(
    "**raylib.UnloadCodepoints()**\n\nUnloads codepoints from memory.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_UnloadCodepoints.insertText = new vscode.SnippetString(
    "raylib.UnloadCodepoints()"
  );
  completionItems.push(raylib_UnloadCodepoints);

  const raylib_GetCodepointCount = new vscode.CompletionItem(
    "raylib.GetCodepointCount",
    vscode.CompletionItemKind.Function
  );
  raylib_GetCodepointCount.detail =
    "Gets the count of codepoints in a UTF-8 string.";
  raylib_GetCodepointCount.documentation = new vscode.MarkdownString(
    "**raylib.GetCodepointCount()**\n\nGets the count of codepoints in a UTF-8 string.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetCodepointCount.insertText = new vscode.SnippetString(
    "raylib.GetCodepointCount()"
  );
  completionItems.push(raylib_GetCodepointCount);

  const raylib_GetCodepoint = new vscode.CompletionItem(
    "raylib.GetCodepoint",
    vscode.CompletionItemKind.Function
  );
  raylib_GetCodepoint.detail = "Gets a codepoint from a UTF-8 string.";
  raylib_GetCodepoint.documentation = new vscode.MarkdownString(
    "**raylib.GetCodepoint()**\n\nGets a codepoint from a UTF-8 string.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetCodepoint.insertText = new vscode.SnippetString(
    "raylib.GetCodepoint()"
  );
  completionItems.push(raylib_GetCodepoint);

  const raylib_GetCodepointNext = new vscode.CompletionItem(
    "raylib.GetCodepointNext",
    vscode.CompletionItemKind.Function
  );
  raylib_GetCodepointNext.detail = "Gets the next codepoint in a UTF-8 string.";
  raylib_GetCodepointNext.documentation = new vscode.MarkdownString(
    "**raylib.GetCodepointNext()**\n\nGets the next codepoint in a UTF-8 string.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetCodepointNext.insertText = new vscode.SnippetString(
    "raylib.GetCodepointNext()"
  );
  completionItems.push(raylib_GetCodepointNext);

  const raylib_GetCodepointPrevious = new vscode.CompletionItem(
    "raylib.GetCodepointPrevious",
    vscode.CompletionItemKind.Function
  );
  raylib_GetCodepointPrevious.detail =
    "Gets the previous codepoint in a UTF-8 string.";
  raylib_GetCodepointPrevious.documentation = new vscode.MarkdownString(
    "**raylib.GetCodepointPrevious()**\n\nGets the previous codepoint in a UTF-8 string.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetCodepointPrevious.insertText = new vscode.SnippetString(
    "raylib.GetCodepointPrevious()"
  );
  completionItems.push(raylib_GetCodepointPrevious);

  const raylib_CodepointToUTF8 = new vscode.CompletionItem(
    "raylib.CodepointToUTF8",
    vscode.CompletionItemKind.Function
  );
  raylib_CodepointToUTF8.detail = "Converts a codepoint to a UTF-8 string.";
  raylib_CodepointToUTF8.documentation = new vscode.MarkdownString(
    "**raylib.CodepointToUTF8()**\n\nConverts a codepoint to a UTF-8 string.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_CodepointToUTF8.insertText = new vscode.SnippetString(
    "raylib.CodepointToUTF8()"
  );
  completionItems.push(raylib_CodepointToUTF8);

  const raylib_TextCopy = new vscode.CompletionItem(
    "raylib.TextCopy",
    vscode.CompletionItemKind.Function
  );
  raylib_TextCopy.detail = "Copies text from one string to another.";
  raylib_TextCopy.documentation = new vscode.MarkdownString(
    "**raylib.TextCopy()**\n\nCopies text from one string to another.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_TextCopy.insertText = new vscode.SnippetString("raylib.TextCopy()");
  completionItems.push(raylib_TextCopy);

  const raylib_TextIsEqual = new vscode.CompletionItem(
    "raylib.TextIsEqual",
    vscode.CompletionItemKind.Function
  );
  raylib_TextIsEqual.detail = "Checks if two strings are equal.";
  raylib_TextIsEqual.documentation = new vscode.MarkdownString(
    "**raylib.TextIsEqual()**\n\nChecks if two strings are equal.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_TextIsEqual.insertText = new vscode.SnippetString(
    "raylib.TextIsEqual()"
  );
  completionItems.push(raylib_TextIsEqual);

  const raylib_TextLength = new vscode.CompletionItem(
    "raylib.TextLength",
    vscode.CompletionItemKind.Function
  );
  raylib_TextLength.detail = "Gets the length of a text string.";
  raylib_TextLength.documentation = new vscode.MarkdownString(
    "**raylib.TextLength()**\n\nGets the length of a text string.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_TextLength.insertText = new vscode.SnippetString(
    "raylib.TextLength()"
  );
  completionItems.push(raylib_TextLength);

  const raylib_TextFormat = new vscode.CompletionItem(
    "raylib.TextFormat",
    vscode.CompletionItemKind.Function
  );
  raylib_TextFormat.detail = "Formats a text string.";
  raylib_TextFormat.documentation = new vscode.MarkdownString(
    "**raylib.TextFormat()**\n\nFormats a text string.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_TextFormat.insertText = new vscode.SnippetString(
    "raylib.TextFormat()"
  );
  completionItems.push(raylib_TextFormat);

  const raylib_TextSubtext = new vscode.CompletionItem(
    "raylib.TextSubtext",
    vscode.CompletionItemKind.Function
  );
  raylib_TextSubtext.detail = "Gets a subtext from a text string.";
  raylib_TextSubtext.documentation = new vscode.MarkdownString(
    "**raylib.TextSubtext()**\n\nGets a subtext from a text string.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_TextSubtext.insertText = new vscode.SnippetString(
    "raylib.TextSubtext()"
  );
  completionItems.push(raylib_TextSubtext);

  const raylib_TextReplace = new vscode.CompletionItem(
    "raylib.TextReplace",
    vscode.CompletionItemKind.Function
  );
  raylib_TextReplace.detail = "Replaces text in a string.";
  raylib_TextReplace.documentation = new vscode.MarkdownString(
    "**raylib.TextReplace()**\n\nReplaces text in a string.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_TextReplace.insertText = new vscode.SnippetString(
    "raylib.TextReplace()"
  );
  completionItems.push(raylib_TextReplace);

  const raylib_TextInsert = new vscode.CompletionItem(
    "raylib.TextInsert",
    vscode.CompletionItemKind.Function
  );
  raylib_TextInsert.detail = "Inserts text into a string.";
  raylib_TextInsert.documentation = new vscode.MarkdownString(
    "**raylib.TextInsert()**\n\nInserts text into a string.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_TextInsert.insertText = new vscode.SnippetString(
    "raylib.TextInsert()"
  );
  completionItems.push(raylib_TextInsert);

  const raylib_TextJoin = new vscode.CompletionItem(
    "raylib.TextJoin",
    vscode.CompletionItemKind.Function
  );
  raylib_TextJoin.detail = "Joins text strings.";
  raylib_TextJoin.documentation = new vscode.MarkdownString(
    "**raylib.TextJoin()**\n\nJoins text strings.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_TextJoin.insertText = new vscode.SnippetString("raylib.TextJoin()");
  completionItems.push(raylib_TextJoin);

  const raylib_TextSplit = new vscode.CompletionItem(
    "raylib.TextSplit",
    vscode.CompletionItemKind.Function
  );
  raylib_TextSplit.detail = "Splits a text string.";
  raylib_TextSplit.documentation = new vscode.MarkdownString(
    "**raylib.TextSplit()**\n\nSplits a text string.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_TextSplit.insertText = new vscode.SnippetString("raylib.TextSplit()");
  completionItems.push(raylib_TextSplit);

  const raylib_TextAppend = new vscode.CompletionItem(
    "raylib.TextAppend",
    vscode.CompletionItemKind.Function
  );
  raylib_TextAppend.detail = "Appends text to a string.";
  raylib_TextAppend.documentation = new vscode.MarkdownString(
    "**raylib.TextAppend()**\n\nAppends text to a string.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_TextAppend.insertText = new vscode.SnippetString(
    "raylib.TextAppend()"
  );
  completionItems.push(raylib_TextAppend);

  const raylib_TextFindIndex = new vscode.CompletionItem(
    "raylib.TextFindIndex",
    vscode.CompletionItemKind.Function
  );
  raylib_TextFindIndex.detail =
    "Finds the index of a substring in a text string.";
  raylib_TextFindIndex.documentation = new vscode.MarkdownString(
    "**raylib.TextFindIndex()**\n\nFinds the index of a substring in a text string.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_TextFindIndex.insertText = new vscode.SnippetString(
    "raylib.TextFindIndex()"
  );
  completionItems.push(raylib_TextFindIndex);

  const raylib_TextToUpper = new vscode.CompletionItem(
    "raylib.TextToUpper",
    vscode.CompletionItemKind.Function
  );
  raylib_TextToUpper.detail = "Converts a text string to uppercase.";
  raylib_TextToUpper.documentation = new vscode.MarkdownString(
    "**raylib.TextToUpper()**\n\nConverts a text string to uppercase.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_TextToUpper.insertText = new vscode.SnippetString(
    "raylib.TextToUpper()"
  );
  completionItems.push(raylib_TextToUpper);

  const raylib_TextToLower = new vscode.CompletionItem(
    "raylib.TextToLower",
    vscode.CompletionItemKind.Function
  );
  raylib_TextToLower.detail = "Converts a text string to lowercase.";
  raylib_TextToLower.documentation = new vscode.MarkdownString(
    "**raylib.TextToLower()**\n\nConverts a text string to lowercase.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_TextToLower.insertText = new vscode.SnippetString(
    "raylib.TextToLower()"
  );
  completionItems.push(raylib_TextToLower);

  const raylib_TextToPascal = new vscode.CompletionItem(
    "raylib.TextToPascal",
    vscode.CompletionItemKind.Function
  );
  raylib_TextToPascal.detail = "Converts a text string to Pascal case.";
  raylib_TextToPascal.documentation = new vscode.MarkdownString(
    "**raylib.TextToPascal()**\n\nConverts a text string to Pascal case.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_TextToPascal.insertText = new vscode.SnippetString(
    "raylib.TextToPascal()"
  );
  completionItems.push(raylib_TextToPascal);

  const raylib_TextToSnake = new vscode.CompletionItem(
    "raylib.TextToSnake",
    vscode.CompletionItemKind.Function
  );
  raylib_TextToSnake.detail = "Converts a text string to snake case.";
  raylib_TextToSnake.documentation = new vscode.MarkdownString(
    "**raylib.TextToSnake()**\n\nConverts a text string to snake case.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_TextToSnake.insertText = new vscode.SnippetString(
    "raylib.TextToSnake()"
  );
  completionItems.push(raylib_TextToSnake);

  const raylib_TextToCamel = new vscode.CompletionItem(
    "raylib.TextToCamel",
    vscode.CompletionItemKind.Function
  );
  raylib_TextToCamel.detail = "Converts a text string to camel case.";
  raylib_TextToCamel.documentation = new vscode.MarkdownString(
    "**raylib.TextToCamel()**\n\nConverts a text string to camel case.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_TextToCamel.insertText = new vscode.SnippetString(
    "raylib.TextToCamel()"
  );
  completionItems.push(raylib_TextToCamel);

  const raylib_TextToInteger = new vscode.CompletionItem(
    "raylib.TextToInteger",
    vscode.CompletionItemKind.Function
  );
  raylib_TextToInteger.detail = "Converts a text string to an integer.";
  raylib_TextToInteger.documentation = new vscode.MarkdownString(
    "**raylib.TextToInteger()**\n\nConverts a text string to an integer.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_TextToInteger.insertText = new vscode.SnippetString(
    "raylib.TextToInteger()"
  );
  completionItems.push(raylib_TextToInteger);

  const raylib_TextToFloat = new vscode.CompletionItem(
    "raylib.TextToFloat",
    vscode.CompletionItemKind.Function
  );
  raylib_TextToFloat.detail = "Converts a text string to a float.";
  raylib_TextToFloat.documentation = new vscode.MarkdownString(
    "**raylib.TextToFloat()**\n\nConverts a text string to a float.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_TextToFloat.insertText = new vscode.SnippetString(
    "raylib.TextToFloat()"
  );
  completionItems.push(raylib_TextToFloat);

  const raylib_LoadImage = new vscode.CompletionItem(
    "raylib.LoadImage",
    vscode.CompletionItemKind.Function
  );
  raylib_LoadImage.detail = "Loads an image from a file.";
  raylib_LoadImage.documentation = new vscode.MarkdownString(
    "**raylib.LoadImage()**\n\nLoads an image from a file.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_LoadImage.insertText = new vscode.SnippetString("raylib.LoadImage()");
  completionItems.push(raylib_LoadImage);

  const raylib_UnloadImage = new vscode.CompletionItem(
    "raylib.UnloadImage",
    vscode.CompletionItemKind.Function
  );
  raylib_UnloadImage.detail = "Unloads an image from memory.";
  raylib_UnloadImage.documentation = new vscode.MarkdownString(
    "**raylib.UnloadImage()**\n\nUnloads an image from memory.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_UnloadImage.insertText = new vscode.SnippetString(
    "raylib.UnloadImage()"
  );
  completionItems.push(raylib_UnloadImage);

  const raylib_LoadTexture = new vscode.CompletionItem(
    "raylib.LoadTexture",
    vscode.CompletionItemKind.Function
  );
  raylib_LoadTexture.detail = "Loads a texture from a file.";
  raylib_LoadTexture.documentation = new vscode.MarkdownString(
    "**raylib.LoadTexture()**\n\nLoads a texture from a file.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_LoadTexture.insertText = new vscode.SnippetString(
    "raylib.LoadTexture()"
  );
  completionItems.push(raylib_LoadTexture);

  const raylib_LoadTextureFromImage = new vscode.CompletionItem(
    "raylib.LoadTextureFromImage",
    vscode.CompletionItemKind.Function
  );
  raylib_LoadTextureFromImage.detail =
    "Loads a texture from an existing image.";
  raylib_LoadTextureFromImage.documentation = new vscode.MarkdownString(
    "**raylib.LoadTextureFromImage()**\n\nLoads a texture from an existing image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_LoadTextureFromImage.insertText = new vscode.SnippetString(
    "raylib.LoadTextureFromImage()"
  );
  completionItems.push(raylib_LoadTextureFromImage);

  const raylib_UnloadTexture = new vscode.CompletionItem(
    "raylib.UnloadTexture",
    vscode.CompletionItemKind.Function
  );
  raylib_UnloadTexture.detail = "Unloads a texture from GPU memory.";
  raylib_UnloadTexture.documentation = new vscode.MarkdownString(
    "**raylib.UnloadTexture()**\n\nUnloads a texture from GPU memory.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_UnloadTexture.insertText = new vscode.SnippetString(
    "raylib.UnloadTexture()"
  );
  completionItems.push(raylib_UnloadTexture);

  const raylib_UpdateTexture = new vscode.CompletionItem(
    "raylib.UpdateTexture",
    vscode.CompletionItemKind.Function
  );
  raylib_UpdateTexture.detail =
    "Updates the contents of a texture with new data.";
  raylib_UpdateTexture.documentation = new vscode.MarkdownString(
    "**raylib.UpdateTexture()**\n\nUpdates the contents of a texture with new data.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_UpdateTexture.insertText = new vscode.SnippetString(
    "raylib.UpdateTexture()"
  );
  completionItems.push(raylib_UpdateTexture);

  const raylib_GenTextureMipmaps = new vscode.CompletionItem(
    "raylib.GenTextureMipmaps",
    vscode.CompletionItemKind.Function
  );
  raylib_GenTextureMipmaps.detail = "Generates mipmaps for a texture.";
  raylib_GenTextureMipmaps.documentation = new vscode.MarkdownString(
    "**raylib.GenTextureMipmaps()**\n\nGenerates mipmaps for a texture.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GenTextureMipmaps.insertText = new vscode.SnippetString(
    "raylib.GenTextureMipmaps()"
  );
  completionItems.push(raylib_GenTextureMipmaps);

  const raylib_ImageResize = new vscode.CompletionItem(
    "raylib.ImageResize",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageResize.detail = "Resizes an image to the specified dimensions.";
  raylib_ImageResize.documentation = new vscode.MarkdownString(
    "**raylib.ImageResize()**\n\nResizes an image to the specified dimensions.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageResize.insertText = new vscode.SnippetString(
    "raylib.ImageResize()"
  );
  completionItems.push(raylib_ImageResize);

  const raylib_ImageFlipHorizontal = new vscode.CompletionItem(
    "raylib.ImageFlipHorizontal",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageFlipHorizontal.detail = "Flips an image horizontally.";
  raylib_ImageFlipHorizontal.documentation = new vscode.MarkdownString(
    "**raylib.ImageFlipHorizontal()**\n\nFlips an image horizontally.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageFlipHorizontal.insertText = new vscode.SnippetString(
    "raylib.ImageFlipHorizontal()"
  );
  completionItems.push(raylib_ImageFlipHorizontal);

  const raylib_ImageFlipVertical = new vscode.CompletionItem(
    "raylib.ImageFlipVertical",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageFlipVertical.detail = "Flips an image vertically.";
  raylib_ImageFlipVertical.documentation = new vscode.MarkdownString(
    "**raylib.ImageFlipVertical()**\n\nFlips an image vertically.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageFlipVertical.insertText = new vscode.SnippetString(
    "raylib.ImageFlipVertical()"
  );
  completionItems.push(raylib_ImageFlipVertical);

  const raylib_ImageCopy = new vscode.CompletionItem(
    "raylib.ImageCopy",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageCopy.detail = "Creates a copy of an image.";
  raylib_ImageCopy.documentation = new vscode.MarkdownString(
    "**raylib.ImageCopy()**\n\nCreates a copy of an image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageCopy.insertText = new vscode.SnippetString("raylib.ImageCopy()");
  completionItems.push(raylib_ImageCopy);

  const raylib_ImageCrop = new vscode.CompletionItem(
    "raylib.ImageCrop",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageCrop.detail = "Crops an image to the specified rectangle.";
  raylib_ImageCrop.documentation = new vscode.MarkdownString(
    "**raylib.ImageCrop()**\n\nCrops an image to the specified rectangle.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageCrop.insertText = new vscode.SnippetString("raylib.ImageCrop()");
  completionItems.push(raylib_ImageCrop);

  const raylib_ImageColorTint = new vscode.CompletionItem(
    "raylib.ImageColorTint",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageColorTint.detail = "Tints an image with a specified color.";
  raylib_ImageColorTint.documentation = new vscode.MarkdownString(
    "**raylib.ImageColorTint()**\n\nTints an image with a specified color.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageColorTint.insertText = new vscode.SnippetString(
    "raylib.ImageColorTint()"
  );
  completionItems.push(raylib_ImageColorTint);

  const raylib_ImageColorInvert = new vscode.CompletionItem(
    "raylib.ImageColorInvert",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageColorInvert.detail = "Inverts the colors of an image.";
  raylib_ImageColorInvert.documentation = new vscode.MarkdownString(
    "**raylib.ImageColorInvert()**\n\nInverts the colors of an image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageColorInvert.insertText = new vscode.SnippetString(
    "raylib.ImageColorInvert()"
  );
  completionItems.push(raylib_ImageColorInvert);

  const raylib_ImageColorGrayscale = new vscode.CompletionItem(
    "raylib.ImageColorGrayscale",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageColorGrayscale.detail = "Converts an image to grayscale.";
  raylib_ImageColorGrayscale.documentation = new vscode.MarkdownString(
    "**raylib.ImageColorGrayscale()**\n\nConverts an image to grayscale.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageColorGrayscale.insertText = new vscode.SnippetString(
    "raylib.ImageColorGrayscale()"
  );
  completionItems.push(raylib_ImageColorGrayscale);

  const raylib_ImageColorBrightness = new vscode.CompletionItem(
    "raylib.ImageColorBrightness",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageColorBrightness.detail = "Adjusts the brightness of an image.";
  raylib_ImageColorBrightness.documentation = new vscode.MarkdownString(
    "**raylib.ImageColorBrightness()**\n\nAdjusts the brightness of an image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageColorBrightness.insertText = new vscode.SnippetString(
    "raylib.ImageColorBrightness()"
  );
  completionItems.push(raylib_ImageColorBrightness);

  const raylib_ImageColorContrast = new vscode.CompletionItem(
    "raylib.ImageColorContrast",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageColorContrast.detail = "Adjusts the contrast of an image.";
  raylib_ImageColorContrast.documentation = new vscode.MarkdownString(
    "**raylib.ImageColorContrast()**\n\nAdjusts the contrast of an image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageColorContrast.insertText = new vscode.SnippetString(
    "raylib.ImageColorContrast()"
  );
  completionItems.push(raylib_ImageColorContrast);

  const raylib_ImageColorReplace = new vscode.CompletionItem(
    "raylib.ImageColorReplace",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageColorReplace.detail =
    "Replaces a color in an image with another color.";
  raylib_ImageColorReplace.documentation = new vscode.MarkdownString(
    "**raylib.ImageColorReplace()**\n\nReplaces a color in an image with another color.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageColorReplace.insertText = new vscode.SnippetString(
    "raylib.ImageColorReplace()"
  );
  completionItems.push(raylib_ImageColorReplace);

  const raylib_LoadTextureCubemap = new vscode.CompletionItem(
    "raylib.LoadTextureCubemap",
    vscode.CompletionItemKind.Function
  );
  raylib_LoadTextureCubemap.detail = "Loads a cubemap texture from an image.";
  raylib_LoadTextureCubemap.documentation = new vscode.MarkdownString(
    "**raylib.LoadTextureCubemap()**\n\nLoads a cubemap texture from an image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_LoadTextureCubemap.insertText = new vscode.SnippetString(
    "raylib.LoadTextureCubemap()"
  );
  completionItems.push(raylib_LoadTextureCubemap);

  const raylib_UpdateTextureRec = new vscode.CompletionItem(
    "raylib.UpdateTextureRec",
    vscode.CompletionItemKind.Function
  );
  raylib_UpdateTextureRec.detail =
    "Updates a specific region of a texture with new data.";
  raylib_UpdateTextureRec.documentation = new vscode.MarkdownString(
    "**raylib.UpdateTextureRec()**\n\nUpdates a specific region of a texture with new data.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_UpdateTextureRec.insertText = new vscode.SnippetString(
    "raylib.UpdateTextureRec()"
  );
  completionItems.push(raylib_UpdateTextureRec);

  const raylib_LoadImageRaw = new vscode.CompletionItem(
    "raylib.LoadImageRaw",
    vscode.CompletionItemKind.Function
  );
  raylib_LoadImageRaw.detail = "Loads an image from raw pixel data.";
  raylib_LoadImageRaw.documentation = new vscode.MarkdownString(
    "**raylib.LoadImageRaw()**\n\nLoads an image from raw pixel data.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_LoadImageRaw.insertText = new vscode.SnippetString(
    "raylib.LoadImageRaw()"
  );
  completionItems.push(raylib_LoadImageRaw);

  const raylib_LoadImageAnim = new vscode.CompletionItem(
    "raylib.LoadImageAnim",
    vscode.CompletionItemKind.Function
  );
  raylib_LoadImageAnim.detail = "Loads an animated image (GIF) from a file.";
  raylib_LoadImageAnim.documentation = new vscode.MarkdownString(
    "**raylib.LoadImageAnim()**\n\nLoads an animated image (GIF) from a file.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_LoadImageAnim.insertText = new vscode.SnippetString(
    "raylib.LoadImageAnim()"
  );
  completionItems.push(raylib_LoadImageAnim);

  const raylib_LoadImageAnimFromMemory = new vscode.CompletionItem(
    "raylib.LoadImageAnimFromMemory",
    vscode.CompletionItemKind.Function
  );
  raylib_LoadImageAnimFromMemory.detail =
    "Loads an animated image (GIF) from memory.";
  raylib_LoadImageAnimFromMemory.documentation = new vscode.MarkdownString(
    "**raylib.LoadImageAnimFromMemory()**\n\nLoads an animated image (GIF) from memory.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_LoadImageAnimFromMemory.insertText = new vscode.SnippetString(
    "raylib.LoadImageAnimFromMemory()"
  );
  completionItems.push(raylib_LoadImageAnimFromMemory);

  const raylib_LoadImageFromMemory = new vscode.CompletionItem(
    "raylib.LoadImageFromMemory",
    vscode.CompletionItemKind.Function
  );
  raylib_LoadImageFromMemory.detail = "Loads an image from memory data.";
  raylib_LoadImageFromMemory.documentation = new vscode.MarkdownString(
    "**raylib.LoadImageFromMemory()**\n\nLoads an image from memory data.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_LoadImageFromMemory.insertText = new vscode.SnippetString(
    "raylib.LoadImageFromMemory()"
  );
  completionItems.push(raylib_LoadImageFromMemory);

  const raylib_LoadImageFromTexture = new vscode.CompletionItem(
    "raylib.LoadImageFromTexture",
    vscode.CompletionItemKind.Function
  );
  raylib_LoadImageFromTexture.detail = "Loads an image from a texture.";
  raylib_LoadImageFromTexture.documentation = new vscode.MarkdownString(
    "**raylib.LoadImageFromTexture()**\n\nLoads an image from a texture.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_LoadImageFromTexture.insertText = new vscode.SnippetString(
    "raylib.LoadImageFromTexture()"
  );
  completionItems.push(raylib_LoadImageFromTexture);

  const raylib_LoadImageFromScreen = new vscode.CompletionItem(
    "raylib.LoadImageFromScreen",
    vscode.CompletionItemKind.Function
  );
  raylib_LoadImageFromScreen.detail =
    "Loads an image from the current screen content.";
  raylib_LoadImageFromScreen.documentation = new vscode.MarkdownString(
    "**raylib.LoadImageFromScreen()**\n\nLoads an image from the current screen content.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_LoadImageFromScreen.insertText = new vscode.SnippetString(
    "raylib.LoadImageFromScreen()"
  );
  completionItems.push(raylib_LoadImageFromScreen);

  const raylib_IsImageValid = new vscode.CompletionItem(
    "raylib.IsImageValid",
    vscode.CompletionItemKind.Function
  );
  raylib_IsImageValid.detail = "Checks if an image is valid.";
  raylib_IsImageValid.documentation = new vscode.MarkdownString(
    "**raylib.IsImageValid()**\n\nChecks if an image is valid.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_IsImageValid.insertText = new vscode.SnippetString(
    "raylib.IsImageValid()"
  );
  completionItems.push(raylib_IsImageValid);

  const raylib_ExportImage = new vscode.CompletionItem(
    "raylib.ExportImage",
    vscode.CompletionItemKind.Function
  );
  raylib_ExportImage.detail = "Exports an image to a file.";
  raylib_ExportImage.documentation = new vscode.MarkdownString(
    "**raylib.ExportImage()**\n\nExports an image to a file.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ExportImage.insertText = new vscode.SnippetString(
    "raylib.ExportImage()"
  );
  completionItems.push(raylib_ExportImage);

  const raylib_ExportImageToMemory = new vscode.CompletionItem(
    "raylib.ExportImageToMemory",
    vscode.CompletionItemKind.Function
  );
  raylib_ExportImageToMemory.detail = "Exports an image to memory.";
  raylib_ExportImageToMemory.documentation = new vscode.MarkdownString(
    "**raylib.ExportImageToMemory()**\n\nExports an image to memory.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ExportImageToMemory.insertText = new vscode.SnippetString(
    "raylib.ExportImageToMemory()"
  );
  completionItems.push(raylib_ExportImageToMemory);

  const raylib_ExportImageAsCode = new vscode.CompletionItem(
    "raylib.ExportImageAsCode",
    vscode.CompletionItemKind.Function
  );
  raylib_ExportImageAsCode.detail = "Exports an image as source code.";
  raylib_ExportImageAsCode.documentation = new vscode.MarkdownString(
    "**raylib.ExportImageAsCode()**\n\nExports an image as source code.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ExportImageAsCode.insertText = new vscode.SnippetString(
    "raylib.ExportImageAsCode()"
  );
  completionItems.push(raylib_ExportImageAsCode);

  const raylib_GenImageColor = new vscode.CompletionItem(
    "raylib.GenImageColor",
    vscode.CompletionItemKind.Function
  );
  raylib_GenImageColor.detail =
    "Generates an image filled with a specific color.";
  raylib_GenImageColor.documentation = new vscode.MarkdownString(
    "**raylib.GenImageColor()**\n\nGenerates an image filled with a specific color.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GenImageColor.insertText = new vscode.SnippetString(
    "raylib.GenImageColor()"
  );
  completionItems.push(raylib_GenImageColor);

  const raylib_GenImageGradientLinear = new vscode.CompletionItem(
    "raylib.GenImageGradientLinear",
    vscode.CompletionItemKind.Function
  );
  raylib_GenImageGradientLinear.detail = "Generates a linear gradient image.";
  raylib_GenImageGradientLinear.documentation = new vscode.MarkdownString(
    "**raylib.GenImageGradientLinear()**\n\nGenerates a linear gradient image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GenImageGradientLinear.insertText = new vscode.SnippetString(
    "raylib.GenImageGradientLinear()"
  );
  completionItems.push(raylib_GenImageGradientLinear);

  const raylib_GenImageGradientRadial = new vscode.CompletionItem(
    "raylib.GenImageGradientRadial",
    vscode.CompletionItemKind.Function
  );
  raylib_GenImageGradientRadial.detail = "Generates a radial gradient image.";
  raylib_GenImageGradientRadial.documentation = new vscode.MarkdownString(
    "**raylib.GenImageGradientRadial()**\n\nGenerates a radial gradient image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GenImageGradientRadial.insertText = new vscode.SnippetString(
    "raylib.GenImageGradientRadial()"
  );
  completionItems.push(raylib_GenImageGradientRadial);

  const raylib_GenImageGradientSquare = new vscode.CompletionItem(
    "raylib.GenImageGradientSquare",
    vscode.CompletionItemKind.Function
  );
  raylib_GenImageGradientSquare.detail = "Generates a square gradient image.";
  raylib_GenImageGradientSquare.documentation = new vscode.MarkdownString(
    "**raylib.GenImageGradientSquare()**\n\nGenerates a square gradient image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GenImageGradientSquare.insertText = new vscode.SnippetString(
    "raylib.GenImageGradientSquare()"
  );
  completionItems.push(raylib_GenImageGradientSquare);

  const raylib_GenImageChecked = new vscode.CompletionItem(
    "raylib.GenImageChecked",
    vscode.CompletionItemKind.Function
  );
  raylib_GenImageChecked.detail =
    "Generates an image with a checkered pattern.";
  raylib_GenImageChecked.documentation = new vscode.MarkdownString(
    "**raylib.GenImageChecked()**\n\nGenerates an image with a checkered pattern.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GenImageChecked.insertText = new vscode.SnippetString(
    "raylib.GenImageChecked()"
  );
  completionItems.push(raylib_GenImageChecked);

  const raylib_GenImageWhiteNoise = new vscode.CompletionItem(
    "raylib.GenImageWhiteNoise",
    vscode.CompletionItemKind.Function
  );
  raylib_GenImageWhiteNoise.detail = "Generates an image with white noise.";
  raylib_GenImageWhiteNoise.documentation = new vscode.MarkdownString(
    "**raylib.GenImageWhiteNoise()**\n\nGenerates an image with white noise.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GenImageWhiteNoise.insertText = new vscode.SnippetString(
    "raylib.GenImageWhiteNoise()"
  );
  completionItems.push(raylib_GenImageWhiteNoise);

  const raylib_GenImagePerlinNoise = new vscode.CompletionItem(
    "raylib.GenImagePerlinNoise",
    vscode.CompletionItemKind.Function
  );
  raylib_GenImagePerlinNoise.detail = "Generates an image with Perlin noise.";
  raylib_GenImagePerlinNoise.documentation = new vscode.MarkdownString(
    "**raylib.GenImagePerlinNoise()**\n\nGenerates an image with Perlin noise.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GenImagePerlinNoise.insertText = new vscode.SnippetString(
    "raylib.GenImagePerlinNoise()"
  );
  completionItems.push(raylib_GenImagePerlinNoise);

  const raylib_GenImageCellular = new vscode.CompletionItem(
    "raylib.GenImageCellular",
    vscode.CompletionItemKind.Function
  );
  raylib_GenImageCellular.detail =
    "Generates an image with a cellular pattern.";
  raylib_GenImageCellular.documentation = new vscode.MarkdownString(
    "**raylib.GenImageCellular()**\n\nGenerates an image with a cellular pattern.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GenImageCellular.insertText = new vscode.SnippetString(
    "raylib.GenImageCellular()"
  );
  completionItems.push(raylib_GenImageCellular);

  const raylib_GenImageText = new vscode.CompletionItem(
    "raylib.GenImageText",
    vscode.CompletionItemKind.Function
  );
  raylib_GenImageText.detail = "Generates an image with text.";
  raylib_GenImageText.documentation = new vscode.MarkdownString(
    "**raylib.GenImageText()**\n\nGenerates an image with text.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GenImageText.insertText = new vscode.SnippetString(
    "raylib.GenImageText()"
  );
  completionItems.push(raylib_GenImageText);

  const raylib_ImageFromImage = new vscode.CompletionItem(
    "raylib.ImageFromImage",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageFromImage.detail = "Extracts a sub-image from an existing image.";
  raylib_ImageFromImage.documentation = new vscode.MarkdownString(
    "**raylib.ImageFromImage()**\n\nExtracts a sub-image from an existing image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageFromImage.insertText = new vscode.SnippetString(
    "raylib.ImageFromImage()"
  );
  completionItems.push(raylib_ImageFromImage);

  const raylib_ImageFromChannel = new vscode.CompletionItem(
    "raylib.ImageFromChannel",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageFromChannel.detail =
    "Extracts a specific color channel from an image.";
  raylib_ImageFromChannel.documentation = new vscode.MarkdownString(
    "**raylib.ImageFromChannel()**\n\nExtracts a specific color channel from an image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageFromChannel.insertText = new vscode.SnippetString(
    "raylib.ImageFromChannel()"
  );
  completionItems.push(raylib_ImageFromChannel);

  const raylib_ImageText = new vscode.CompletionItem(
    "raylib.ImageText",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageText.detail = "Generates an image with a text string.";
  raylib_ImageText.documentation = new vscode.MarkdownString(
    "**raylib.ImageText()**\n\nGenerates an image with a text string.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageText.insertText = new vscode.SnippetString("raylib.ImageText()");
  completionItems.push(raylib_ImageText);

  const raylib_ImageTextEx = new vscode.CompletionItem(
    "raylib.ImageTextEx",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageTextEx.detail = "Generates an image with extended text options.";
  raylib_ImageTextEx.documentation = new vscode.MarkdownString(
    "**raylib.ImageTextEx()**\n\nGenerates an image with extended text options.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageTextEx.insertText = new vscode.SnippetString(
    "raylib.ImageTextEx()"
  );
  completionItems.push(raylib_ImageTextEx);

  const raylib_ImageFormat = new vscode.CompletionItem(
    "raylib.ImageFormat",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageFormat.detail = "Converts the format of an image.";
  raylib_ImageFormat.documentation = new vscode.MarkdownString(
    "**raylib.ImageFormat()**\n\nConverts the format of an image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageFormat.insertText = new vscode.SnippetString(
    "raylib.ImageFormat()"
  );
  completionItems.push(raylib_ImageFormat);

  const raylib_ImageToPOT = new vscode.CompletionItem(
    "raylib.ImageToPOT",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageToPOT.detail = "Converts an image to power-of-two dimensions.";
  raylib_ImageToPOT.documentation = new vscode.MarkdownString(
    "**raylib.ImageToPOT()**\n\nConverts an image to power-of-two dimensions.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageToPOT.insertText = new vscode.SnippetString(
    "raylib.ImageToPOT()"
  );
  completionItems.push(raylib_ImageToPOT);

  const raylib_ImageAlphaCrop = new vscode.CompletionItem(
    "raylib.ImageAlphaCrop",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageAlphaCrop.detail =
    "Crops the image by removing transparent pixels around it.";
  raylib_ImageAlphaCrop.documentation = new vscode.MarkdownString(
    "**raylib.ImageAlphaCrop()**\n\nCrops the image by removing transparent pixels around it.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageAlphaCrop.insertText = new vscode.SnippetString(
    "raylib.ImageAlphaCrop()"
  );
  completionItems.push(raylib_ImageAlphaCrop);

  const raylib_ImageAlphaClear = new vscode.CompletionItem(
    "raylib.ImageAlphaClear",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageAlphaClear.detail = "Clears alpha values from an image.";
  raylib_ImageAlphaClear.documentation = new vscode.MarkdownString(
    "**raylib.ImageAlphaClear()**\n\nClears alpha values from an image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageAlphaClear.insertText = new vscode.SnippetString(
    "raylib.ImageAlphaClear()"
  );
  completionItems.push(raylib_ImageAlphaClear);

  const raylib_ImageAlphaMask = new vscode.CompletionItem(
    "raylib.ImageAlphaMask",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageAlphaMask.detail = "Applies an alpha mask to an image.";
  raylib_ImageAlphaMask.documentation = new vscode.MarkdownString(
    "**raylib.ImageAlphaMask()**\n\nApplies an alpha mask to an image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageAlphaMask.insertText = new vscode.SnippetString(
    "raylib.ImageAlphaMask()"
  );
  completionItems.push(raylib_ImageAlphaMask);

  const raylib_ImageAlphaPremultiply = new vscode.CompletionItem(
    "raylib.ImageAlphaPremultiply",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageAlphaPremultiply.detail =
    "Premultiplies the alpha channel of an image.";
  raylib_ImageAlphaPremultiply.documentation = new vscode.MarkdownString(
    "**raylib.ImageAlphaPremultiply()**\n\nPremultiplies the alpha channel of an image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageAlphaPremultiply.insertText = new vscode.SnippetString(
    "raylib.ImageAlphaPremultiply()"
  );
  completionItems.push(raylib_ImageAlphaPremultiply);

  const raylib_ImageBlurGaussian = new vscode.CompletionItem(
    "raylib.ImageBlurGaussian",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageBlurGaussian.detail = "Applies a Gaussian blur to an image.";
  raylib_ImageBlurGaussian.documentation = new vscode.MarkdownString(
    "**raylib.ImageBlurGaussian()**\n\nApplies a Gaussian blur to an image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageBlurGaussian.insertText = new vscode.SnippetString(
    "raylib.ImageBlurGaussian()"
  );
  completionItems.push(raylib_ImageBlurGaussian);

  const raylib_ImageKernelConvolution = new vscode.CompletionItem(
    "raylib.ImageKernelConvolution",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageKernelConvolution.detail =
    "Applies a kernel convolution to an image.";
  raylib_ImageKernelConvolution.documentation = new vscode.MarkdownString(
    "**raylib.ImageKernelConvolution()**\n\nApplies a kernel convolution to an image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageKernelConvolution.insertText = new vscode.SnippetString(
    "raylib.ImageKernelConvolution()"
  );
  completionItems.push(raylib_ImageKernelConvolution);

  const raylib_ImageResizeNN = new vscode.CompletionItem(
    "raylib.ImageResizeNN",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageResizeNN.detail =
    "Resizes an image using nearest-neighbor scaling.";
  raylib_ImageResizeNN.documentation = new vscode.MarkdownString(
    "**raylib.ImageResizeNN()**\n\nResizes an image using nearest-neighbor scaling.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageResizeNN.insertText = new vscode.SnippetString(
    "raylib.ImageResizeNN()"
  );
  completionItems.push(raylib_ImageResizeNN);

  const raylib_ImageResizeCanvas = new vscode.CompletionItem(
    "raylib.ImageResizeCanvas",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageResizeCanvas.detail =
    "Resizes the image canvas while maintaining the image's position.";
  raylib_ImageResizeCanvas.documentation = new vscode.MarkdownString(
    "**raylib.ImageResizeCanvas()**\n\nResizes the image canvas while maintaining the image's position.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageResizeCanvas.insertText = new vscode.SnippetString(
    "raylib.ImageResizeCanvas()"
  );
  completionItems.push(raylib_ImageResizeCanvas);

  const raylib_ImageMipmaps = new vscode.CompletionItem(
    "raylib.ImageMipmaps",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageMipmaps.detail = "Generates mipmaps for the image.";
  raylib_ImageMipmaps.documentation = new vscode.MarkdownString(
    "**raylib.ImageMipmaps()**\n\nGenerates mipmaps for the image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageMipmaps.insertText = new vscode.SnippetString(
    "raylib.ImageMipmaps()"
  );
  completionItems.push(raylib_ImageMipmaps);

  raylib_ImageResizeCanvas.insertText = new vscode.SnippetString(
    "raylib.ImageResizeCanvas()"
  );
  completionItems.push(raylib_ImageResizeCanvas);

  const raylib_ImageDither = new vscode.CompletionItem(
    "raylib.ImageDither",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageDither.detail = "Applies a dithering effect to the image.";
  raylib_ImageDither.documentation = new vscode.MarkdownString(
    "**raylib.ImageDither()**\n\nApplies a dithering effect to the image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageDither.insertText = new vscode.SnippetString(
    "raylib.ImageDither()"
  );
  completionItems.push(raylib_ImageDither);

  const raylib_ImageRotate = new vscode.CompletionItem(
    "raylib.ImageRotate",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageRotate.detail = "Rotates the image by a specified angle.";
  raylib_ImageRotate.documentation = new vscode.MarkdownString(
    "**raylib.ImageRotate()**\n\nRotates the image by a specified angle.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageRotate.insertText = new vscode.SnippetString(
    "raylib.ImageRotate()"
  );
  completionItems.push(raylib_ImageRotate);

  const raylib_ImageRotateCW = new vscode.CompletionItem(
    "raylib.ImageRotateCW",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageRotateCW.detail = "Rotates the image 90 degrees clockwise.";
  raylib_ImageRotateCW.documentation = new vscode.MarkdownString(
    "**raylib.ImageRotateCW()**\n\nRotates the image 90 degrees clockwise.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageRotateCW.insertText = new vscode.SnippetString(
    "raylib.ImageRotateCW()"
  );
  completionItems.push(raylib_ImageRotateCW);

  const raylib_ImageRotateCCW = new vscode.CompletionItem(
    "raylib.ImageRotateCCW",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageRotateCCW.detail =
    "Rotates the image 90 degrees counterclockwise.";
  raylib_ImageRotateCCW.documentation = new vscode.MarkdownString(
    "**raylib.ImageRotateCCW()**\n\nRotates the image 90 degrees counterclockwise.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageRotateCCW.insertText = new vscode.SnippetString(
    "raylib.ImageRotateCCW()"
  );
  completionItems.push(raylib_ImageRotateCCW);

  const raylib_LoadImageColors = new vscode.CompletionItem(
    "raylib.LoadImageColors",
    vscode.CompletionItemKind.Function
  );
  raylib_LoadImageColors.detail = "Loads the color data from an image.";
  raylib_LoadImageColors.documentation = new vscode.MarkdownString(
    "**raylib.LoadImageColors()**\n\nLoads the color data from an image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_LoadImageColors.insertText = new vscode.SnippetString(
    "raylib.LoadImageColors()"
  );
  completionItems.push(raylib_LoadImageColors);

  const raylib_LoadImagePalette = new vscode.CompletionItem(
    "raylib.LoadImagePalette",
    vscode.CompletionItemKind.Function
  );
  raylib_LoadImagePalette.detail = "Loads the palette from an image.";
  raylib_LoadImagePalette.documentation = new vscode.MarkdownString(
    "**raylib.LoadImagePalette()**\n\nLoads the palette from an image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_LoadImagePalette.insertText = new vscode.SnippetString(
    "raylib.LoadImagePalette()"
  );
  completionItems.push(raylib_LoadImagePalette);

  const raylib_UnloadImageColors = new vscode.CompletionItem(
    "raylib.UnloadImageColors",
    vscode.CompletionItemKind.Function
  );
  raylib_UnloadImageColors.detail = "Unloads the color data from memory.";
  raylib_UnloadImageColors.documentation = new vscode.MarkdownString(
    "**raylib.UnloadImageColors()**\n\nUnloads the color data from memory.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_UnloadImageColors.insertText = new vscode.SnippetString(
    "raylib.UnloadImageColors()"
  );
  completionItems.push(raylib_UnloadImageColors);

  const raylib_UnloadImagePalette = new vscode.CompletionItem(
    "raylib.UnloadImagePalette",
    vscode.CompletionItemKind.Function
  );
  raylib_UnloadImagePalette.detail = "Unloads the image palette from memory.";
  raylib_UnloadImagePalette.documentation = new vscode.MarkdownString(
    "**raylib.UnloadImagePalette()**\n\nUnloads the image palette from memory.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_UnloadImagePalette.insertText = new vscode.SnippetString(
    "raylib.UnloadImagePalette()"
  );
  completionItems.push(raylib_UnloadImagePalette);

  const raylib_GetImageAlphaBorder = new vscode.CompletionItem(
    "raylib.GetImageAlphaBorder",
    vscode.CompletionItemKind.Function
  );
  raylib_GetImageAlphaBorder.detail =
    "Gets the alpha border rectangle of an image.";
  raylib_GetImageAlphaBorder.documentation = new vscode.MarkdownString(
    "**raylib.GetImageAlphaBorder()**\n\nGets the alpha border rectangle of an image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetImageAlphaBorder.insertText = new vscode.SnippetString(
    "raylib.GetImageAlphaBorder()"
  );
  completionItems.push(raylib_GetImageAlphaBorder);

  const raylib_GetImageColor = new vscode.CompletionItem(
    "raylib.GetImageColor",
    vscode.CompletionItemKind.Function
  );
  raylib_GetImageColor.detail =
    "Gets the color of a specific pixel in an image.";
  raylib_GetImageColor.documentation = new vscode.MarkdownString(
    "**raylib.GetImageColor()**\n\nGets the color of a specific pixel in an image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetImageColor.insertText = new vscode.SnippetString(
    "raylib.GetImageColor()"
  );
  completionItems.push(raylib_GetImageColor);

  const raylib_ImageClearBackground = new vscode.CompletionItem(
    "raylib.ImageClearBackground",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageClearBackground.detail =
    "Clears the background of an image with a specified color.";
  raylib_ImageClearBackground.documentation = new vscode.MarkdownString(
    "**raylib.ImageClearBackground()**\n\nClears the background of an image with a specified color.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageClearBackground.insertText = new vscode.SnippetString(
    "raylib.ImageClearBackground()"
  );
  completionItems.push(raylib_ImageClearBackground);

  const raylib_ImageDrawPixel = new vscode.CompletionItem(
    "raylib.ImageDrawPixel",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageDrawPixel.detail =
    "Draws a pixel at the specified position in an image.";
  raylib_ImageDrawPixel.documentation = new vscode.MarkdownString(
    "**raylib.ImageDrawPixel()**\n\nDraws a pixel at the specified position in an image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageDrawPixel.insertText = new vscode.SnippetString(
    "raylib.ImageDrawPixel()"
  );
  completionItems.push(raylib_ImageDrawPixel);

  const raylib_ImageDrawPixelV = new vscode.CompletionItem(
    "raylib.ImageDrawPixelV",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageDrawPixelV.detail =
    "Draws a pixel at the specified position (Vector2) in an image.";
  raylib_ImageDrawPixelV.documentation = new vscode.MarkdownString(
    "**raylib.ImageDrawPixelV()**\n\nDraws a pixel at the specified position (Vector2) in an image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageDrawPixelV.insertText = new vscode.SnippetString(
    "raylib.ImageDrawPixelV()"
  );
  completionItems.push(raylib_ImageDrawPixelV);

  const raylib_ImageDrawLine = new vscode.CompletionItem(
    "raylib.ImageDrawLine",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageDrawLine.detail = "Draws a line between two points in an image.";
  raylib_ImageDrawLine.documentation = new vscode.MarkdownString(
    "**raylib.ImageDrawLine()**\n\nDraws a line between two points in an image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageDrawLine.insertText = new vscode.SnippetString(
    "raylib.ImageDrawLine()"
  );
  completionItems.push(raylib_ImageDrawLine);

  const raylib_ImageDrawLineV = new vscode.CompletionItem(
    "raylib.ImageDrawLineV",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageDrawLineV.detail =
    "Draws a line between two points (Vector2) in an image.";
  raylib_ImageDrawLineV.documentation = new vscode.MarkdownString(
    "**raylib.ImageDrawLineV()**\n\nDraws a line between two points (Vector2) in an image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageDrawLineV.insertText = new vscode.SnippetString(
    "raylib.ImageDrawLineV()"
  );
  completionItems.push(raylib_ImageDrawLineV);

  const raylib_ImageDrawLineEx = new vscode.CompletionItem(
    "raylib.ImageDrawLineEx",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageDrawLineEx.detail =
    "Draws a line between two points with extended parameters in an image.";
  raylib_ImageDrawLineEx.documentation = new vscode.MarkdownString(
    "**raylib.ImageDrawLineEx()**\n\nDraws a line between two points with extended parameters in an image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageDrawLineEx.insertText = new vscode.SnippetString(
    "raylib.ImageDrawLineEx()"
  );
  completionItems.push(raylib_ImageDrawLineEx);

  const raylib_ImageDrawCircle = new vscode.CompletionItem(
    "raylib.ImageDrawCircle",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageDrawCircle.detail =
    "Draws a circle in an image at a specified position.";
  raylib_ImageDrawCircle.documentation = new vscode.MarkdownString(
    "**raylib.ImageDrawCircle()**\n\nDraws a circle in an image at a specified position.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageDrawCircle.insertText = new vscode.SnippetString(
    "raylib.ImageDrawCircle()"
  );
  completionItems.push(raylib_ImageDrawCircle);

  const raylib_ImageDrawCircleV = new vscode.CompletionItem(
    "raylib.ImageDrawCircleV",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageDrawCircleV.detail =
    "Draws a circle in an image at a specified position (Vector2).";
  raylib_ImageDrawCircleV.documentation = new vscode.MarkdownString(
    "**raylib.ImageDrawCircleV()**\n\nDraws a circle in an image at a specified position (Vector2).\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageDrawCircleV.insertText = new vscode.SnippetString(
    "raylib.ImageDrawCircleV()"
  );
  completionItems.push(raylib_ImageDrawCircleV);

  const raylib_ImageDrawCircleLines = new vscode.CompletionItem(
    "raylib.ImageDrawCircleLines",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageDrawCircleLines.detail =
    "Draws the outline of a circle in an image at a specified position.";
  raylib_ImageDrawCircleLines.documentation = new vscode.MarkdownString(
    "**raylib.ImageDrawCircleLines()**\n\nDraws the outline of a circle in an image at a specified position.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageDrawCircleLines.insertText = new vscode.SnippetString(
    "raylib.ImageDrawCircleLines()"
  );
  completionItems.push(raylib_ImageDrawCircleLines);

  const raylib_ImageDrawCircleLinesV = new vscode.CompletionItem(
    "raylib.ImageDrawCircleLinesV",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageDrawCircleLinesV.detail =
    "Draws the outline of a circle in an image at a specified position (Vector2).";
  raylib_ImageDrawCircleLinesV.documentation = new vscode.MarkdownString(
    "**raylib.ImageDrawCircleLinesV()**\n\nDraws the outline of a circle in an image at a specified position (Vector2).\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageDrawCircleLinesV.insertText = new vscode.SnippetString(
    "raylib.ImageDrawCircleLinesV()"
  );
  completionItems.push(raylib_ImageDrawCircleLinesV);

  const raylib_ImageDrawRectangle = new vscode.CompletionItem(
    "raylib.ImageDrawRectangle",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageDrawRectangle.detail =
    "Draws a rectangle in an image at a specified position.";
  raylib_ImageDrawRectangle.documentation = new vscode.MarkdownString(
    "**raylib.ImageDrawRectangle()**\n\nDraws a rectangle in an image at a specified position.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageDrawRectangle.insertText = new vscode.SnippetString(
    "raylib.ImageDrawRectangle()"
  );
  completionItems.push(raylib_ImageDrawRectangle);

  const raylib_ImageDrawRectangleV = new vscode.CompletionItem(
    "raylib.ImageDrawRectangleV",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageDrawRectangleV.detail =
    "Draws a rectangle in an image at a specified position (Vector2).";
  raylib_ImageDrawRectangleV.documentation = new vscode.MarkdownString(
    "**raylib.ImageDrawRectangleV()**\n\nDraws a rectangle in an image at a specified position (Vector2).\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageDrawRectangleV.insertText = new vscode.SnippetString(
    "raylib.ImageDrawRectangleV()"
  );
  completionItems.push(raylib_ImageDrawRectangleV);

  const raylib_ImageDrawRectangleRec = new vscode.CompletionItem(
    "raylib.ImageDrawRectangleRec",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageDrawRectangleRec.detail =
    "Draws a rectangle in an image using a Rectangle structure.";
  raylib_ImageDrawRectangleRec.documentation = new vscode.MarkdownString(
    "**raylib.ImageDrawRectangleRec()**\n\nDraws a rectangle in an image using a Rectangle structure.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageDrawRectangleRec.insertText = new vscode.SnippetString(
    "raylib.ImageDrawRectangleRec()"
  );
  completionItems.push(raylib_ImageDrawRectangleRec);

  const raylib_ImageDrawRectangleLines = new vscode.CompletionItem(
    "raylib.ImageDrawRectangleLines",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageDrawRectangleLines.detail =
    "Draws the outline of a rectangle in an image.";
  raylib_ImageDrawRectangleLines.documentation = new vscode.MarkdownString(
    "**raylib.ImageDrawRectangleLines()**\n\nDraws the outline of a rectangle in an image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageDrawRectangleLines.insertText = new vscode.SnippetString(
    "raylib.ImageDrawRectangleLines()"
  );
  completionItems.push(raylib_ImageDrawRectangleLines);

  const raylib_ImageDrawTriangle = new vscode.CompletionItem(
    "raylib.ImageDrawTriangle",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageDrawTriangle.detail =
    "Draws a triangle in an image using three points.";
  raylib_ImageDrawTriangle.documentation = new vscode.MarkdownString(
    "**raylib.ImageDrawTriangle()**\n\nDraws a triangle in an image using three points.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageDrawTriangle.insertText = new vscode.SnippetString(
    "raylib.ImageDrawTriangle()"
  );
  completionItems.push(raylib_ImageDrawTriangle);

  const raylib_ImageDrawTriangleEx = new vscode.CompletionItem(
    "raylib.ImageDrawTriangleEx",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageDrawTriangleEx.detail =
    "Draws a triangle in an image using extended parameters.";
  raylib_ImageDrawTriangleEx.documentation = new vscode.MarkdownString(
    "**raylib.ImageDrawTriangleEx()**\n\nDraws a triangle in an image using extended parameters.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageDrawTriangleEx.insertText = new vscode.SnippetString(
    "raylib.ImageDrawTriangleEx()"
  );
  completionItems.push(raylib_ImageDrawTriangleEx);

  const raylib_ImageDrawTriangleLines = new vscode.CompletionItem(
    "raylib.ImageDrawTriangleLines",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageDrawTriangleLines.detail =
    "Draws the outline of a triangle in an image.";
  raylib_ImageDrawTriangleLines.documentation = new vscode.MarkdownString(
    "**raylib.ImageDrawTriangleLines()**\n\nDraws the outline of a triangle in an image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageDrawTriangleLines.insertText = new vscode.SnippetString(
    "raylib.ImageDrawTriangleLines()"
  );
  completionItems.push(raylib_ImageDrawTriangleLines);

  const raylib_ImageDrawTriangleFan = new vscode.CompletionItem(
    "raylib.ImageDrawTriangleFan",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageDrawTriangleFan.detail = "Draws a triangle fan in an image.";
  raylib_ImageDrawTriangleFan.documentation = new vscode.MarkdownString(
    "**raylib.ImageDrawTriangleFan()**\n\nDraws a triangle fan in an image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageDrawTriangleFan.insertText = new vscode.SnippetString(
    "raylib.ImageDrawTriangleFan()"
  );
  completionItems.push(raylib_ImageDrawTriangleFan);

  const raylib_ImageDrawTriangleStrip = new vscode.CompletionItem(
    "raylib.ImageDrawTriangleStrip",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageDrawTriangleStrip.detail = "Draws a triangle strip in an image.";
  raylib_ImageDrawTriangleStrip.documentation = new vscode.MarkdownString(
    "**raylib.ImageDrawTriangleStrip()**\n\nDraws a triangle strip in an image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageDrawTriangleStrip.insertText = new vscode.SnippetString(
    "raylib.ImageDrawTriangleStrip()"
  );
  completionItems.push(raylib_ImageDrawTriangleStrip);

  const raylib_ImageDraw = new vscode.CompletionItem(
    "raylib.ImageDraw",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageDraw.detail = "Draws an image onto another image.";
  raylib_ImageDraw.documentation = new vscode.MarkdownString(
    "**raylib.ImageDraw()**\n\nDraws an image onto another image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageDraw.insertText = new vscode.SnippetString("raylib.ImageDraw()");
  completionItems.push(raylib_ImageDraw);

  const raylib_ImageDrawText = new vscode.CompletionItem(
    "raylib.ImageDrawText",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageDrawText.detail = "Draws text on an image.";
  raylib_ImageDrawText.documentation = new vscode.MarkdownString(
    "**raylib.ImageDrawText()**\n\nDraws text on an image.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageDrawText.insertText = new vscode.SnippetString(
    "raylib.ImageDrawText()"
  );
  completionItems.push(raylib_ImageDrawText);

  const raylib_ImageDrawTextEx = new vscode.CompletionItem(
    "raylib.ImageDrawTextEx",
    vscode.CompletionItemKind.Function
  );
  raylib_ImageDrawTextEx.detail =
    "Draws text on an image using extended parameters.";
  raylib_ImageDrawTextEx.documentation = new vscode.MarkdownString(
    "**raylib.ImageDrawTextEx()**\n\nDraws text on an image using extended parameters.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ImageDrawTextEx.insertText = new vscode.SnippetString(
    "raylib.ImageDrawTextEx()"
  );
  completionItems.push(raylib_ImageDrawTextEx);

  const raylib_LoadRenderTexture = new vscode.CompletionItem(
    "raylib.LoadRenderTexture",
    vscode.CompletionItemKind.Function
  );
  raylib_LoadRenderTexture.detail = "Loads a render texture.";
  raylib_LoadRenderTexture.documentation = new vscode.MarkdownString(
    "**raylib.LoadRenderTexture()**\n\nLoads a render texture.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_LoadRenderTexture.insertText = new vscode.SnippetString(
    "raylib.LoadRenderTexture()"
  );
  completionItems.push(raylib_LoadRenderTexture);

  const raylib_IsTextureValid = new vscode.CompletionItem(
    "raylib.IsTextureValid",
    vscode.CompletionItemKind.Function
  );
  raylib_IsTextureValid.detail = "Checks if a texture is valid.";
  raylib_IsTextureValid.documentation = new vscode.MarkdownString(
    "**raylib.IsTextureValid()**\n\nChecks if a texture is valid.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_IsTextureValid.insertText = new vscode.SnippetString(
    "raylib.IsTextureValid()"
  );
  completionItems.push(raylib_IsTextureValid);

  const raylib_IsRenderTextureValid = new vscode.CompletionItem(
    "raylib.IsRenderTextureValid",
    vscode.CompletionItemKind.Function
  );
  raylib_IsRenderTextureValid.detail = "Checks if a render texture is valid.";
  raylib_IsRenderTextureValid.documentation = new vscode.MarkdownString(
    "**raylib.IsRenderTextureValid()**\n\nChecks if a render texture is valid.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_IsRenderTextureValid.insertText = new vscode.SnippetString(
    "raylib.IsRenderTextureValid()"
  );
  completionItems.push(raylib_IsRenderTextureValid);

  const raylib_UnloadRenderTexture = new vscode.CompletionItem(
    "raylib.UnloadRenderTexture",
    vscode.CompletionItemKind.Function
  );
  raylib_UnloadRenderTexture.detail = "Unloads a render texture from memory.";
  raylib_UnloadRenderTexture.documentation = new vscode.MarkdownString(
    "**raylib.UnloadRenderTexture()**\n\nUnloads a render texture from memory.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_UnloadRenderTexture.insertText = new vscode.SnippetString(
    "raylib.UnloadRenderTexture()"
  );
  completionItems.push(raylib_UnloadRenderTexture);

  const raylib_SetTextureFilter = new vscode.CompletionItem(
    "raylib.SetTextureFilter",
    vscode.CompletionItemKind.Function
  );
  raylib_SetTextureFilter.detail = "Sets the filter mode for a texture.";
  raylib_SetTextureFilter.documentation = new vscode.MarkdownString(
    "**raylib.SetTextureFilter()**\n\nSets the filter mode for a texture.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_SetTextureFilter.insertText = new vscode.SnippetString(
    "raylib.SetTextureFilter()"
  );
  completionItems.push(raylib_SetTextureFilter);

  const raylib_SetTextureWrap = new vscode.CompletionItem(
    "raylib.SetTextureWrap",
    vscode.CompletionItemKind.Function
  );
  raylib_SetTextureWrap.detail = "Sets the wrap mode for a texture.";
  raylib_SetTextureWrap.documentation = new vscode.MarkdownString(
    "**raylib.SetTextureWrap()**\n\nSets the wrap mode for a texture.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_SetTextureWrap.insertText = new vscode.SnippetString(
    "raylib.SetTextureWrap()"
  );
  completionItems.push(raylib_SetTextureWrap);

  const raylib_DrawTexture = new vscode.CompletionItem(
    "raylib.DrawTexture",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawTexture.detail = "Draws a texture at a specified position.";
  raylib_DrawTexture.documentation = new vscode.MarkdownString(
    "**raylib.DrawTexture()**\n\nDraws a texture at a specified position.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawTexture.insertText = new vscode.SnippetString(
    "raylib.DrawTexture()"
  );
  completionItems.push(raylib_DrawTexture);

  const raylib_DrawTextureV = new vscode.CompletionItem(
    "raylib.DrawTextureV",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawTextureV.detail =
    "Draws a texture at a specified position using a Vector2.";
  raylib_DrawTextureV.documentation = new vscode.MarkdownString(
    "**raylib.DrawTextureV()**\n\nDraws a texture at a specified position using a Vector2.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawTextureV.insertText = new vscode.SnippetString(
    "raylib.DrawTextureV()"
  );
  completionItems.push(raylib_DrawTextureV);

  const raylib_DrawTextureEx = new vscode.CompletionItem(
    "raylib.DrawTextureEx",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawTextureEx.detail = "Draws a texture with extended parameters.";
  raylib_DrawTextureEx.documentation = new vscode.MarkdownString(
    "**raylib.DrawTextureEx()**\n\nDraws a texture with extended parameters.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawTextureEx.insertText = new vscode.SnippetString(
    "raylib.DrawTextureEx()"
  );
  completionItems.push(raylib_DrawTextureEx);

  const raylib_DrawTextureRec = new vscode.CompletionItem(
    "raylib.DrawTextureRec",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawTextureRec.detail = "Draws a part of a texture.";
  raylib_DrawTextureRec.documentation = new vscode.MarkdownString(
    "**raylib.DrawTextureRec()**\n\nDraws a part of a texture.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawTextureRec.insertText = new vscode.SnippetString(
    "raylib.DrawTextureRec()"
  );
  completionItems.push(raylib_DrawTextureRec);

  const raylib_DrawTexturePro = new vscode.CompletionItem(
    "raylib.DrawTexturePro",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawTexturePro.detail = "Draws a texture with extended parameters.";
  raylib_DrawTexturePro.documentation = new vscode.MarkdownString(
    "**raylib.DrawTexturePro()**\n\nDraws a texture with extended parameters.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawTexturePro.insertText = new vscode.SnippetString(
    "raylib.DrawTexturePro()"
  );
  completionItems.push(raylib_DrawTexturePro);

  const raylib_DrawTextureNPatch = new vscode.CompletionItem(
    "raylib.DrawTextureNPatch",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawTextureNPatch.detail =
    "Draws a texture using N-patch information.";
  raylib_DrawTextureNPatch.documentation = new vscode.MarkdownString(
    "**raylib.DrawTextureNPatch()**\n\nDraws a texture using N-patch information.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawTextureNPatch.insertText = new vscode.SnippetString(
    "raylib.DrawTextureNPatch()"
  );
  completionItems.push(raylib_DrawTextureNPatch);

  const raylib_ColorIsEqual = new vscode.CompletionItem(
    "raylib.ColorIsEqual",
    vscode.CompletionItemKind.Function
  );
  raylib_ColorIsEqual.detail = "Checks if two colors are equal.";
  raylib_ColorIsEqual.documentation = new vscode.MarkdownString(
    "**raylib.ColorIsEqual()**\n\nChecks if two colors are equal.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ColorIsEqual.insertText = new vscode.SnippetString(
    "raylib.ColorIsEqual()"
  );
  completionItems.push(raylib_ColorIsEqual);

  const raylib_Fade = new vscode.CompletionItem(
    "raylib.Fade",
    vscode.CompletionItemKind.Function
  );
  raylib_Fade.detail = "Applies fade effect to a color.";
  raylib_Fade.documentation = new vscode.MarkdownString(
    "**raylib.Fade()**\n\nApplies fade effect to a color.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_Fade.insertText = new vscode.SnippetString("raylib.Fade()");
  completionItems.push(raylib_Fade);

  const raylib_ColorToInt = new vscode.CompletionItem(
    "raylib.ColorToInt",
    vscode.CompletionItemKind.Function
  );
  raylib_ColorToInt.detail = "Converts a Color to an integer representation.";
  raylib_ColorToInt.documentation = new vscode.MarkdownString(
    "**raylib.ColorToInt()**\n\nConverts a Color to an integer representation.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ColorToInt.insertText = new vscode.SnippetString(
    "raylib.ColorToInt()"
  );
  completionItems.push(raylib_ColorToInt);

  const raylib_ColorNormalize = new vscode.CompletionItem(
    "raylib.ColorNormalize",
    vscode.CompletionItemKind.Function
  );
  raylib_ColorNormalize.detail = "Normalizes a Color to a Vector4.";
  raylib_ColorNormalize.documentation = new vscode.MarkdownString(
    "**raylib.ColorNormalize()**\n\nNormalizes a Color to a Vector4.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ColorNormalize.insertText = new vscode.SnippetString(
    "raylib.ColorNormalize()"
  );
  completionItems.push(raylib_ColorNormalize);

  const raylib_ColorFromNormalized = new vscode.CompletionItem(
    "raylib.ColorFromNormalized",
    vscode.CompletionItemKind.Function
  );
  raylib_ColorFromNormalized.detail =
    "Converts a normalized Vector4 to a Color.";
  raylib_ColorFromNormalized.documentation = new vscode.MarkdownString(
    "**raylib.ColorFromNormalized()**\n\nConverts a normalized Vector4 to a Color.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ColorFromNormalized.insertText = new vscode.SnippetString(
    "raylib.ColorFromNormalized()"
  );
  completionItems.push(raylib_ColorFromNormalized);

  const raylib_ColorToHSV = new vscode.CompletionItem(
    "raylib.ColorToHSV",
    vscode.CompletionItemKind.Function
  );
  raylib_ColorToHSV.detail = "Converts a Color to HSV.";
  raylib_ColorToHSV.documentation = new vscode.MarkdownString(
    "**raylib.ColorToHSV()**\n\nConverts a Color to HSV.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ColorToHSV.insertText = new vscode.SnippetString(
    "raylib.ColorToHSV()"
  );
  completionItems.push(raylib_ColorToHSV);

  const raylib_ColorFromHSV = new vscode.CompletionItem(
    "raylib.ColorFromHSV",
    vscode.CompletionItemKind.Function
  );
  raylib_ColorFromHSV.detail =
    "Converts HSV (Hue, Saturation, Value) to a Color.";
  raylib_ColorFromHSV.documentation = new vscode.MarkdownString(
    "**raylib.ColorFromHSV()**\n\nConverts HSV (Hue, Saturation, Value) to a Color.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ColorFromHSV.insertText = new vscode.SnippetString(
    "raylib.ColorFromHSV()"
  );
  completionItems.push(raylib_ColorFromHSV);

  const raylib_ColorTint = new vscode.CompletionItem(
    "raylib.ColorTint",
    vscode.CompletionItemKind.Function
  );
  raylib_ColorTint.detail = "Tints a Color with another Color.";
  raylib_ColorTint.documentation = new vscode.MarkdownString(
    "**raylib.ColorTint()**\n\nTints a Color with another Color.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ColorTint.insertText = new vscode.SnippetString("raylib.ColorTint()");
  completionItems.push(raylib_ColorTint);

  const raylib_ColorBrightness = new vscode.CompletionItem(
    "raylib.ColorBrightness",
    vscode.CompletionItemKind.Function
  );
  raylib_ColorBrightness.detail = "Adjusts the brightness of a Color.";
  raylib_ColorBrightness.documentation = new vscode.MarkdownString(
    "**raylib.ColorBrightness()**\n\nAdjusts the brightness of a Color.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ColorBrightness.insertText = new vscode.SnippetString(
    "raylib.ColorBrightness()"
  );
  completionItems.push(raylib_ColorBrightness);

  const raylib_ColorContrast = new vscode.CompletionItem(
    "raylib.ColorContrast",
    vscode.CompletionItemKind.Function
  );
  raylib_ColorContrast.detail = "Adjusts the contrast of a Color.";
  raylib_ColorContrast.documentation = new vscode.MarkdownString(
    "**raylib.ColorContrast()**\n\nAdjusts the contrast of a Color.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ColorContrast.insertText = new vscode.SnippetString(
    "raylib.ColorContrast()"
  );
  completionItems.push(raylib_ColorContrast);

  const raylib_ColorAlpha = new vscode.CompletionItem(
    "raylib.ColorAlpha",
    vscode.CompletionItemKind.Function
  );
  raylib_ColorAlpha.detail = "Adjusts the alpha (transparency) of a Color.";
  raylib_ColorAlpha.documentation = new vscode.MarkdownString(
    "**raylib.ColorAlpha()**\n\nAdjusts the alpha (transparency) of a Color.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ColorAlpha.insertText = new vscode.SnippetString(
    "raylib.ColorAlpha()"
  );
  completionItems.push(raylib_ColorAlpha);

  const raylib_ColorAlphaBlend = new vscode.CompletionItem(
    "raylib.ColorAlphaBlend",
    vscode.CompletionItemKind.Function
  );
  raylib_ColorAlphaBlend.detail = "Blends two Colors based on alpha blending.";
  raylib_ColorAlphaBlend.documentation = new vscode.MarkdownString(
    "**raylib.ColorAlphaBlend()**\n\nBlends two Colors based on alpha blending.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ColorAlphaBlend.insertText = new vscode.SnippetString(
    "raylib.ColorAlphaBlend()"
  );
  completionItems.push(raylib_ColorAlphaBlend);

  const raylib_ColorLerp = new vscode.CompletionItem(
    "raylib.ColorLerp",
    vscode.CompletionItemKind.Function
  );
  raylib_ColorLerp.detail = "Linearly interpolates between two Colors.";
  raylib_ColorLerp.documentation = new vscode.MarkdownString(
    "**raylib.ColorLerp()**\n\nLinearly interpolates between two Colors.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ColorLerp.insertText = new vscode.SnippetString("raylib.ColorLerp()");
  completionItems.push(raylib_ColorLerp);

  const raylib_GetColor = new vscode.CompletionItem(
    "raylib.GetColor",
    vscode.CompletionItemKind.Function
  );
  raylib_GetColor.detail = "Gets the integer representation of a Color.";
  raylib_GetColor.documentation = new vscode.MarkdownString(
    "**raylib.GetColor()**\n\nGets the integer representation of a Color.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetColor.insertText = new vscode.SnippetString("raylib.GetColor()");
  completionItems.push(raylib_GetColor);

  const raylib_GetPixelColor = new vscode.CompletionItem(
    "raylib.GetPixelColor",
    vscode.CompletionItemKind.Function
  );
  raylib_GetPixelColor.detail =
    "Gets the color of a pixel from the screen at a given position.";
  raylib_GetPixelColor.documentation = new vscode.MarkdownString(
    "**raylib.GetPixelColor()**\n\nGets the color of a pixel from the screen at a given position.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetPixelColor.insertText = new vscode.SnippetString(
    "raylib.GetPixelColor()"
  );
  completionItems.push(raylib_GetPixelColor);

  const raylib_SetPixelColor = new vscode.CompletionItem(
    "raylib.SetPixelColor",
    vscode.CompletionItemKind.Function
  );
  raylib_SetPixelColor.detail =
    "Sets the color of a specific pixel on the screen or render target.";
  raylib_SetPixelColor.documentation = new vscode.MarkdownString(
    "**raylib.SetPixelColor()**\n\nSets the color of a specific pixel on the screen or render target.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_SetPixelColor.insertText = new vscode.SnippetString(
    "raylib.SetPixelColor()"
  );
  completionItems.push(raylib_SetPixelColor);

  const raylib_GetPixelDataSize = new vscode.CompletionItem(
    "raylib.GetPixelDataSize",
    vscode.CompletionItemKind.Function
  );
  raylib_GetPixelDataSize.detail =
    "Gets the size of the pixel data in memory for an image or texture.";
  raylib_GetPixelDataSize.documentation = new vscode.MarkdownString(
    "**raylib.GetPixelDataSize()**\n\nGets the size of the pixel data in memory for an image or texture.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetPixelDataSize.insertText = new vscode.SnippetString(
    "raylib.GetPixelDataSize()"
  );
  completionItems.push(raylib_GetPixelDataSize);

  const raylib_LoadModel = new vscode.CompletionItem(
    "raylib.LoadModel",
    vscode.CompletionItemKind.Function
  );
  raylib_LoadModel.detail = "Loads a model from a file.";
  raylib_LoadModel.documentation = new vscode.MarkdownString(
    "**raylib.LoadModel()**\n\nLoads a model from a file.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_LoadModel.insertText = new vscode.SnippetString("raylib.LoadModel()");
  completionItems.push(raylib_LoadModel);

  const raylib_DrawModel = new vscode.CompletionItem(
    "raylib.DrawModel",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawModel.detail = "Draws a model with default parameters.";
  raylib_DrawModel.documentation = new vscode.MarkdownString(
    "**raylib.DrawModel()**\n\nDraws a model with default parameters.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawModel.insertText = new vscode.SnippetString("raylib.DrawModel()");
  completionItems.push(raylib_DrawModel);

  const raylib_DrawModelEx = new vscode.CompletionItem(
    "raylib.DrawModelEx",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawModelEx.detail = "Draws a model with extended parameters.";
  raylib_DrawModelEx.documentation = new vscode.MarkdownString(
    "**raylib.DrawModelEx()**\n\nDraws a model with extended parameters.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawModelEx.insertText = new vscode.SnippetString(
    "raylib.DrawModelEx()"
  );
  completionItems.push(raylib_DrawModelEx);

  const raylib_UnloadModel = new vscode.CompletionItem(
    "raylib.UnloadModel",
    vscode.CompletionItemKind.Function
  );
  raylib_UnloadModel.detail = "Unloads a model from memory.";
  raylib_UnloadModel.documentation = new vscode.MarkdownString(
    "**raylib.UnloadModel()**\n\nUnloads a model from memory.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_UnloadModel.insertText = new vscode.SnippetString(
    "raylib.UnloadModel()"
  );
  completionItems.push(raylib_UnloadModel);

  const raylib_UpdateModelAnimation = new vscode.CompletionItem(
    "raylib.UpdateModelAnimation",
    vscode.CompletionItemKind.Function
  );
  raylib_UpdateModelAnimation.detail = "Updates a model animation.";
  raylib_UpdateModelAnimation.documentation = new vscode.MarkdownString(
    "**raylib.UpdateModelAnimation()**\n\nUpdates a model animation.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_UpdateModelAnimation.insertText = new vscode.SnippetString(
    "raylib.UpdateModelAnimation()"
  );
  completionItems.push(raylib_UpdateModelAnimation);

  const raylib_DrawMesh = new vscode.CompletionItem(
    "raylib.DrawMesh",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawMesh.detail = "Draws a mesh with default parameters.";
  raylib_DrawMesh.documentation = new vscode.MarkdownString(
    "**raylib.DrawMesh()**\n\nDraws a mesh with default parameters.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawMesh.insertText = new vscode.SnippetString("raylib.DrawMesh()");
  completionItems.push(raylib_DrawMesh);

  const raylib_UnloadMesh = new vscode.CompletionItem(
    "raylib.UnloadMesh",
    vscode.CompletionItemKind.Function
  );
  raylib_UnloadMesh.detail = "Unloads a mesh from memory.";
  raylib_UnloadMesh.documentation = new vscode.MarkdownString(
    "**raylib.UnloadMesh()**\n\nUnloads a mesh from memory.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_UnloadMesh.insertText = new vscode.SnippetString(
    "raylib.UnloadMesh()"
  );
  completionItems.push(raylib_UnloadMesh);

  const raylib_GenMeshCube = new vscode.CompletionItem(
    "raylib.GenMeshCube",
    vscode.CompletionItemKind.Function
  );
  raylib_GenMeshCube.detail = "Generates a cube mesh.";
  raylib_GenMeshCube.documentation = new vscode.MarkdownString(
    "**raylib.GenMeshCube()**\n\nGenerates a cube mesh.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GenMeshCube.insertText = new vscode.SnippetString(
    "raylib.GenMeshCube()"
  );
  completionItems.push(raylib_GenMeshCube);

  const raylib_GenMeshSphere = new vscode.CompletionItem(
    "raylib.GenMeshSphere",
    vscode.CompletionItemKind.Function
  );
  raylib_GenMeshSphere.detail = "Generates a sphere mesh.";
  raylib_GenMeshSphere.documentation = new vscode.MarkdownString(
    "**raylib.GenMeshSphere()**\n\nGenerates a sphere mesh.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GenMeshSphere.insertText = new vscode.SnippetString(
    "raylib.GenMeshSphere()"
  );
  completionItems.push(raylib_GenMeshSphere);

  const raylib_GenMeshPlane = new vscode.CompletionItem(
    "raylib.GenMeshPlane",
    vscode.CompletionItemKind.Function
  );
  raylib_GenMeshPlane.detail = "Generates a plane mesh.";
  raylib_GenMeshPlane.documentation = new vscode.MarkdownString(
    "**raylib.GenMeshPlane()**\n\nGenerates a plane mesh.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GenMeshPlane.insertText = new vscode.SnippetString(
    "raylib.GenMeshPlane()"
  );
  completionItems.push(raylib_GenMeshPlane);

  const raylib_DrawLine3D = new vscode.CompletionItem(
    "raylib.DrawLine3D",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawLine3D.detail = "Draws a 3D line with specified parameters.";
  raylib_DrawLine3D.documentation = new vscode.MarkdownString(
    "**raylib.DrawLine3D()**\n\nDraws a 3D line with specified parameters.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawLine3D.insertText = new vscode.SnippetString(
    "raylib.DrawLine3D()"
  );
  completionItems.push(raylib_DrawLine3D);

  const raylib_DrawPoint3D = new vscode.CompletionItem(
    "raylib.DrawPoint3D",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawPoint3D.detail = "Draws a 3D point with specified parameters.";
  raylib_DrawPoint3D.documentation = new vscode.MarkdownString(
    "**raylib.DrawPoint3D()**\n\nDraws a 3D point with specified parameters.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawPoint3D.insertText = new vscode.SnippetString(
    "raylib.DrawPoint3D()"
  );
  completionItems.push(raylib_DrawPoint3D);

  const raylib_DrawCircle3D = new vscode.CompletionItem(
    "raylib.DrawCircle3D",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawCircle3D.detail = "Draws a 3D circle with specified parameters.";
  raylib_DrawCircle3D.documentation = new vscode.MarkdownString(
    "**raylib.DrawCircle3D()**\n\nDraws a 3D circle with specified parameters.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawCircle3D.insertText = new vscode.SnippetString(
    "raylib.DrawCircle3D()"
  );
  completionItems.push(raylib_DrawCircle3D);

  const raylib_DrawTriangle3D = new vscode.CompletionItem(
    "raylib.DrawTriangle3D",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawTriangle3D.detail =
    "Draws a 3D triangle with specified parameters.";
  raylib_DrawTriangle3D.documentation = new vscode.MarkdownString(
    "**raylib.DrawTriangle3D()**\n\nDraws a 3D triangle with specified parameters.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawTriangle3D.insertText = new vscode.SnippetString(
    "raylib.DrawTriangle3D()"
  );
  completionItems.push(raylib_DrawTriangle3D);

  const raylib_DrawTriangleStrip3D = new vscode.CompletionItem(
    "raylib.DrawTriangleStrip3D",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawTriangleStrip3D.detail =
    "Draws a 3D triangle strip with specified parameters.";
  raylib_DrawTriangleStrip3D.documentation = new vscode.MarkdownString(
    "**raylib.DrawTriangleStrip3D()**\n\nDraws a 3D triangle strip with specified parameters.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawTriangleStrip3D.insertText = new vscode.SnippetString(
    "raylib.DrawTriangleStrip3D()"
  );
  completionItems.push(raylib_DrawTriangleStrip3D);

  const raylib_DrawCube = new vscode.CompletionItem(
    "raylib.DrawCube",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawCube.detail = "Draws a 3D cube with specified parameters.";
  raylib_DrawCube.documentation = new vscode.MarkdownString(
    "**raylib.DrawCube()**\n\nDraws a 3D cube with specified parameters.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawCube.insertText = new vscode.SnippetString("raylib.DrawCube()");
  completionItems.push(raylib_DrawCube);

  const raylib_DrawCubeV = new vscode.CompletionItem(
    "raylib.DrawCubeV",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawCubeV.detail =
    "Draws a 3D cube with specified parameters using a Vector3.";
  raylib_DrawCubeV.documentation = new vscode.MarkdownString(
    "**raylib.DrawCubeV()**\n\nDraws a 3D cube with specified parameters using a Vector3.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawCubeV.insertText = new vscode.SnippetString("raylib.DrawCubeV()");
  completionItems.push(raylib_DrawCubeV);

  const raylib_DrawCubeWires = new vscode.CompletionItem(
    "raylib.DrawCubeWires",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawCubeWires.detail =
    "Draws the wireframe of a cube with specified parameters.";
  raylib_DrawCubeWires.documentation = new vscode.MarkdownString(
    "**raylib.DrawCubeWires()**\n\nDraws the wireframe of a cube with specified parameters.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawCubeWires.insertText = new vscode.SnippetString(
    "raylib.DrawCubeWires()"
  );
  completionItems.push(raylib_DrawCubeWires);

  const raylib_DrawCubeWiresV = new vscode.CompletionItem(
    "raylib.DrawCubeWiresV",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawCubeWiresV.detail =
    "Draws the wireframe of a cube with specified parameters using a Vector3.";
  raylib_DrawCubeWiresV.documentation = new vscode.MarkdownString(
    "**raylib.DrawCubeWiresV()**\n\nDraws the wireframe of a cube with specified parameters using a Vector3.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawCubeWiresV.insertText = new vscode.SnippetString(
    "raylib.DrawCubeWiresV()"
  );
  completionItems.push(raylib_DrawCubeWiresV);

  const raylib_DrawSphereWires = new vscode.CompletionItem(
    "raylib.DrawSphereWires",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawSphereWires.detail =
    "Draws the wireframe of a sphere with specified parameters.";
  raylib_DrawSphereWires.documentation = new vscode.MarkdownString(
    "**raylib.DrawSphereWires()**\n\nDraws the wireframe of a sphere with specified parameters.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawSphereWires.insertText = new vscode.SnippetString(
    "raylib.DrawSphereWires()"
  );
  completionItems.push(raylib_DrawSphereWires);

  const raylib_DrawCylinder = new vscode.CompletionItem(
    "raylib.DrawCylinder",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawCylinder.detail = "Draws a cylinder with specified parameters.";
  raylib_DrawCylinder.documentation = new vscode.MarkdownString(
    "**raylib.DrawCylinder()**\n\nDraws a cylinder with specified parameters.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawCylinder.insertText = new vscode.SnippetString(
    "raylib.DrawCylinder()"
  );
  completionItems.push(raylib_DrawCylinder);

  const raylib_DrawCylinderEx = new vscode.CompletionItem(
    "raylib.DrawCylinderEx",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawCylinderEx.detail = "Draws a cylinder with extended parameters.";
  raylib_DrawCylinderEx.documentation = new vscode.MarkdownString(
    "**raylib.DrawCylinderEx()**\n\nDraws a cylinder with extended parameters.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawCylinderEx.insertText = new vscode.SnippetString(
    "raylib.DrawCylinderEx()"
  );
  completionItems.push(raylib_DrawCylinderEx);

  const raylib_DrawCylinderWires = new vscode.CompletionItem(
    "raylib.DrawCylinderWires",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawCylinderWires.detail =
    "Draws the wireframe of a cylinder with specified parameters.";
  raylib_DrawCylinderWires.documentation = new vscode.MarkdownString(
    "**raylib.DrawCylinderWires()**\n\nDraws the wireframe of a cylinder with specified parameters.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawCylinderWires.insertText = new vscode.SnippetString(
    "raylib.DrawCylinderWires()"
  );
  completionItems.push(raylib_DrawCylinderWires);

  const raylib_DrawCylinderWiresEx = new vscode.CompletionItem(
    "raylib.DrawCylinderWiresEx",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawCylinderWiresEx.detail =
    "Draws the wireframe of a cylinder with extended parameters.";
  raylib_DrawCylinderWiresEx.documentation = new vscode.MarkdownString(
    "**raylib.DrawCylinderWiresEx()**\n\nDraws the wireframe of a cylinder with extended parameters.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawCylinderWiresEx.insertText = new vscode.SnippetString(
    "raylib.DrawCylinderWiresEx()"
  );
  completionItems.push(raylib_DrawCylinderWiresEx);

  const raylib_DrawCapsule = new vscode.CompletionItem(
    "raylib.DrawCapsule",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawCapsule.detail = "Draws a capsule with specified parameters.";
  raylib_DrawCapsule.documentation = new vscode.MarkdownString(
    "**raylib.DrawCapsule()**\n\nDraws a capsule with specified parameters.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawCapsule.insertText = new vscode.SnippetString(
    "raylib.DrawCapsule()"
  );
  completionItems.push(raylib_DrawCapsule);

  const raylib_DrawCapsuleWires = new vscode.CompletionItem(
    "raylib.DrawCapsuleWires",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawCapsuleWires.detail =
    "Draws the wireframe of a capsule with specified parameters.";
  raylib_DrawCapsuleWires.documentation = new vscode.MarkdownString(
    "**raylib.DrawCapsuleWires()**\n\nDraws the wireframe of a capsule with specified parameters.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawCapsuleWires.insertText = new vscode.SnippetString(
    "raylib.DrawCapsuleWires()"
  );
  completionItems.push(raylib_DrawCapsuleWires);

  const raylib_DrawPlane = new vscode.CompletionItem(
    "raylib.DrawPlane",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawPlane.detail = "Draws a plane with specified parameters.";
  raylib_DrawPlane.documentation = new vscode.MarkdownString(
    "**raylib.DrawPlane()**\n\nDraws a plane with specified parameters.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawPlane.insertText = new vscode.SnippetString("raylib.DrawPlane()");
  completionItems.push(raylib_DrawPlane);

  const raylib_DrawRay = new vscode.CompletionItem(
    "raylib.DrawRay",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawRay.detail = "Draws a ray with specified parameters.";
  raylib_DrawRay.documentation = new vscode.MarkdownString(
    "**raylib.DrawRay()**\n\nDraws a ray with specified parameters.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawRay.insertText = new vscode.SnippetString("raylib.DrawRay()");
  completionItems.push(raylib_DrawRay);

  const raylib_DrawGrid = new vscode.CompletionItem(
    "raylib.DrawGrid",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawGrid.detail = "Draws a grid with specified parameters.";
  raylib_DrawGrid.documentation = new vscode.MarkdownString(
    "**raylib.DrawGrid()**\n\nDraws a grid with specified parameters.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawGrid.insertText = new vscode.SnippetString("raylib.DrawGrid()");
  completionItems.push(raylib_DrawGrid);

  const raylib_LoadModelFromMesh = new vscode.CompletionItem(
    "raylib.LoadModelFromMesh",
    vscode.CompletionItemKind.Function
  );
  raylib_LoadModelFromMesh.detail = "Loads a model from a mesh.";
  raylib_LoadModelFromMesh.documentation = new vscode.MarkdownString(
    "**raylib.LoadModelFromMesh()**\n\nLoads a model from a mesh.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_LoadModelFromMesh.insertText = new vscode.SnippetString(
    "raylib.LoadModelFromMesh()"
  );
  completionItems.push(raylib_LoadModelFromMesh);

  const raylib_IsModelValid = new vscode.CompletionItem(
    "raylib.IsModelValid",
    vscode.CompletionItemKind.Function
  );
  raylib_IsModelValid.detail = "Checks if a model is valid.";
  raylib_IsModelValid.documentation = new vscode.MarkdownString(
    "**raylib.IsModelValid()**\n\nChecks if a model is valid.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_IsModelValid.insertText = new vscode.SnippetString(
    "raylib.IsModelValid()"
  );
  completionItems.push(raylib_IsModelValid);

  const raylib_GetModelBoundingBox = new vscode.CompletionItem(
    "raylib.GetModelBoundingBox",
    vscode.CompletionItemKind.Function
  );
  raylib_GetModelBoundingBox.detail = "Gets the bounding box of a model.";
  raylib_GetModelBoundingBox.documentation = new vscode.MarkdownString(
    "**raylib.GetModelBoundingBox()**\n\nGets the bounding box of a model.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetModelBoundingBox.insertText = new vscode.SnippetString(
    "raylib.GetModelBoundingBox()"
  );
  completionItems.push(raylib_GetModelBoundingBox);

  const raylib_DrawBoundingBox = new vscode.CompletionItem(
    "raylib.DrawBoundingBox",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawBoundingBox.detail =
    "Draws a bounding box with specified parameters.";
  raylib_DrawBoundingBox.documentation = new vscode.MarkdownString(
    "**raylib.DrawBoundingBox()**\n\nDraws a bounding box with specified parameters.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawBoundingBox.insertText = new vscode.SnippetString(
    "raylib.DrawBoundingBox()"
  );
  completionItems.push(raylib_DrawBoundingBox);

  const raylib_DrawBillboard = new vscode.CompletionItem(
    "raylib.DrawBillboard",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawBillboard.detail = "Draws a billboard with specified parameters.";
  raylib_DrawBillboard.documentation = new vscode.MarkdownString(
    "**raylib.DrawBillboard()**\n\nDraws a billboard with specified parameters.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawBillboard.insertText = new vscode.SnippetString(
    "raylib.DrawBillboard()"
  );
  completionItems.push(raylib_DrawBillboard);

  const raylib_DrawBillboardRec = new vscode.CompletionItem(
    "raylib.DrawBillboardRec",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawBillboardRec.detail =
    "Draws a billboard with a specified rectangle.";
  raylib_DrawBillboardRec.documentation = new vscode.MarkdownString(
    "**raylib.DrawBillboardRec()**\n\nDraws a billboard with a specified rectangle.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawBillboardRec.insertText = new vscode.SnippetString(
    "raylib.DrawBillboardRec()"
  );
  completionItems.push(raylib_DrawBillboardRec);

  const raylib_DrawBillboardPro = new vscode.CompletionItem(
    "raylib.DrawBillboardPro",
    vscode.CompletionItemKind.Function
  );
  raylib_DrawBillboardPro.detail =
    "Draws a billboard with extended parameters.";
  raylib_DrawBillboardPro.documentation = new vscode.MarkdownString(
    "**raylib.DrawBillboardPro()**\n\nDraws a billboard with extended parameters.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_DrawBillboardPro.insertText = new vscode.SnippetString(
    "raylib.DrawBillboardPro()"
  );
  completionItems.push(raylib_DrawBillboardPro);

  const raylib_UploadMesh = new vscode.CompletionItem(
    "raylib.UploadMesh",
    vscode.CompletionItemKind.Function
  );
  raylib_UploadMesh.detail = "Uploads a mesh to the GPU.";
  raylib_UploadMesh.documentation = new vscode.MarkdownString(
    "**raylib.UploadMesh()**\n\nUploads a mesh to the GPU.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_UploadMesh.insertText = new vscode.SnippetString(
    "raylib.UploadMesh()"
  );
  completionItems.push(raylib_UploadMesh);

  const raylib_UpdateMeshBuffer = new vscode.CompletionItem(
    "raylib.UpdateMeshBuffer",
    vscode.CompletionItemKind.Function
  );
  raylib_UpdateMeshBuffer.detail = "Updates a mesh buffer with new data.";
  raylib_UpdateMeshBuffer.documentation = new vscode.MarkdownString(
    "**raylib.UpdateMeshBuffer()**\n\nUpdates a mesh buffer with new data.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_UpdateMeshBuffer.insertText = new vscode.SnippetString(
    "raylib.UpdateMeshBuffer()"
  );
  completionItems.push(raylib_UpdateMeshBuffer);

  const raylib_GetMeshBoundingBox = new vscode.CompletionItem(
    "raylib.GetMeshBoundingBox",
    vscode.CompletionItemKind.Function
  );
  raylib_GetMeshBoundingBox.detail = "Gets the bounding box of a mesh.";
  raylib_GetMeshBoundingBox.documentation = new vscode.MarkdownString(
    "**raylib.GetMeshBoundingBox()**\n\nGets the bounding box of a mesh.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetMeshBoundingBox.insertText = new vscode.SnippetString(
    "raylib.GetMeshBoundingBox()"
  );
  completionItems.push(raylib_GetMeshBoundingBox);

  const raylib_GenMeshTangents = new vscode.CompletionItem(
    "raylib.GenMeshTangents",
    vscode.CompletionItemKind.Function
  );
  raylib_GenMeshTangents.detail = "Generates tangents for a mesh.";
  raylib_GenMeshTangents.documentation = new vscode.MarkdownString(
    "**raylib.GenMeshTangents()**\n\nGenerates tangents for a mesh.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GenMeshTangents.insertText = new vscode.SnippetString(
    "raylib.GenMeshTangents()"
  );
  completionItems.push(raylib_GenMeshTangents);

  const raylib_ExportMesh = new vscode.CompletionItem(
    "raylib.ExportMesh",
    vscode.CompletionItemKind.Function
  );
  raylib_ExportMesh.detail = "Exports a mesh to a file.";
  raylib_ExportMesh.documentation = new vscode.MarkdownString(
    "**raylib.ExportMesh()**\n\nExports a mesh to a file.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ExportMesh.insertText = new vscode.SnippetString(
    "raylib.ExportMesh()"
  );
  completionItems.push(raylib_ExportMesh);

  const raylib_ExportMeshAsCode = new vscode.CompletionItem(
    "raylib.ExportMeshAsCode",
    vscode.CompletionItemKind.Function
  );
  raylib_ExportMeshAsCode.detail = "Exports a mesh as C code.";
  raylib_ExportMeshAsCode.documentation = new vscode.MarkdownString(
    "**raylib.ExportMeshAsCode()**\n\nExports a mesh as C code.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_ExportMeshAsCode.insertText = new vscode.SnippetString(
    "raylib.ExportMeshAsCode()"
  );
  completionItems.push(raylib_ExportMeshAsCode);

  const raylib_GenMeshPoly = new vscode.CompletionItem(
    "raylib.GenMeshPoly",
    vscode.CompletionItemKind.Function
  );
  raylib_GenMeshPoly.detail = "Generates a polygon mesh.";
  raylib_GenMeshPoly.documentation = new vscode.MarkdownString(
    "**raylib.GenMeshPoly()**\n\nGenerates a polygon mesh.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GenMeshPoly.insertText = new vscode.SnippetString(
    "raylib.GenMeshPoly()"
  );
  completionItems.push(raylib_GenMeshPoly);

  const raylib_GenMeshHemiSphere = new vscode.CompletionItem(
    "raylib.GenMeshHemiSphere",
    vscode.CompletionItemKind.Function
  );
  raylib_GenMeshHemiSphere.detail = "Generates a hemisphere mesh.";
  raylib_GenMeshHemiSphere.documentation = new vscode.MarkdownString(
    "**raylib.GenMeshHemiSphere()**\n\nGenerates a hemisphere mesh.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GenMeshHemiSphere.insertText = new vscode.SnippetString(
    "raylib.GenMeshHemiSphere()"
  );
  completionItems.push(raylib_GenMeshHemiSphere);

  const raylib_GenMeshCylinder = new vscode.CompletionItem(
    "raylib.GenMeshCylinder",
    vscode.CompletionItemKind.Function
  );
  raylib_GenMeshCylinder.detail = "Generates a cylinder mesh.";
  raylib_GenMeshCylinder.documentation = new vscode.MarkdownString(
    "**raylib.GenMeshCylinder()**\n\nGenerates a cylinder mesh.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GenMeshCylinder.insertText = new vscode.SnippetString(
    "raylib.GenMeshCylinder()"
  );
  completionItems.push(raylib_GenMeshCylinder);

  const raylib_GenMeshCone = new vscode.CompletionItem(
    "raylib.GenMeshCone",
    vscode.CompletionItemKind.Function
  );
  raylib_GenMeshCone.detail = "Generates a cone mesh.";
  raylib_GenMeshCone.documentation = new vscode.MarkdownString(
    "**raylib.GenMeshCone()**\n\nGenerates a cone mesh.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GenMeshCone.insertText = new vscode.SnippetString(
    "raylib.GenMeshCone()"
  );
  completionItems.push(raylib_GenMeshCone);

  const raylib_GenMeshTorus = new vscode.CompletionItem(
    "raylib.GenMeshTorus",
    vscode.CompletionItemKind.Function
  );
  raylib_GenMeshTorus.detail = "Generates a torus mesh.";
  raylib_GenMeshTorus.documentation = new vscode.MarkdownString(
    "**raylib.GenMeshTorus()**\n\nGenerates a torus mesh.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GenMeshTorus.insertText = new vscode.SnippetString(
    "raylib.GenMeshTorus()"
  );
  completionItems.push(raylib_GenMeshTorus);

  const raylib_GenMeshKnot = new vscode.CompletionItem(
    "raylib.GenMeshKnot",
    vscode.CompletionItemKind.Function
  );
  raylib_GenMeshKnot.detail = "Generates a knot mesh.";
  raylib_GenMeshKnot.documentation = new vscode.MarkdownString(
    "**raylib.GenMeshKnot()**\n\nGenerates a knot mesh.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GenMeshKnot.insertText = new vscode.SnippetString(
    "raylib.GenMeshKnot()"
  );
  completionItems.push(raylib_GenMeshKnot);

  const raylib_GenMeshHeightmap = new vscode.CompletionItem(
    "raylib.GenMeshHeightmap",
    vscode.CompletionItemKind.Function
  );
  raylib_GenMeshHeightmap.detail = "Generates a heightmap mesh.";
  raylib_GenMeshHeightmap.documentation = new vscode.MarkdownString(
    "**raylib.GenMeshHeightmap()**\n\nGenerates a heightmap mesh.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GenMeshHeightmap.insertText = new vscode.SnippetString(
    "raylib.GenMeshHeightmap()"
  );
  completionItems.push(raylib_GenMeshHeightmap);

  const raylib_GenMeshCubicmap = new vscode.CompletionItem(
    "raylib.GenMeshCubicmap",
    vscode.CompletionItemKind.Function
  );
  raylib_GenMeshCubicmap.detail = "Generates a cubicmap mesh.";
  raylib_GenMeshCubicmap.documentation = new vscode.MarkdownString(
    "**raylib.GenMeshCubicmap()**\n\nGenerates a cubicmap mesh.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GenMeshCubicmap.insertText = new vscode.SnippetString(
    "raylib.GenMeshCubicmap()"
  );
  completionItems.push(raylib_GenMeshCubicmap);

  const raylib_LoadMaterials = new vscode.CompletionItem(
    "raylib.LoadMaterials",
    vscode.CompletionItemKind.Function
  );
  raylib_LoadMaterials.detail = "Loads materials from a file.";
  raylib_LoadMaterials.documentation = new vscode.MarkdownString(
    "**raylib.LoadMaterials()**\n\nLoads materials from a file.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_LoadMaterials.insertText = new vscode.SnippetString(
    "raylib.LoadMaterials()"
  );
  completionItems.push(raylib_LoadMaterials);

  const raylib_LoadMaterialDefault = new vscode.CompletionItem(
    "raylib.LoadMaterialDefault",
    vscode.CompletionItemKind.Function
  );
  raylib_LoadMaterialDefault.detail = "Loads the default material.";
  raylib_LoadMaterialDefault.documentation = new vscode.MarkdownString(
    "**raylib.LoadMaterialDefault()**\n\nLoads the default material.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_LoadMaterialDefault.insertText = new vscode.SnippetString(
    "raylib.LoadMaterialDefault()"
  );
  completionItems.push(raylib_LoadMaterialDefault);

  const raylib_IsMaterialValid = new vscode.CompletionItem(
    "raylib.IsMaterialValid",
    vscode.CompletionItemKind.Function
  );
  raylib_IsMaterialValid.detail = "Checks if a material is valid.";
  raylib_IsMaterialValid.documentation = new vscode.MarkdownString(
    "**raylib.IsMaterialValid()**\n\nChecks if a material is valid.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_IsMaterialValid.insertText = new vscode.SnippetString(
    "raylib.IsMaterialValid()"
  );
  completionItems.push(raylib_IsMaterialValid);

  const raylib_UnloadMaterial = new vscode.CompletionItem(
    "raylib.UnloadMaterial",
    vscode.CompletionItemKind.Function
  );
  raylib_UnloadMaterial.detail = "Unloads a material from memory.";
  raylib_UnloadMaterial.documentation = new vscode.MarkdownString(
    "**raylib.UnloadMaterial()**\n\nUnloads a material from memory.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_UnloadMaterial.insertText = new vscode.SnippetString(
    "raylib.UnloadMaterial()"
  );
  completionItems.push(raylib_UnloadMaterial);

  const raylib_SetMaterialTexture = new vscode.CompletionItem(
    "raylib.SetMaterialTexture",
    vscode.CompletionItemKind.Function
  );
  raylib_SetMaterialTexture.detail = "Sets a texture for a material.";
  raylib_SetMaterialTexture.documentation = new vscode.MarkdownString(
    "**raylib.SetMaterialTexture()**\n\nSets a texture for a material.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_SetMaterialTexture.insertText = new vscode.SnippetString(
    "raylib.SetMaterialTexture()"
  );
  completionItems.push(raylib_SetMaterialTexture);

  const raylib_SetModelMeshMaterial = new vscode.CompletionItem(
    "raylib.SetModelMeshMaterial",
    vscode.CompletionItemKind.Function
  );
  raylib_SetModelMeshMaterial.detail = "Sets the material for a model mesh.";
  raylib_SetModelMeshMaterial.documentation = new vscode.MarkdownString(
    "**raylib.SetModelMeshMaterial()**\n\nSets the material for a model mesh.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_SetModelMeshMaterial.insertText = new vscode.SnippetString(
    "raylib.SetModelMeshMaterial()"
  );
  completionItems.push(raylib_SetModelMeshMaterial);

  const raylib_LoadModelAnimations = new vscode.CompletionItem(
    "raylib.LoadModelAnimations",
    vscode.CompletionItemKind.Function
  );
  raylib_LoadModelAnimations.detail = "Loads model animations from a file.";
  raylib_LoadModelAnimations.documentation = new vscode.MarkdownString(
    "**raylib.LoadModelAnimations()**\n\nLoads model animations from a file.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_LoadModelAnimations.insertText = new vscode.SnippetString(
    "raylib.LoadModelAnimations()"
  );
  completionItems.push(raylib_LoadModelAnimations);

  const raylib_UnloadModelAnimation = new vscode.CompletionItem(
    "raylib.UnloadModelAnimation",
    vscode.CompletionItemKind.Function
  );
  raylib_UnloadModelAnimation.detail = "Unloads a model animation from memory.";
  raylib_UnloadModelAnimation.documentation = new vscode.MarkdownString(
    "**raylib.UnloadModelAnimation()**\n\nUnloads a model animation from memory.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_UnloadModelAnimation.insertText = new vscode.SnippetString(
    "raylib.UnloadModelAnimation()"
  );
  completionItems.push(raylib_UnloadModelAnimation);

  const raylib_UnloadModelAnimations = new vscode.CompletionItem(
    "raylib.UnloadModelAnimations",
    vscode.CompletionItemKind.Function
  );
  raylib_UnloadModelAnimations.detail = "Unloads model animations from memory.";
  raylib_UnloadModelAnimations.documentation = new vscode.MarkdownString(
    "**raylib.UnloadModelAnimations()**\n\nUnloads model animations from memory.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_UnloadModelAnimations.insertText = new vscode.SnippetString(
    "raylib.UnloadModelAnimations()"
  );
  completionItems.push(raylib_UnloadModelAnimations);

  const raylib_IsModelAnimationValid = new vscode.CompletionItem(
    "raylib.IsModelAnimationValid",
    vscode.CompletionItemKind.Function
  );
  raylib_IsModelAnimationValid.detail = "Checks if a model animation is valid.";
  raylib_IsModelAnimationValid.documentation = new vscode.MarkdownString(
    "**raylib.IsModelAnimationValid()**\n\nChecks if a model animation is valid.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_IsModelAnimationValid.insertText = new vscode.SnippetString(
    "raylib.IsModelAnimationValid()"
  );
  completionItems.push(raylib_IsModelAnimationValid);

  const raylib_CheckCollisionSpheres = new vscode.CompletionItem(
    "raylib.CheckCollisionSpheres",
    vscode.CompletionItemKind.Function
  );
  raylib_CheckCollisionSpheres.detail = "Checks collision between two spheres.";
  raylib_CheckCollisionSpheres.documentation = new vscode.MarkdownString(
    "**raylib.CheckCollisionSpheres()**\n\nChecks collision between two spheres.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_CheckCollisionSpheres.insertText = new vscode.SnippetString(
    "raylib.CheckCollisionSpheres()"
  );
  completionItems.push(raylib_CheckCollisionSpheres);

  const raylib_CheckCollisionBoxes = new vscode.CompletionItem(
    "raylib.CheckCollisionBoxes",
    vscode.CompletionItemKind.Function
  );
  raylib_CheckCollisionBoxes.detail = "Checks collision between two boxes.";
  raylib_CheckCollisionBoxes.documentation = new vscode.MarkdownString(
    "**raylib.CheckCollisionBoxes()**\n\nChecks collision between two boxes.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_CheckCollisionBoxes.insertText = new vscode.SnippetString(
    "raylib.CheckCollisionBoxes()"
  );
  completionItems.push(raylib_CheckCollisionBoxes);

  const raylib_CheckCollisionBoxSphere = new vscode.CompletionItem(
    "raylib.CheckCollisionBoxSphere",
    vscode.CompletionItemKind.Function
  );
  raylib_CheckCollisionBoxSphere.detail =
    "Checks collision between a box and a sphere.";
  raylib_CheckCollisionBoxSphere.documentation = new vscode.MarkdownString(
    "**raylib.CheckCollisionBoxSphere()**\n\nChecks collision between a box and a sphere.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_CheckCollisionBoxSphere.insertText = new vscode.SnippetString(
    "raylib.CheckCollisionBoxSphere()"
  );
  completionItems.push(raylib_CheckCollisionBoxSphere);

  const raylib_GetRayCollisionSphere = new vscode.CompletionItem(
    "raylib.GetRayCollisionSphere",
    vscode.CompletionItemKind.Function
  );
  raylib_GetRayCollisionSphere.detail =
    "Gets the collision information between a ray and a sphere.";
  raylib_GetRayCollisionSphere.documentation = new vscode.MarkdownString(
    "**raylib.GetRayCollisionSphere()**\n\nGets the collision information between a ray and a sphere.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetRayCollisionSphere.insertText = new vscode.SnippetString(
    "raylib.GetRayCollisionSphere()"
  );
  completionItems.push(raylib_GetRayCollisionSphere);

  const raylib_GetRayCollisionBox = new vscode.CompletionItem(
    "raylib.GetRayCollisionBox",
    vscode.CompletionItemKind.Function
  );
  raylib_GetRayCollisionBox.detail =
    "Gets the collision information between a ray and a box.";
  raylib_GetRayCollisionBox.documentation = new vscode.MarkdownString(
    "**raylib.GetRayCollisionBox()**\n\nGets the collision information between a ray and a box.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetRayCollisionBox.insertText = new vscode.SnippetString(
    "raylib.GetRayCollisionBox()"
  );
  completionItems.push(raylib_GetRayCollisionBox);

  const raylib_GetRayCollisionMesh = new vscode.CompletionItem(
    "raylib.GetRayCollisionMesh",
    vscode.CompletionItemKind.Function
  );
  raylib_GetRayCollisionMesh.detail =
    "Gets the collision information between a ray and a mesh.";
  raylib_GetRayCollisionMesh.documentation = new vscode.MarkdownString(
    "**raylib.GetRayCollisionMesh()**\n\nGets the collision information between a ray and a mesh.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetRayCollisionMesh.insertText = new vscode.SnippetString(
    "raylib.GetRayCollisionMesh()"
  );
  completionItems.push(raylib_GetRayCollisionMesh);

  const raylib_GetRayCollisionTriangle = new vscode.CompletionItem(
    "raylib.GetRayCollisionTriangle",
    vscode.CompletionItemKind.Function
  );
  raylib_GetRayCollisionTriangle.detail =
    "Gets the collision information between a ray and a triangle.";
  raylib_GetRayCollisionTriangle.documentation = new vscode.MarkdownString(
    "**raylib.GetRayCollisionTriangle()**\n\nGets the collision information between a ray and a triangle.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetRayCollisionTriangle.insertText = new vscode.SnippetString(
    "raylib.GetRayCollisionTriangle()"
  );
  completionItems.push(raylib_GetRayCollisionTriangle);

  const raylib_GetRayCollisionQuad = new vscode.CompletionItem(
    "raylib.GetRayCollisionQuad",
    vscode.CompletionItemKind.Function
  );
  raylib_GetRayCollisionQuad.detail =
    "Gets the collision information between a ray and a quad.";
  raylib_GetRayCollisionQuad.documentation = new vscode.MarkdownString(
    "**raylib.GetRayCollisionQuad()**\n\nGets the collision information between a ray and a quad.\n\n**Parameters:**\n\n**Usage Example:**\n```lua\nNo usage example available.\n```"
  );
  raylib_GetRayCollisionQuad.insertText = new vscode.SnippetString(
    "raylib.GetRayCollisionQuad()"
  );
  completionItems.push(raylib_GetRayCollisionQuad);

  return completionItems;
}
