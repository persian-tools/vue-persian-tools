/* eslint-disable */

const fs = require("fs-extra");
const chalk = require("chalk");

async function copyTypes() {
    console.log("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ");
    console.log();
    console.log();
    await fs.copy("./src/types", "./dist/types");
    console.log(chalk.bold(chalk.green("types copied")));
    console.log(chalk.yellow("from: ") + " /src/types    " + chalk.cyan("to: ") + " /dist/types");
    console.log();
    console.log();
    console.log("_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ ");
}
module.exports = copyTypes;
