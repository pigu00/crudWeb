const fs = require("fs").promises;
const path = require("path");

async function read() {
  const data = await fs.readFile(path.resolve("src", "db", "db.json"));
  const parseData = JSON.parse(data);
  return parseData;
}

module.exports = read;
