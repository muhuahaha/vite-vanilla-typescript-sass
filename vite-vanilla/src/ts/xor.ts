function xor(a: number, b: number) {
  a = a ^ b;
  b = a ^ b;
  a = a ^ b;
  return [a, b];
}
export const result = xor(10, 41);
export const result1 = xor(69, 420);
export const result2 = xor(12345, 890412);
