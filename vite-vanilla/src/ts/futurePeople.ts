function test(result: any) {
  return result;
}

// -------------------------

export const result = test(futurePeople(256, 2));
export const result1 = test(futurePeople(3248, 6));
export const result2 = test(futurePeople(5240, 3));

function futurePeople(population: number, n: number): number {
  return population + n * 12 * 30;
}
