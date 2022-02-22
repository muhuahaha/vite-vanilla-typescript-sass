function timeSaved(lim: number, avg: number, d: number) {
  return +((d / lim - d / avg) * 60).toFixed(1);
}

export const result = timeSaved(80, 90, 40);
export const result1 = timeSaved(80, 90, 4000);
export const result2 = timeSaved(80, 100, 40);
