const jumpAndRun: any = {
  run: "_",
  jump: "|",
};

function runningAthlete(act: string[], txt: string) {
  return txt
    .split("")
    .map((x, i) =>
      x === jumpAndRun[act[i]] ? x : act[i] === "run" ? "/" : "x"
    )
    .join("");
}

export const result = runningAthlete(
  ["run", "jump", "run", "jump", "run"],
  "_|_|_"
);
export const result1 = runningAthlete(
  ["run", "jump", "run", "run", "run"],
  "_|_|_"
);
export const result2 = runningAthlete(
  ["jump", "jump", "jump", "jump", "jump"],
  "_|_|_"
);
