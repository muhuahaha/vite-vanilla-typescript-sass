function happinessNumber(s: any) {
  let count = 0;

  count +=
    s.match(/(\(:)/g) != null && s.match(/(\(:)/g).length
      ? s.match(/(\(:)/g).length
      : 0;

  count +=
    s.match(/(:\))/g) != null && s.match(/(:\))/g).length
      ? s.match(/(:\))/g).length
      : 0;

  count -=
    s.match(/(:\()/g) != null && s.match(/(:\()/g).length
      ? s.match(/(:\()/g).length
      : 0;

  count -=
    s.match(/(\):)/g) != null && s.match(/(\):)/g).length
      ? s.match(/(\):)/g).length
      : 0;

  return count;
}
// -------------------------

export const result = happinessNumber(":()):(");
export const result1 = happinessNumber("(:)");
export const result2 = happinessNumber(":)::(()::");
