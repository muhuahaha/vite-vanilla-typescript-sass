const destinationNo1 = ["e", "n", "e", "e", "n"];
const destinationNo2 = ["w", "n", "w", "n", "w", "w", "n"];

function backToHome(d: string[]) {
  let x = 0;
  let y = 0;
  const arr = d;
  for (let i = 0; i < d.length; i++) {
    if (arr[i] === "n") {
      y += 1;
    }
    if (arr[i] === "s") {
      y -= 1;
    }
    if (arr[i] === "w") {
      x -= 1;
    }
    if (arr[i] === "e") {
      x += 1;
    }
  }
  return [x, y];
}

console.log(backToHome(destinationNo1), "d No1");
console.log(backToHome(destinationNo2), "d No2");

function robotPath(commands: string[]): boolean {
  const destinationOne = backToHome(destinationNo1).join("");
  const destinationTwo = backToHome(destinationNo2).join("");

  const myRobot = backToHome(commands).join("");

  return myRobot === destinationOne || myRobot === destinationTwo;
}

// _________________

const result = robotPath(["s", "e", "e", "n", "n", "e", "n"]);
const result1 = robotPath([
  "n",
  "e",
  "s",
  "w",
  "n",
  "e",
  "s",
  "w",
  "w",
  "s",
  "n",
  "e",
]);
const result2 = robotPath([
  "n",
  "s",
  "n",
  "n",
  "e",
  "n",
  "w",
  "w",
  "s",
  "w",
  "w",
  "w",
  "n",
]);
