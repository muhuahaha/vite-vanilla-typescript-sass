function spaceApart(arr: any) {
  const equalTwo = arr.filter((x: any) => x === "1").length === 2;
  const minusElement = arr.some((x) => x < 0);

  const range = arr
    .map((x: any, i: number) => (x === "1" ? i : ""))
    .filter((x) => typeof x === "number");

  const slice = arr
    .slice(range[0] + 1, range[1])
    .filter((x: any) => typeof x === "number");

  if (!equalTwo || minusElement) {
    return "invaild";
  }
  return slice.reduce((a, b) => a + b);
}

export const result = spaceApart([4, 3, "1", "2", 4, "1", "2", "9"]);
export const result1 = spaceApart(["1", 9, 20, 38, "1"]);
export const result2 = spaceApart([3, 2, 9, "1", 0, 0, -1, "1"]);
