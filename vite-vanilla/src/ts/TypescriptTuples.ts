// tuples

let arr = ["ryu", 25, true];
arr[0] = false;
arr[1] = "yoshi";
arr = [30, false, "yoshi"];

let tup: [string, number, boolean] = ["ryu", 25, true];
tup[0] = "ken";
tup[1] = 3;

console.log(tup);

let student: [string, number];
student = ["chun-li", 3423434];

export const result = tup;
export const result1 = arr;
export const result2 = "";
