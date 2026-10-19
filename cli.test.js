import { describe, test, expect } from "bun:test";
import { spawnSync } from "node:child_process";
import path from "node:path";
import url from "node:url";

const cli = path.join(path.dirname(url.fileURLToPath(import.meta.url)), "bin", "cli.js");

const baseEnvironment = { ...process.env };
delete baseEnvironment.FORCE_COLOR;
delete baseEnvironment.NO_COLOR;

function run(args = [], environment = {}) {
  return spawnSync(process.execPath, [cli, ...args], {
    encoding: "utf8",
    env: { ...baseEnvironment, ...environment },
  });
}

describe("cli", () => {
  test("prints help", () => {
    const result = run(["--help"]);

    expect(result.status).toBe(0);
    expect(result.stdout).toContain("Usage: techeverri");
  });

  test("prints only the QR code in QR mode", () => {
    const result = run(["--qr"]);

    expect(result.status).toBe(0);
    expect(result.stdout).toContain("Scan to open https://techeverri.dev");
    expect(result.stdout).toContain("\x1b[47m\x1b[30m");
    expect(result.stdout).not.toContain("Tomas Echeverri");
  });

  test("rejects unknown arguments", () => {
    const result = run(["--wat"]);

    expect(result.status).toBe(1);
    expect(result.stderr).toContain("Usage: techeverri");
  });

  test("prints an uncolored card when piped", () => {
    const result = run();

    expect(result.status).toBe(0);
    expect(result.stdout).toContain("Tomas Echeverri");
    expect(result.stdout).not.toContain("\x1b[");
  });

  test("prints a colored card when forced", () => {
    const result = run([], { FORCE_COLOR: "1" });

    expect(result.status).toBe(0);
    expect(result.stdout).toContain("\x1b[");
  });
});
