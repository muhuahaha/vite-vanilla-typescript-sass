import "./src/styles/style.scss";
import chroma from "chroma-js";

import hallo from "./src/ts/testModule.js";
// import centroid from "./src/ts/centroid.js";
// import robotPath from "./src/ts/robotPath.js";

console.log(hallo("Test"));

function filterValues(obj: object) {
  return "test";
}

// _________________

const colorDivs = document.querySelectorAll(".color");
const generateBtn = document.querySelector(".generate");
generateBtn.addEventListener("click", randomColors);

// Color Generator
function generateHex() {
  const hexColor = chroma.random();
  return hexColor;
}

function randomColors() {
  colorDivs.forEach((div: any, index) => {
    console.log(typeof div);
    const hexText = div.children[0];
    const randomColor: any = generateHex();
    console.log(randomColor);

    // Add the color to the bg
    div.style.backgroundColor = randomColor;
    // hexText.innerHTML = randomColor;

    // Check for contrast
    checkTextContrast(randomColor, hexText);
  });
}

function checkTextContrast(color: string, text: any) {
  const luminance = chroma(color).luminance();
  if (luminance > 0.5) {
    text.style.color = chroma(color).darken(3);
  } else {
    text.style.color = chroma(color).brighten(2.5);
  }
}

randomColors();

const result = filterValues({ tv: 4999, guitar: 5000, fork: 5001 });
const result1 = filterValues({ tv: 4999 });
const result2 = filterValues({ guitar: 5000 });

console.log(result);

const showResult = document.getElementById("result") as HTMLElement;
showResult.innerHTML = String(result);

const showResult1 = document.getElementById("result1") as HTMLElement;
showResult1.innerHTML = String(result1);

const showResult2 = document.getElementById("result2") as HTMLElement;
showResult2.innerHTML = String(result2);

// console.log(showResult);
// console.log(showResult1);
showResult.style.color = `${randomColors}`;
