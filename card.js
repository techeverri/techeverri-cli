import chalk from "chalk";
import { stripVTControlCharacters } from "node:util";

// https://github.com/chalk/chalk#chalklevel
chalk.level = 3;

const labelWidth = 8;

const employer = chalk.green("Shopify");

const basics = {
  name: "Tomas Echeverri",
  work: `Senior Software Developer at ${employer}`,
};

const links = [
  ["Website", `${chalk.ansi256(244)("https://")}${chalk.bold("techeverri.dev")}`],
  ["GitHub", `${chalk.ansi256(244)("https://github.com/")}${chalk.bold("techeverri")}`],
  ["LinkedIn", `${chalk.ansi256(244)("https://www.linkedin.com/in/")}${chalk.bold("tomechval")}`],
  ["npm", `${chalk.ansi256(244)("https://www.npmjs.com/")}${chalk.bold("~techeverri")}`],
  ["X", `${chalk.ansi256(244)("https://x.com/")}${chalk.bold("TomasEcheverri")}`],
];

export function renderCard() {
  const name = chalk.bold(basics.name);
  const footer = `${chalk.ansi256(244)("Run this card: ")}${chalk.bold("npx techeverri")}`;
  const rows = links.map(([label, value]) => `${label.padEnd(labelWidth)}  ${value}`);
  const width = Math.max(
    ...[name, basics.work, ...rows, footer].map((line) => stripVTControlCharacters(line).length),
  );

  return [name, basics.work, chalk.ansi256(244)("─".repeat(width)), ...rows, "", footer].join("\n");
}
