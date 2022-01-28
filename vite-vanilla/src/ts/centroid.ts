export default function centroid(...args: number[]): number[] | boolean {
  let [x1, y1, x2, y2, x3, y3] = args;
  const a = x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2);

  const x = (x1 + x2 + x3) / 3;
  const y = (y1 + y2 + y3) / 3;

  return a === 0 ? false : [+x.toFixed(2), +y.toFixed(2)];
}
