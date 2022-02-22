function histogram(arr: number[], char: string) {
  return arr.map((x) => char.repeat(x)).join("\n");
}
// -------------------------

export const result = histogram([1, 3, 4], "#");
export const result1 = histogram([6, 2, 15, 3], "=");
export const result2 = histogram([1, 10], "+");
