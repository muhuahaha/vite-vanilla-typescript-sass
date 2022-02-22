// -------------------------

import { gsap } from "gsap";

function repetition(txt: string, n: number) {
  const newNumber = n - 1;
  const newTxt = txt.repeat(n);

  if (newNumber < 0) {
    repetition(newTxt, newNumber);
  }
  return newTxt;
}

export const result = repetition("ab", 3);
export const result1 = repetition("kiwi", 1);
export const result2 = repetition("cherry", 2);

gsap.fromTo(".color", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6 });
