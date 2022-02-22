// -------------------------

function perrin(n: any) {
  const arr = [3, 0, 2];
  for (let i = 3; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 3]);
  }
  return arr[n];
}

export const result = perrin(1);
export const result1 = perrin(8);
export const result2 = perrin(26);

// function perrin(n) {
// 	if (n <= 2) return [3, 0, 2][n];
// 	return perrin(n - 2) + perrin(n - 3);
// }
