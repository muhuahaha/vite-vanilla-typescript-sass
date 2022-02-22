// -------------------------
function multiply(arr: any[]) {
  return Array.from({ length: arr.length }, (_, i) => {
    if (typeof arr[i] === "number") {
      return String(arr[i])
        .repeat(arr.length)
        .split("")
        .map((x) => +x);
    }
    return String(arr[i]).repeat(arr.length).split("");
  });
}

export const result = multiply([4, 5]);
export const result1 = multiply(["*", "%", "$"]);
export const result2 = multiply(["A", "B", "C", "D", "E"]);
