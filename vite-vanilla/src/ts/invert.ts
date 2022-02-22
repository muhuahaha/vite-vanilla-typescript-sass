import { gsap } from "gsap";

function invert(s: string) {
  return s
    .split(" ")
    .map((x) =>
      [...x]
        .map((x) => (x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()))
        .reverse()
        .join("")
    )
    .reverse()
    .join(" ");
}

// -------------------------

export const result = invert("dLROW YM sI HsEt");
export const result1 = invert("ytInIUgAsnOc");
export const result2 = invert("step on NO PETS");

gsap.fromTo(".color", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6 });
