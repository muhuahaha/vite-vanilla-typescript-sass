function removeEntry(obj: any, itemName: string) {
  const copy = Object.assign({}, obj);
  console.log(obj, "test");
  console.log(copy, "test1");
  delete copy[itemName];

  return copy;
}

// -------------------------

export const result = removeEntry({ piano: 300, tv: 100, skate: 50 }, "skate");
export const result1 = removeEntry({ mirror: 500, painting: 1 }, "mirror");
export const result2 = removeEntry({ bike: 500, test: 100 }, "tv");
