// -------------------------

import { gsap } from "gsap";

function firstRepeat(chars: string) {
  const firstRep = [...chars].filter((x, i) =>
    chars.indexOf(x) === i ? "" : x
  );

  if (firstRep.length === 0) {
    return "-1";
  }
  return firstRep[0];
}

export const result = firstRepeat("legolas");
export const result1 = firstRepeat("Gandalf");
export const result2 = firstRepeat("Balrog");

gsap.fromTo(".color", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6 });
