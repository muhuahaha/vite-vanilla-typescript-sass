import "./src/styles/style.scss";

import hallo from "./src/ts/testModule.js";

import { result } from "./src/ts/test";
import { result1 } from "./src/ts/test";
import { result2 } from "./src/ts/test";

import randomColors from "./src/ts/randomColors";
import { gsap } from "gsap";

console.log(hallo("Test"));

randomColors();
// _________________

// -------------------------

console.log(result);
console.log(result1);
console.log(result2);

const showResult = document.getElementById("result") as HTMLElement;
showResult.innerHTML = String(result);

const showResult1 = document.getElementById("result1") as HTMLElement;
showResult1.innerHTML = String(result1);

const showResult2 = document.getElementById("result2") as HTMLElement;
showResult2.innerHTML = String(result2);

// console.log(showResult);
// console.log(showResult1);
// showResult.style.color = `${randomColors}`;

gsap.fromTo(".color", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6 });
