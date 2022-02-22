function area(h: number, w: number) {
  return [h, w].reduce((a, b) => (b <= 0 || a <= 0 ? -1 : (a = b * a)));
}

export const result = area(10, 4);
export const result1 = area(-1, 4);
export const result2 = area(0, 4);
