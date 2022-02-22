function intersection(...a: any) {
  return a.flat(1);
}

export const result = intersection([1, 2, 3], [3, 4, 5], [2, 9, 9]);
export const result1 = intersection(
  ["cat", "dog", "mouse"],
  ["cat", "dog", "bat"],
  ["cat", "dog", "fly"]
);
export const result2 = intersection(
  [
    {
      color: "red",
      make: "toyota",
    },
    {
      color: "blue",
      make: "mazda",
    },
  ],
  [
    {
      color: "green",
      make: "tesla",
    },
    {
      color: "blue",
      make: "mazda",
    },
  ],
  [
    {
      color: "yellow",
      make: "ford",
    },
    {
      color: "blue",
      make: "mazda",
    },
  ]
);
