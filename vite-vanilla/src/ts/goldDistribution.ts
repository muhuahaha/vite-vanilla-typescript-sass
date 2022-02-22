function goldDistribution(gold: number[]) {
  const l = gold.length;
  let i = 0;

  const total = [];

  const matt = [];
  const muba = [];

  while (i < l + 1) {
    const left = gold[0];
    const right = gold[gold.length - 1];
    if (left > right) {
      total.push([left, right]);
      gold.shift();
    }
    if (left < right) {
      total.push([left, right]);
      gold.pop();
    }
    if (left === right) {
      total.push([left, right]);
      gold.shift();
    }

    i++;
  }

  for (let i = 0; i < total.length - 1; i++) {
    if (i % 2 === 0) {
      muba.push(Math.max(...total[i]));
    }
    if (i % 2 !== 0) {
      matt.push(Math.max(...total[i]));
    }
  }

  return [muba.reduce((a, b) => a + b), matt.reduce((a, b) => a + b)];
}

export const result = goldDistribution([4, 2, 9, 5, 2, 7]);
export const result1 = goldDistribution([10, 1000, 2, 1]);
export const result2 = goldDistribution([10, 9, 1, 2, 8, 4]);
