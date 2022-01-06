#!/usr/bin/env node

import fs from "fs";
import path from "path";

const options = {
  encoding: "utf8",
  flag: "r",
};

const card = fs.readFileSync(path.join(path.resolve(), "bin/card"), options);

console.log(card);
