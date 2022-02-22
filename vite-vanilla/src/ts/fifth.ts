// -------------------------

type StringOrNumOrBoolean = string | number | boolean;

function fifth(...args: StringOrNumOrBoolean[]): string {
  if (args.length < 4) {
    return "Not enough arguments";
  }
  return typeof args[4];
}

export const result = fifth(1, 2, 3, 4, 5);
export const result1 = fifth("a", 2, 3, true, "five");
export const result2 = fifth();
