import { lines } from "./utils.ts";

let currentCount = 0;
let maxCalories = -Infinity;

for (const calories of lines) {
  if (calories === "") {
    maxCalories = maxCalories > currentCount ? maxCalories : currentCount;
    currentCount = 0;
    continue;
  }
  currentCount += Number(calories);
}

console.log(maxCalories);
