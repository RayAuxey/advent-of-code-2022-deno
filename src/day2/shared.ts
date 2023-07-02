// A,B,C are the opponent's choices
// X,Y,Z are the player's choices
// A=ROCK, B=PAPER, C=SCISSORS
// X=ROCK, Y=PAPER, Z=SCISSORS

type shapeScoreType = {
  [key: string]: 1 | 2 | 3;
};

export const shapeScore: shapeScoreType = {
  X: 1,
  Y: 2,
  Z: 3,
} as const;

type roundScoreType = {
  [key: string]: 0 | 3 | 6;
};

export const roundScore: roundScoreType = {
  loss: 0,
  draw: 3,
  win: 6,
} as const;

