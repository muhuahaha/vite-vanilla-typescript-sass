function sumMissingNumbers(arr: number[]) {
  const missing = [];
  const maxNum = Math.max(...arr);
  const minNum = Math.min(...arr);
  const range = [...Array(maxNum - minNum + 1)].map((_, i) => minNum + i);

  if (range.length === arr.length) {
    return 0;
  }

  for (let i = 0; i < range.length; i++) {
    if (arr.indexOf(range[i]) === -1) {
      missing.push(range[i]);
    }
  }

  return missing.reduce((a, c) => a + c);
}

export const result = sumMissingNumbers([1, 3, 5, 7, 10]);
export const result1 = sumMissingNumbers([10, 7, 5, 3, 1]);
export const result2 = sumMissingNumbers([10, 20, 30, 40, 50, 60]);

50;
