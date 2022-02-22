function swap(a: number, b: number, c: number) {
  a = a ^ b;
  b = b ^ c;
  c = a ^ c;

  return c;
}

export const result = swap(1, 0, 0);
export const result1 = swap(1, 3, 1);
export const result2 = swap(27, 31, 31);
