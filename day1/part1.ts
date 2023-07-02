const input = await Deno.open("day1/input.txt", { read: true });

let inputText = "";
const decoder = new TextDecoder();
for await (const chunk of input.readable) {
  inputText += decoder.decode(chunk);
}

const lines = inputText.split("\n");

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
