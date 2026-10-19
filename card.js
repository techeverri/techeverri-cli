import boxen from "boxen";
import chalk from "chalk";

// https://github.com/chalk/chalk#chalklevel
chalk.level = 3;

const employer = chalk.green.italic("Shopify");

const basics = {
  name: "Tomas Echeverri",
  work: `Senior Software Developer at ${employer}`,
};

const links = {
  github: `https://github.com/${chalk.green("techeverri")}`,
  linkedin: `https://www.linkedin.com/in/${chalk.blue("tomechval")}`,
  npm: `https://www.npmjs.com/${chalk.red("~techeverri")}`,
  x: `https://x.com/${chalk.cyan("TomasEcheverri")}`,
  website: "https://techeverri.dev",
};

const text = `
${chalk.white(basics.name)}

     ${chalk.white.bold("Work:")} ${chalk.white(basics.work)}
        ${chalk.white.bold("X:")} ${chalk.gray(links.x)}
   ${chalk.white.bold("GitHub:")} ${chalk.gray(links.github)}
      ${chalk.white.bold("npm:")} ${chalk.gray(links.npm)}
 ${chalk.white.bold("LinkedIn:")} ${chalk.gray(links.linkedin)}
  ${chalk.white.bold("Website:")} ${chalk.magenta(links.website)}

     ${chalk.white.bold("Card:")} npx techeverri
`;

const boxenOptions = {
  margin: 1,
  padding: 1,
  borderStyle: "single",
};

export function renderCard() {
  return chalk.green(boxen(text.trim(), boxenOptions));
}
