// -------------------------

function overlapping(arr: number[][]) {
  const x = Math.max(...arr.map((x) => x[0]));
  const y = Math.min(...arr.map((x) => x[1]));
  if (x > y) {
    return "No overlapping";
  }
  return [x, y];
}

export const result = overlapping([
  [1, 7],
  [2, 8],
  [0, 4],
]);
export const result1 = overlapping([
  [5, 10],
  [2, 15],
  [10, 12],
]);
export const result2 = overlapping([
  [11, 18],
  [3, 7],
  [2, 20],
  [5, 16],
]);
