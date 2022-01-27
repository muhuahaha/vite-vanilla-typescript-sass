import "./src/styles/style.scss";

function centroid(...args: number[]): number[] | boolean {
  let [x1, y1, x2, y2, x3, y3] = args;
  const a = x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2);

  const x = (x1 + x2 + x3) / 3;
  const y = (y1 + y2 + y3) / 3;

  return a === 0 ? false : [+x.toFixed(2), +y.toFixed(2)];
}

// _________________

const result: number[] | boolean = centroid(0, 0, 3, 0, 3, 3);
const result1: number[] | boolean = centroid(2, 2, 8, -2, 0, -3);
const result2: number[] | boolean = centroid(0, 0, 3, 0, 3, 3);

const showResult: HTMLElement = document.getElementById("result")!;
showResult.innerHTML = String(result);

const showResult1 = document.getElementById("result1")!;
showResult1.innerHTML = String(result1);

const showResult2 = document.getElementById("result2")!;
showResult2.innerHTML = String(result2);

// console.log(showResult);
// console.log(showResult1);
