// ------------------------- Type Signature

const vowels: any = {
  A: 4,
  E: 3,
  I: 1,
  O: 0,
};

function sumOfVowels(str: string) {
  return [...str].reduce(
    (a, b) => a + (b.match(/[AEIO]/gi) ? vowels[b.toUpperCase()] : 0),
    0
  );
}

export const result = sumOfVowels("tzttttt");
export const result1 = sumOfVowels("Do I get the correct output?");
export const result2 = sumOfVowels("I love edabit!");
