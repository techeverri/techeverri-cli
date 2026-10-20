import { describe, test, expect } from "bun:test";
import fs from "fs";
import { stripVTControlCharacters } from "node:util";
import { renderCard } from "./card.js";

describe("card", () => {
  test("should match the generated card", () => {
    expect.assertions(1);

    const card = fs.readFileSync(new URL("./bin/card", import.meta.url), "utf8");

    expect(renderCard()).toBe(card);
  });

  test("should match the rule to the longest line", () => {
    expect.assertions(1);

    const lines = stripVTControlCharacters(renderCard()).split("\n");
    const rule = lines[2];
    const longest = Math.max(...lines.filter((_, index) => index !== 2).map((line) => line.length));

    expect(rule.length).toBe(longest);
  });
});
