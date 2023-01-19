import hexToRgb from "./hexToRgb";

export function getLuminosity(hexCode: string) {
  const rgb = hexToRgb(hexCode);
  return 0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b;
}
