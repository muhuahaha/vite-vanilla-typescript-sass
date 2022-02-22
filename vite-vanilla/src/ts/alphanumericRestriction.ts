function alphanumericRestriction(str: string) {
  const letter = str.match(/[A-Z]/gi) || "";
  const num = str.match(/\d/g) || "";

  return str === ""
    ? false
    : letter.length === str.length || num.length === str.length;
}

export const result = alphanumericRestriction("Bold");
export const result1 = alphanumericRestriction("123454321");
export const result2 = alphanumericRestriction("H3LL0");
