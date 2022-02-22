interface RNA {
  [key: string]: string;
}

const obj: RNA = {
  A: "U",
  U: "A",
  G: "C",
  C: "G",
};

function reverseComplement(sequence: string) {
  return [...sequence]
    .map((x) => obj[x])
    .reverse()
    .join("");
}

// -------------------------

export const result = reverseComplement("GUGU");
export const result1 = reverseComplement("UCUCG");
export const result2 = reverseComplement("CAGGU");
