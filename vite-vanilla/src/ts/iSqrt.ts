// -------------------------

// -------------------------

function iSqrt(n: number) {
  let i = 0;
  if (n === 1) {
    return 0;
  }

  while (n >= 2) {
    n = Math.sqrt(n);
    i++;
  }
  return i;
}

export const result = iSqrt(7);
export const result1 = iSqrt(27);
export const result2 = iSqrt(256);
