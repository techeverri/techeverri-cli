import { describe, test, expect } from "vitest";
import fs from "fs";

describe("build", () => {
  test("should generate card with colors", () => {
    expect.assertions(1);

    const card = fs.readFileSync("./bin/card", { encoding: "utf8", flag: "r" });

    expect(card).toMatchSnapshot();
  });
});
