import { splitFileToLines } from "../utils.ts";

let currentCount = 0;
let maxCalories = -Infinity;

const lines = await splitFileToLines("./src/day1/input.txt");

for (const calories of lines) {
  if (calories === "") {
    maxCalories = maxCalories > currentCount ? maxCalories : currentCount;
    currentCount = 0;
    continue;
  }
  currentCount += Number(calories);
}

export const answer = maxCalories;

console.log(answer);
