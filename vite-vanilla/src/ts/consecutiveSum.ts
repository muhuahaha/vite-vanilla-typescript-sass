// -------------------------

import { gsap } from "gsap";

function consecutiveSum(n: number) {
  n = 2 * n;

  return (n & (n - 1)) != 0 ? true : false;
}

export const result = consecutiveSum(9);
export const result1 = consecutiveSum(10);
export const result2 = consecutiveSum(64);

gsap.fromTo(".color", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6 });
