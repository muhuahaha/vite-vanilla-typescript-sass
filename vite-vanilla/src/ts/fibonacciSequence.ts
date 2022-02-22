function fibonacciSequence() {
  let i;
  let fib = [];

  fib[0] = 0;
  fib[1] = 1;
  for (i = 2; i <= 13; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

export const result = fibonacciSequence();
export const result1 = fibonacciSequence();
export const result2 = fibonacciSequence();
