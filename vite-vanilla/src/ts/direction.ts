function direction(arr: string[]) {
  const arrUpperCase = arr.map((x) =>
    x.split("").map((x) => x.toUpperCase() === x)
  );

  const eastToWest = arr.map((x) => {
    if (/(east)/gi.test(x)) {
      return x.replace(/(east)/gi, "west");
    }
    if (/(e a s t)/gi.test(x)) {
      return x.replace(/(e a s t)/gi, "w e s t");
    }
    return x;
  });

  return eastToWest.map((x, i) =>
    x
      .split("")
      .map((y, j) => (arrUpperCase[i][j] === true ? y.toUpperCase() : y))
      .join("")
  );
}

// -------------------------

export const result = direction(["east", "EAST", "eastEAST"]);
export const result1 = direction(["eAsT EaSt", "EaSt eAsT"]);
export const result2 = direction(["east EAST", "e a s t", "E A S T"]);
