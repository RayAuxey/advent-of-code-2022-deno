import { splitFileToLines } from "../utils.ts";

let currentCount = 0;
const maxCalories = [-Infinity, -Infinity, -Infinity];

for (const calories of await splitFileToLines("./src/day1/input.txt")) {
  if (calories === "") {
    updateMaxCalories(currentCount, maxCalories);
    currentCount = 0;
    continue;
  }
  currentCount += Number(calories);
}

export const answer = maxCalories.reduce((prev, curr) => {
  return prev + curr;
});

console.log(maxCalories, answer);

function updateMaxCalories(candidate: number, existing: number[]) {
  let minimumIndex = 0;
  const minimumInExisting = existing.reduce((prev, curr, i) => {
    if (curr < prev) {
      minimumIndex = i;
      return curr;
    }
    return prev;
  }, Infinity);
  if (candidate > minimumInExisting) existing[minimumIndex] = candidate;
}
