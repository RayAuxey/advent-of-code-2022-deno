import { splitFileToLines } from "../utils.ts";
import { outcomeScore } from "./shared.ts";

const lines = await splitFileToLines("./src/day2/input.txt");

console.log(calculateTotalScore(lines));

export function calculateTotalScore(lines: string[]) {
  let totalScore = 0;

  for (const line of lines) {
    if (line === "") continue;
    const [opponent, player] = line.split(" ");
    totalScore += outcomeScore[`${opponent} ${player}`];
  }

  return totalScore;
}
