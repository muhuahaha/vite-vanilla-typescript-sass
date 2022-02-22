function millionInMonth(firstMonth: number, multiplier: number) {
  let save = firstMonth;
  let paycheck = firstMonth;

  let month = 0;

  while (save < 1000000) {
    paycheck *= multiplier;
    save += paycheck;
    month += 1;
  }
  return month + 1;
}

export const result = millionInMonth(10, 2);
export const result1 = millionInMonth(100, 1.01);
export const result2 = millionInMonth(50, 100);

50;
