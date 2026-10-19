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

const boxenOptions = {
  margin: 1,
  padding: 1,
  borderStyle: "single",
  borderColor: "green",
};

export function renderCard() {
  const text = `
${chalk.bold(basics.name)}

     ${chalk.bold("Work:")} ${basics.work}
        ${chalk.bold("X:")} ${chalk.dim(links.x)}
   ${chalk.bold("GitHub:")} ${chalk.dim(links.github)}
      ${chalk.bold("npm:")} ${chalk.dim(links.npm)}
 ${chalk.bold("LinkedIn:")} ${chalk.dim(links.linkedin)}
  ${chalk.bold("Website:")} ${chalk.magenta(links.website)}

     ${chalk.bold("Card:")} ${chalk.dim("npx techeverri")}
`;

  return boxen(text.trim(), boxenOptions);
}
