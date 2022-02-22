function test(result: any) {
  return result;
}

// -------------------------

function calculateBonus(days: number) {
  let bonus = 0;

  if (days < 32) {
    bonus = 0;
  }

  const arr = Array.from({ length: days }, (_, i) => i + 1);
  const range = arr.length - (arr.length - 32);
  const levelOne = arr.slice(range, range + 8).length * 325;
  const levelTwo = arr.slice(range + 8, range + 16).length * 550;
  const levelThree = arr.slice(range + 16, arr.length).length * 600;

  bonus = levelOne + levelTwo + levelThree;

  return bonus;
}

export const result = test(calculateBonus(37));
export const result1 = test(calculateBonus(45));
export const result2 = test(calculateBonus(50));
