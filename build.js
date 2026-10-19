import fs from "fs";
import path from "path";
import url from "url";
import QRCode from "qrcode";
import { renderCard } from "./card.js";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const binDirectory = path.join(__dirname, "bin");
const cardFile = path.join(binDirectory, "card");
const qrFile = path.join(binDirectory, "qr");
const qrUrl = "https://techeverri.dev";
const qrMargin = 4;

const writeFileOptions = {
  encoding: "utf8",
  flag: "w",
};

function renderQr(qr) {
  const size = qr.modules.size;
  const total = size + qrMargin * 2;
  const isDark = (row, column) => {
    if (
      row < qrMargin ||
      row >= qrMargin + size ||
      column < qrMargin ||
      column >= qrMargin + size
    ) {
      return false;
    }

    return qr.modules.get(row - qrMargin, column - qrMargin);
  };

  const lines = [];

  for (let row = 0; row < total; row += 2) {
    let line = "\x1b[47m\x1b[30m";

    for (let column = 0; column < total; column++) {
      const top = isDark(row, column);
      const bottom = isDark(row + 1, column);

      if (top && bottom) {
        line += "█";
      } else if (top) {
        line += "▀";
      } else if (bottom) {
        line += "▄";
      } else {
        line += " ";
      }
    }

    lines.push(`${line}\x1b[0m`);
  }

  return `${lines.join("\n")}\n`;
}

fs.mkdirSync(binDirectory, { recursive: true });
fs.writeFileSync(cardFile, renderCard(), writeFileOptions);

const qr = QRCode.create(qrUrl, {
  errorCorrectionLevel: "M",
});

fs.writeFileSync(qrFile, renderQr(qr), writeFileOptions);
