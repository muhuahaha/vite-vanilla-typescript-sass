function test(result: any) {
  return result;
}

// -------------------------

const win: any = {
  Rock: "Scissors",
  Scissors: "Paper",
  Paper: "Rock",
};

function rps(p1: string, p2: string) {
  let result = "";
  console.log(win[p1], "test");
  for (const [key, value] of Object.entries(win)) {
    if (p1 === p2) {
      result = "It's a draw";
    }
    if (p1 === key && p2 === value) {
      result = "The winner is p1";
    }
    if (p2 === key && p1 === value) {
      result = "The winner is p2";
    }
  }
  return result;
}

export const result = test(rps("Paper", "Scissors"));
export const result1 = test(rps("Scissors", "Paper"));
export const result2 = test(rps("Paper", "Scissors"));
