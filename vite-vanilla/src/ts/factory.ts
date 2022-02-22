// -------------------------

function factory(num: number) {
  return function (x: number[]) {
    return x.map((x) => x / num);
  };
}

export const result = factory(15)([30, 45, 60]);
export const result1 = factory(2)([2, 4, 6]);
export const result2 = factory(6)([60, 30]);
