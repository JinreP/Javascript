const { error } = require("console");
import fs from "fs";
import { number } from "./sum.js";

console.log("hello world");

fs.readFile("README.text", "utf8", (error, database) => {
  if (error) {
    console.log("error reading file");
    return;
  }
  console.log(`File content : `, database);
});
//absolute
// fs.readFile(
//   "/Users/25LP3874/Documents/GitHub/javascript/test.html",
//   "utf8",
//   (error, database) => {
//     console.log(database);
//   }
// );
//relative
fs.writeFileSync("README.text", "utf8", (error, database) => {
  if (error) {
    console.log("Error reading file in second read:", error.message);
    return;
  }
  console.log("hi");
});
