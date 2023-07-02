// A,B,C are the opponent's choices
// X,Y,Z are the player's choices
// A=ROCK, B=PAPER, C=SCISSORS
// X=ROCK, Y=PAPER, Z=SCISSORS

const shapeScore = {
  X: 1,
  Y: 2,
  Z: 3,
} as const;

const roundScore = {
  loss: 0,
  draw: 3,
  win: 6,
} as const;

type OutcomeScore = {
  [key: string]: number;
};

const outcomeScore: OutcomeScore = {
  // Opponent Selects Rock
  "A X": shapeScore.X + roundScore.draw, // Rock vs Rock
  "A Y": shapeScore.Y + roundScore.win, // Rock vs Paper
  "A Z": shapeScore.Z + roundScore.loss, // Rock vs Scissors

  // Opponent Selects Paper
  "B X": shapeScore.X + roundScore.loss, // Paper vs Rock
  "B Y": shapeScore.Y + roundScore.draw, // Paper vs Paper
  "B Z": shapeScore.Z + roundScore.win, // Paper vs Scissors

  // Opponent Selects Scissors
  "C X": shapeScore.X + roundScore.win, // Scissors vs Rock
  "C Y": shapeScore.Y + roundScore.loss, // Scissors vs Paper
  "C Z": shapeScore.Z + roundScore.draw, // Scissors vs Scissors
};

const input = await Deno.readTextFile("./src/day2/input.txt");
const lines = input.split("\n");

let totalScore = 0;

for (const line of lines) {
  if (line === "") continue;
  const [opponent, player] = line.split(" ");
  totalScore += outcomeScore[`${opponent} ${player}`];
}

export { totalScore as answer };

console.log(totalScore);
