import fs from "fs";
import path from "path";
import url from "url";
import chalk from "chalk";
import boxen from "boxen";

// https://github.com/chalk/chalk#chalklevel
chalk.level = 3;

const colombia = chalk.yellow("Colo") + chalk.blue("mb") + chalk.red("ia");

const employer = chalk.green.italic("Shopify");

const basics = {
  name: "Tomas Echeverri",
  handle: "techeverri",
  location: `Made in ${colombia}. Living in Sweden.`,
  work: `Senior Software Developer at ${employer}`,
};

const links = {
  github: `https://github.com/${chalk.green("techeverri")}`,
  linkedin: `https://www.linkedin.com/in/${chalk.blue("tomechval")}`,
  npm: `https://www.npmjs.com/${chalk.red("~techeverri")}`,
  twitter: `https://twitter.com/${chalk.cyan("TomasEcheverri")}`,
  website: "https://techeverri.dev",
  mastodon: `https://mastodon.social/${chalk.magenta("@techeverri")}`,
};

const text = `
${chalk.white(basics.name)} / ${chalk.white(basics.handle)}
${chalk.gray.italic(basics.location)}

     ${chalk.white.bold("Work:")} ${chalk.white(basics.work)}
  ${chalk.white.bold("Twitter:")} ${chalk.gray(links.twitter)}
 ${chalk.white.bold("Mastodon:")} ${chalk.gray(links.mastodon)}
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

const data = chalk.green(boxen(text.trim(), boxenOptions));

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const file = path.join(__dirname, "bin", "card");

const writeFileOptions = {
  encoding: "utf8",
  flag: "w",
};

fs.writeFileSync(file, data, writeFileOptions);
