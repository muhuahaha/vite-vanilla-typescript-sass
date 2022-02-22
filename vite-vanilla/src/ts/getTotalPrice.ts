// -------------------------

import { gsap } from "gsap";

interface IsItem {
  product: string;
  quantity: number;
  price: number;
}

function getTotalPrice(groceries: IsItem[]) {
  return +groceries
    .map((x) => +(x.quantity * x.price).toFixed(2))
    .reduce((a, b) => a + b)
    .toFixed(2);
}

export const result = getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.5 },
]);
export const result1 = getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.5 },
  { product: "Cereals", quantity: 1, price: 2.5 },
]);
export const result2 = getTotalPrice([
  { product: "Milk", quantity: 1, price: 1.5 },
  { product: "Eggs", quantity: 12, price: 0.1 },
  { product: "Bread", quantity: 2, price: 1.6 },
  { product: "Cheese", quantity: 1, price: 4.5 },
]);

gsap.fromTo(".color", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.6 });
