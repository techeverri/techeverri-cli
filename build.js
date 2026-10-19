import fs from "fs";
import path from "path";
import url from "url";
import { renderCard } from "./card.js";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const file = path.join(__dirname, "bin", "card");

const writeFileOptions = {
  encoding: "utf8",
  flag: "w",
};

fs.mkdirSync(path.dirname(file), { recursive: true });
fs.writeFileSync(file, renderCard(), writeFileOptions);
