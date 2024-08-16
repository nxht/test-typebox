import { Type } from '@sinclair/typebox';

export const a = Type.Object({
  A0: Type.String(),
  A1: Type.String(),
  A2: Type.String(),
  A3: Type.String(),
  A4: Type.String(),
  A5: Type.String(),
  A6: Type.String(),
  A7: Type.String(),
  A8: Type.String(),
  A9: Type.String(),
  A10: Type.String(),
  A11: Type.String(),
  A12: Type.String(),
  A13: Type.String(),
  A14: Type.String(),
  A15: Type.String(),
  A16: Type.String(),
  A17: Type.String(),
  A18: Type.String(),
  A19: Type.String(),
  A30: Type.String(),
  A31: Type.String(),
  A32: Type.String(),
  A33: Type.String(),
  A34: Type.String(),
  A35: Type.String(),
  A36: Type.String(),
  A37: Type.String(),
  A38: Type.String(),
  A39: Type.String(),
});

export const b = Type.Object({
  B0: Type.String(),
  B1: Type.String(),
  B2: Type.String(),
  B3: Type.String(),
  B4: Type.String(),
  B5: Type.String(),
  B6: Type.String(),
  B7: Type.String(),
  B8: Type.String(),
  B9: Type.String(),
  B10: Type.String(),
  B11: Type.String(),
  B12: Type.String(),
  B13: Type.String(),
  B14: Type.String(),
  B15: Type.String(),
  B16: Type.String(),
  B17: Type.String(),
  B18: Type.String(),
  B19: Type.String(),
  B30: Type.String(),
  B31: Type.String(),
  B32: Type.String(),
  B33: Type.String(),
  B34: Type.String(),
  B35: Type.String(),
  B36: Type.String(),
  B37: Type.String(),
  B38: Type.String(),
  B39: Type.String(),
});

export const joinWithComposite = Type.Composite([a, b]);

export const joinWithIntersect = Type.Intersect([a, b]);

export const joinWithSpread = Type.Object({
  ...a.properties,
  ...b.properties,
});
