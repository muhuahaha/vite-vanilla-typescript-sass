const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function alphabetIndex(alphabet: string[], str: string) {
  const split = str.toLowerCase().split("").sort().reverse()[0];
  return alphabet.reduce((a, b, i) => (b === split ? (a = i + 1 + b) : a));
}

export const result = alphabetIndex(alphabet, "Flavio");
export const result1 = alphabetIndex(alphabet, "Andrey");
export const result2 = alphabetIndex(alphabet, "Oscar");
