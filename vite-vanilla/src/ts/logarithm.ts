// -------------------------
function logarithm(base: number, num: number) {
  if (base <= 1 || num <= 0) {
    return "Invalid";
  }
  return Math.log(num) / Math.log(base);
}

export const result = logarithm(1, "Hi,".length);
export const result1 = logarithm(2, 64);
export const result2 = logarithm(2, 2);
