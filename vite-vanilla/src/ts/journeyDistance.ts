function journeyDistance(num: number) {
  return num < 3 ? 0 : (num - 3) / 2 + 1;
}

export const result = journeyDistance(4);
export const result1 = journeyDistance(9);
export const result2 = journeyDistance(5);
