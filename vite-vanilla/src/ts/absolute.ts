function absolute(str: string) {
  const res = str.replace(/a\b/gi, "an absolute");
  return res.charAt(0).toUpperCase() + res.slice(1);
}

// -------------------------

export const result = absolute("I am a champion!!!");
export const result1 = absolute("Such an amazing bowler.");
export const result2 = absolute("A man with no haters.");
