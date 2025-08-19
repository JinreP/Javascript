import chalk from "chalk";
import fs from "fs";

console.log(chalk.red("hello world"));

fs.readFile("README.text", "utf8", (error, database) => {
  if (error) {
    console.log(chalk.red("Error reading file"));
    return;
  }
  console.log(chalk.green(`File content: ${database}`));
});

try {
  fs.writeFileSync("README.text", "wassup betch");
  console.log(chalk.blue("File written successfully"));
} catch (error) {
  console.log(chalk.red("Error writing to file:", error.message));
}
