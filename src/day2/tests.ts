import {
  assertEquals,
  assert,
} from "https://deno.land/std@0.192.0/testing/asserts.ts";
import { splitFileToLines } from "../utils.ts";
import {
  mapOutcomeToRoundScore,
  outcomeScore,
  shapeToChoose,
} from "./part2.ts";

Deno.test("PART 1", async (t) => {
  const input = await splitFileToLines("src/testdata/day2/input.txt");
  assert(input.length === 4);

  await t.step({
    name: "shapeToChoose",
    fn: () => {
      for (const line of input) {
        if (line === "") continue;
        const [opponent, outcome] = line.split(" ");
        assert(opponent === "A" || opponent === "B" || opponent === "C");
        assert(outcome === "X" || outcome === "Y" || outcome === "Z");

        let expected = "";
        switch (opponent) {
          case "A":
            if (outcome === "X") expected = "Z"; // Rock Loss  -> Scissors
            if (outcome === "Y") expected = "X"; // Rock Draw  -> Rock
            if (outcome === "Z") expected = "Y"; // Rock Win   -> Paper

            break;
          case "B":
            if (outcome === "X") expected = "X"; // Paper Loss -> Rock
            if (outcome === "Y") expected = "Y"; // Paper Draw -> Paper
            if (outcome === "Z") expected = "Z"; // Paper Win  -> Scissors
            break;
          case "C":
            if (outcome === "X") expected = "Y"; // Scissors Loss -> Paper
            if (outcome === "Y") expected = "Z"; // Scissors Draw -> Scissors
            if (outcome === "Z") expected = "X"; // Scissors Win  -> Rock
            break;
          default:
            assert(false, "Invalid opponent");
        }
        assert(expected !== "", "Expected is empty");

        const actual = shapeToChoose[`${opponent} ${outcome}`];
        assertEquals(actual, expected, "Shape Choice is not correct");
      }
    },
  });

  await t.step({
    name: "mapOutcomeToRoundScore",
    fn: () => {
      const outcomes = ["X", "Y", "Z"];

      for (const outcome of outcomes) {
        let expected = 0;
        if (outcome === "X") expected = 0;
        if (outcome === "Y") expected = 3;
        if (outcome === "Z") expected = 6;

        const actual = mapOutcomeToRoundScore(outcome);

        assertEquals(actual, expected, "Round Score is not correct");
      }
    },
  });

  const outcomeScoreTest = await t.step({
    name: "outcomeScore",
    fn: () => {
      for (const line of input) {
        if (line === "") continue;
        const [opponent, outcome] = line.split(" ");
        assert(opponent === "A" || opponent === "B" || opponent === "C");
        assert(outcome === "X" || outcome === "Y" || outcome === "Z");

        let expected = 0;
        switch (opponent) {
          case "A":
            if (outcome === "X") expected = 0 + 3; // Rock Loss == 0 -> Scissors == Z == 3
            if (outcome === "Y") expected = 3 + 1; // Rock Draw == 3 -> Rock == X == 1
            if (outcome === "Z") expected = 6 + 2; // Rock Win  == 6 -> Paper == Y == 2

            break;
          case "B":
            if (outcome === "X") expected = 0 + 1; // Paper Loss == 0 -> Rock == X == 1
            if (outcome === "Y") expected = 3 + 2; // Paper Draw == 3 -> Paper == Y == 2
            if (outcome === "Z") expected = 6 + 3; // Paper Win  == 6 -> Scissors == Z == 3
            break;
          case "C":
            if (outcome === "X") expected = 0 + 2; // Scissors Loss == 0 -> Paper == Y == 2
            if (outcome === "Y") expected = 3 + 3; // Scissors Draw == 3 -> Scissors == Z == 3
            if (outcome === "Z") expected = 6 + 1; // Scissors Win  == 6 -> Rock == X == 1
            break;
          default:
            assert(false, "Invalid opponent");
        }

        const actual = outcomeScore(opponent, outcome);

        assertEquals(actual, expected, "Outcome Score is not correct");
      }
    },
  });

  await t.step({
    name: "Final Score",
    fn: () => {
      const expected1 = 4;
      const opponent1 = "A";
      const outcome1 = "Y";
      const actual1 = outcomeScore(opponent1, outcome1);

      assertEquals(actual1, expected1, "Outcome Score 1 is not correct");

      const expected2 = 1;
      const opponent2 = "B";
      const outcome2 = "X";
      const actual2 = outcomeScore(opponent2, outcome2);

      assertEquals(actual2, expected2, "Outcome Score 2 is not correct");

      const expected3 = 7;
      const opponent3 = "C";
      const outcome3 = "Z";
      const actual3 = outcomeScore(opponent3, outcome3);

      assertEquals(actual3, expected3, "Outcome Score 3 is not correct");

      const expected = expected1 + expected2 + expected3;
      const actual = actual1 + actual2 + actual3;

      assertEquals(actual, expected, "Final Score is not correct");
    },
  });
});
