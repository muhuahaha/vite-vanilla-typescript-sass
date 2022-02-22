interface IsItem {
  [key: string]: number;
}

function addName(obj: IsItem, name: string, value: number) {
  obj[name] = value;
  return { ...obj };
}

// ----------------------------

interface UID {
  name: string;
  age: number;
}

const addUID = (obj: UID) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let docOne = addUID({ name: "yoshi", age: 40 });

console.log(docOne.name);

const addUID2 = <T extends UID>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

//with interfaces
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docFour: Resource<object> = {
  uid: 1,
  resourceName: "person",
  data: { name: "shaun" },
};

const docFive: Resource<string[]> = {
  uid: 2,
  resourceName: "shopingList",
  data: ["bread", "milk"],
};

console.log(docFour);
console.log(docFive);

let docTwo = addUID2({ name: "yoshi", age: 40 });
let docThree = addUID2({ name: "yoshi", age: 40 });

console.log(docTwo.name);
console.log(docThree.age);

export const result = addName({}, "Brutus", 300);
export const result1 = addName({ piano: 500 }, "Brutus", 400);
export const result2 = addName({ piano: 500, stereo: 300 }, "Caligula", 440);
