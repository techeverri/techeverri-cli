import { describe, test, expect } from "bun:test";
import fs from "fs";
import { renderCard } from "../src/card.js";

describe("card", () => {
  test("should match the generated card", () => {
    expect.assertions(1);

    const card = fs.readFileSync(new URL("../dist/card", import.meta.url), "utf8");

    expect(renderCard()).toBe(card);
  });
});
