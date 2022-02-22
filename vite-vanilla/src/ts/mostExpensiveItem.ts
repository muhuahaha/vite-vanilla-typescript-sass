// -------------------------
type objWithItems = object;

function mostExpensiveItem(obj: objWithItems) {
  return Object.entries(obj).sort((a, b) => {
    return b[1] - a[1];
  })[0][0];
}

export const result = mostExpensiveItem({
  piano: 2000,
});
export const result1 = mostExpensiveItem({
  tv: 30,
  skate: 20,
});
export const result2 = mostExpensiveItem({
  tv: 30,
  skate: 20,
  stereo: 50,
});
