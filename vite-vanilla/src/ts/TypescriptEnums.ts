//with interfaces

// ENUMS

enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
}

interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const docOne: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.DIRECTOR,
  data: { title: "name of the wind" },
};

const docTwo: Resource<object> = {
  uid: 2,
  resourceType: ResourceType.PERSON,
  data: { name: "yoshi" },
};

console.log(docOne);
console.log(docTwo);

export const result = docOne.resourceType;
export const result1 = docTwo.resourceType;
export const result2 = "";
