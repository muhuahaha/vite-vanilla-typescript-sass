// -------------------------

function lowerTriang(matrix: number[][]) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (j > i) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
}

export const result = lowerTriang([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
export const result1 = lowerTriang([
  [5, 7],
  [7, 9],
]);
export const result2 = lowerTriang([
  [1, 8, 8, 1],
  [2, 7, 7, 2],
  [3, 6, 6, 3],
  [4, 5, 5, 4],
]);

// function perrin(n) {
// 	if (n <= 2) return [3, 0, 2][n];
// 	return perrin(n - 2) + perrin(n - 3);
// }
