import { describe, test, expect } from "bun:test";
import { renderCard } from "../src/card.js";

describe("card", () => {
  test("should render the card with colors", () => {
    expect.assertions(1);

    expect(renderCard()).toMatchSnapshot();
  });
});
