function fairDie(arr: number[]) {
  const expected = arr.reduce((a, b) => a + b) / arr.length;
  const chiSquare = arr.map((x) => (x - expected) ** 2 / expected);

  return chiSquare.reduce((a, b) => a + b) < 11.0705;
}

export const result = fairDie([44, 52, 33, 40, 41, 30]);
export const result1 = fairDie([34, 27, 23, 20, 32, 28]);
export const result2 = fairDie([10, 20, 11, 5, 19, 16]);
