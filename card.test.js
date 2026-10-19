import { describe, test, expect } from "bun:test";
import fs from "fs";
import { renderCard } from "./card.js";

describe("card", () => {
  test("should match the generated card", () => {
    expect.assertions(1);

    const card = fs.readFileSync(new URL("./bin/card", import.meta.url), "utf8");

    expect(renderCard()).toBe(card);
  });
});
