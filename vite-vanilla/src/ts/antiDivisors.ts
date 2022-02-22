function antiDivisors(n: number) {
  const result = [];
  const range = Array.from({ length: n - 1 }, (_, i) => i + 1).filter(
    (x) => n % x !== 0
  );

  const oddDivisorPlus = n * 2 + 1;
  const oddDivisorMinus = n * 2 - 1;
  const evenDivisor = n * 2;

  for (let i = 0; i < range.length; i++) {
    if (range[i] % 2 !== 0) {
      if (oddDivisorMinus % range[i] === 0 || oddDivisorPlus % range[i] === 0) {
        result.push(range[i]);
      }
    }
    if (evenDivisor % range[i] === 0) {
      result.push(range[i]);
    }
  }

  return result;
}

export const result = antiDivisors(10);
export const result1 = antiDivisors(12);
export const result2 = antiDivisors(20);
