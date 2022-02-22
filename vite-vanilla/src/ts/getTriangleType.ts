function getTriangleType(arr: number[]) {
  if (arr.length !== 3) {
    return "not a triangle";
  }
  let diff = [...new Set(arr)].length;

  if (diff === 1) {
    return "equilateral";
  }
  if (diff === 2) {
    return "isosceles";
  }
  if (diff === 3) {
    return "scalene";
  }
  return undefined;
}

// -------------------------

const result = getTriangleType([2, 6, 5]);
const result1 = getTriangleType([4, 4, 7]);
const result2 = getTriangleType([100, 100, 100]);
