// -------------------------

function doubleton(n: number) {
  console.log(String(n).split(""));
  let i = n + 1;

  while (new Set([...String(i).split("")]).size !== 2) {
    i++;
  }

  return i;
}

export const result = doubleton(10);
export const result1 = doubleton(120);
export const result2 = doubleton(1000000);
