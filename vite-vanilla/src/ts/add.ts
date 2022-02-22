function add(numberOne: string, numberTwo: string) {
  return !numberOne || !numberTwo
    ? "Invalid Operation"
    : `${+numberOne + +numberTwo}`;
}

export const result = add("111", "111");
export const result1 = add("10", "80");
export const result2 = add("", "20");

// https://edabit.com/challenge/Rd7rkibLqAcBEx7xP
