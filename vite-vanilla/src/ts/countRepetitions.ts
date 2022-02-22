// -------------------------

import { gsap } from "gsap";

function countRepetitions(arr: (string | number)[]) {
  const counts: any = {};
  arr.forEach((el: any) => {
    counts[el] = counts[el] ? (counts[el] += 1) : 1;
  });

  const countsSorted = Object.entries(counts).sort(
    (a: any, b: any) => b[1] - a[1]
  );

  return Object.fromEntries(countsSorted);
}

export const result = countRepetitions([
  "cat",
  "dog",
  "cat",
  "cow",
  "cow",
  "cow",
]);
export const result1 = countRepetitions([1, 5, 5, 5, 12, 12, 0, 0, 0, 0, 0, 0]);
export const result2 = countRepetitions([
  "Infinity",
  "null",
  "Infinity",
  "null",
  "null",
]);

gsap.fromTo(".color", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6 });
