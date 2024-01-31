const fs = require("fs");
const data = fs.readFileSync("README.md", "utf8");

const words = data.split(" ");

// const ReactWordCount = words.filter(
//   (word) => word.toLowerCase().includes("react")
// ).length;

const ReactWordCount = data.match(/react/gi ?? []).length;

console.log(`This README has ${words.length} words.`);
console.log(`This README has ${ReactWordCount} 'react' words`);

