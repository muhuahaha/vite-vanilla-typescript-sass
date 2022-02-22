// ------------------------- Type Signature
// let greet: Function;

// example 1

let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
  return `${name} says ${greeting}`;
};

// example 2
let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if ((action = "add")) {
    return numOne + numTwo;
  }
  return numOne - numTwo;
};

// example 3

let logDetails: (obj: { name: string; age: number }) => void;

type person = { name: string; age: number };

logDetails = (ninja: person) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
};

export const result = greet("Yoo", "yoo");
export const result1 = calc(1, 2, "add");
export const result2 = logDetails({ name: "Joe", age: 34 });
