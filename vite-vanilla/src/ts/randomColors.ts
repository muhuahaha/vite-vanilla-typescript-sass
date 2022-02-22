import chroma from "chroma-js";

const colorDivs = document.querySelectorAll(".color");
const generateBtn = document.querySelector(".generate")!;
generateBtn.addEventListener("click", randomColors);

// Color Generator
function generateHex() {
  const hexColor = chroma.random();
  return hexColor;
}

export default function randomColors() {
  colorDivs.forEach((div: any, _) => {
    const hexText = div.children[0];
    const randomColor: any = generateHex();

    // Add the color to the bg
    div.style.backgroundColor = randomColor;
    // hexText.innerHTML = randomColor;

    // Check for contrast
    checkTextContrast(randomColor.brighten(0.8), hexText);
  });
}

function checkTextContrast(color: string, text: any) {
  // console.log(color);
  const luminance = chroma(color).luminance();
  // console.log(text);
  if (luminance > 0.5) {
    text.style.color = chroma(color).darken(3);
  } else {
    text.style.color = chroma(color).brighten(3);
  }
}
