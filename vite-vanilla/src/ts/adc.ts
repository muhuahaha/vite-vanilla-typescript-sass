function adc(value: number): number {
  return +(value / 204.6).toFixed(2);
}

// -------------------------

export const result = adc(0);
export const result1 = adc(1023);
export const result2 = adc(500);
