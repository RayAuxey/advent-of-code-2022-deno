import {
  assertEquals,
  assert,
} from "https://deno.land/std@0.192.0/testing/asserts.ts";
import { splitFileToLines } from "../utils.ts";
import { mapOutcomeToRoundScore, shapeToChoose } from "./part2.ts";

  await t.step({
    name: "shapeToChoose",
    fn: () => {
      for (const line of input) {
        if (line === "") continue;
        const [opponent, outcome] = line.split(" ");
        assert(opponent === "A" || opponent === "B" || opponent === "C");
        assert(outcome === "X" || outcome === "Y" || outcome === "Z");

        let expected = "";
        console.log(`opponent: ${opponent}, outcome: ${outcome}`);
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
        console.log(`expected: ${expected}`);
        assert(expected !== "", "Expected is empty");

        const actual = shapeToChoose[`${opponent} ${outcome}`];
        console.log(`actual: ${actual}, expected: ${expected}`);

        assertEquals(actual, expected, "Shape Choice is not correct");
      }
    },
  });
