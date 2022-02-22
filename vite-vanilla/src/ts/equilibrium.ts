function equilibrium(x: number) {
  return x === 0 ? true : x > 0 ? "positive" : "negative";
}

export const result = equilibrium(0.0);
export const result1 = equilibrium(5425);
export const result2 = equilibrium(-5425);
