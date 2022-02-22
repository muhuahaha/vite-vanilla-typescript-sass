const addParityBit = (b: string) =>
  [...b].reduce((a, b) => (b === "1" ? a + 1 : a), 0) % 2 === 0
    ? b + "0"
    : b + "1";

export const result = addParityBit("1011011");
export const result1 = addParityBit("0110000");
export const result2 = addParityBit("0101101");
