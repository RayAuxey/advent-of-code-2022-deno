import { splitFileToLines } from "../utils.ts";

let currentCount = 0;
let maxCalories = -Infinity;

for (const calories of await splitFileToLines("./src/day1/input.txt")) {
  if (calories === "") {
    maxCalories = maxCalories > currentCount ? maxCalories : currentCount;
    currentCount = 0;
    continue;
  }
  currentCount += Number(calories);
}

export const answer = maxCalories;

console.log(answer);
