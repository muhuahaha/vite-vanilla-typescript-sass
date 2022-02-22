// -------------------------
const matrix1 = [
  [0, 1, 0, 0],
  [1, 0, 1, 1],
  [0, 1, 0, 1],
  [0, 1, 1, 0],
];

function isAdjacent(matrix: number[][], node1: number, node2: number) {
  return matrix[node1][node2] == 1;
}

export const result = isAdjacent(matrix1, 0, 1);
export const result1 = isAdjacent(matrix1, 0, 2);
export const result2 = isAdjacent(matrix1, 2, 1);
