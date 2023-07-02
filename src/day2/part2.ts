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

