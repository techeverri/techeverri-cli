#!/usr/bin/env node

import fs from "fs";
import path from "path";
import url from "url";
import { parseArgs, stripVTControlCharacters } from "node:util";
import { shouldUseColor } from "./color.js";

const usage = `Usage: techeverri [--qr] [--help]

Options:
  --qr    Print a QR code for https://techeverri.dev
  --help  Show this help`;

const options = {
  encoding: "utf8",
  flag: "r",
};

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

let values;

try {
  ({ values } = parseArgs({
    options: {
      qr: { type: "boolean" },
      help: { type: "boolean" },
    },
    allowPositionals: false,
  }));
} catch {
  console.error(usage);
  process.exit(1);
}

if (values.help) {
  console.log(usage);
} else if (values.qr) {
  const qr = fs.readFileSync(path.join(__dirname, "qr"), options);

  console.log("Scan to open https://techeverri.dev");
  console.log();
  process.stdout.write(qr);
} else {
  const card = fs.readFileSync(path.join(__dirname, "card"), options);

  console.log(shouldUseColor() ? card : stripVTControlCharacters(card));
}
