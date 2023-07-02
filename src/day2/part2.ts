import { splitFileToLines } from "../utils.ts";
import { roundScore } from "./shared.ts";
import { shapeScore } from "./shared.ts";
// import { outcomeScore } from "./shared.ts";

const lines = await splitFileToLines("./src/day2/input.txt");

type shapeChoicesType = {
  [key: string]: "X" | "Y" | "Z";
};

export const shapeToChoose: shapeChoicesType = {
  // Opponent Selects Rock
  "A X": "Z", // Rock Loss  -> Scissors
  "A Y": "X", // Rock Draw  -> Rock
  "A Z": "Y", // Rock Win   -> Paper

  // Opponent Selects Paper
  "B X": "X", // Paper Loss -> Rock
  "B Y": "Y", // Paper Draw -> Paper
  "B Z": "Z", // Paper Win  -> Scissors

  // Opponent Selects Scissors
  "C X": "Y", // Scissors Loss -> Paper
  "C Y": "Z", // Scissors Draw -> Scissors
  "C Z": "X", // Scissors Win  -> Rock
} as const;

export function mapOutcomeToRoundScore(outcome: string) {
  switch (outcome) {
    case "X":
      return roundScore.loss;
    case "Y":
      return roundScore.draw;
    case "Z":
      return roundScore.win;
    default:
      throw new Error(`Invalid outcome: ${outcome}`);
  }
}
