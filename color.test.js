import { describe, test, expect } from "bun:test";
import { shouldUseColor } from "./bin/color.js";

const tty = { isTTY: true };
const pipe = { isTTY: false };

describe("shouldUseColor", () => {
  test("uses color on a TTY", () => {
    expect(shouldUseColor({}, tty)).toBe(true);
  });

  test("disables color when stdout is not a TTY", () => {
    expect(shouldUseColor({}, pipe)).toBe(false);
  });

  test("respects NO_COLOR", () => {
    expect(shouldUseColor({ NO_COLOR: "1" }, tty)).toBe(false);
  });

  test("ignores an empty NO_COLOR", () => {
    expect(shouldUseColor({ NO_COLOR: "" }, tty)).toBe(true);
  });

  test("respects TERM=dumb", () => {
    expect(shouldUseColor({ TERM: "dumb" }, tty)).toBe(false);
  });

  test("FORCE_COLOR enables color when piped", () => {
    expect(shouldUseColor({ FORCE_COLOR: "1" }, pipe)).toBe(true);
  });

  test("FORCE_COLOR=0 disables color on a TTY", () => {
    expect(shouldUseColor({ FORCE_COLOR: "0" }, tty)).toBe(false);
  });

  test("FORCE_COLOR=false disables color on a TTY", () => {
    expect(shouldUseColor({ FORCE_COLOR: "false" }, tty)).toBe(false);
  });

  test("FORCE_COLOR overrides NO_COLOR", () => {
    expect(shouldUseColor({ FORCE_COLOR: "1", NO_COLOR: "1" }, pipe)).toBe(true);
  });
});
