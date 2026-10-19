#!/usr/bin/env node

import fs from "fs";
import path from "path";
import url from "url";
import { stripVTControlCharacters } from "node:util";
import { shouldUseColor } from "./color.js";

const options = {
  encoding: "utf8",
  flag: "r",
};

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const card = fs.readFileSync(path.join(__dirname, "card"), options);

console.log(shouldUseColor() ? card : stripVTControlCharacters(card));
