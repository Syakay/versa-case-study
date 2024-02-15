const fs = require("fs");

function generateBigBangArray() {
  const array = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push("BIGBANG");
    } else if (i % 3 === 0) {
      array.push("BIG");
    } else if (i % 5 === 0) {
      array.push("BANG");
    } else {
      array.push(i.toString());
    }
  }
  return array;
}

const result = generateBigBangArray();
fs.writeFileSync("output.json", JSON.stringify(result), "utf8");
console.log("The array is successfully generated and saved to output.json!");
