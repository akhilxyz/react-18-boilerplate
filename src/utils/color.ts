export function getLightestColor(hexColor :any, factor = 0.9) {
    // Convert hex color to RGB
    const hexToRgb = (hex : string) => {
      const bigint = parseInt(hex.slice(1), 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return [r, g, b];
    };
  
    // Convert RGB to hex
    const rgbToHex = (r :any, g :any, b:any) => {
      const toHex = (n:any) => n.toString(16).padStart(2, '0');
      return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    };
  
    // Lighten the color by the factor
    const lightenColor = (r:any, g:any, b:any, factor :any) => {
      const lighten = (c:any) => Math.min(255, Math.floor(c + (255 - c) * factor));
      return [lighten(r), lighten(g), lighten(b)];
    };
  
    const [r, g, b] = hexToRgb(hexColor);
    const [lr, lg, lb] = lightenColor(r, g, b, factor);
    const color =  rgbToHex(lr, lg, lb);
    return color;
  }