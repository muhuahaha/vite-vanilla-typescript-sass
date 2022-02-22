function simpleEquation(a: number, b: number, c: number) {
  const op = ["+", "-", "*", "/"];

  for (let i = 0; i < 4; i++) {
    if (eval(a + op[i] + b) === c) {
      return `${a}${op[i]}${b}=${c}`;
    }
    if (eval(b + op[i] + a) === c) {
      return `${b}${op[i]}${a}=${c}`;
    }

    if (eval(c + op[i] + b) === a) {
      return `${c}${op[i]}${b}=${a}`;
    }
    if (eval(b + op[i] + c) === a) {
      return `${a}${op[i]}${c}=${b}`;
    }

    if (eval(a + op[i] + c) === b) {
      return `${c}${op[i]}${b}=${a}`;
    }
    if (eval(c + op[i] + a) === b) {
      return `${c}${op[i]}${a}=${b}`;
    }
  }
  return "";
}

export const result = simpleEquation(1, 2, 3);
export const result1 = simpleEquation(2, 2, 4);
export const result2 = simpleEquation(6, 2, 3);
