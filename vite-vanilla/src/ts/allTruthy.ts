function allTruthy(...args: Array<number | string | boolean>) {
  return args.every((x) => {
    if (x === 0) {
      return false;
    }
    if (!x) {
      return false;
    }
    return x;
  });
}

export const result = allTruthy(Infinity, 92347238467.219378, "Hello World");
export const result1 = allTruthy(true, false, true);
export const result2 = allTruthy(5, 4, 3, 2, 1, 0);
