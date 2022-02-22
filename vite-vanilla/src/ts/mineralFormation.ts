function test(result: any) {
  return result;
}

// -------------------------

function mineralFormation(cave: number[][]) {
  const stalactites = cave[0].some((x) => x === 1);
  const stalagmites = cave[cave.length - 1].some((x) => x === 1);
  if (stalactites && stalagmites) {
    return "both";
  }
  if (stalactites && !stalagmites) {
    return "stalactites";
  }
  return "stalagmites";
}

export const result = mineralFormation([
  [0, 1, 0, 1],
  [0, 1, 0, 1],
  [0, 0, 0, 1],
  [0, 0, 0, 0],
]);
export const result1 = mineralFormation([
  [0, 0, 0, 0],
  [0, 1, 0, 1],
  [0, 1, 1, 1],
  [0, 1, 1, 1],
]);
export const result2 = mineralFormation([
  [1, 0, 1, 0],
  [1, 1, 0, 1],
  [0, 1, 1, 1],
  [0, 1, 1, 1],
]);
