
const fs = require("fs").promises;
const path = require("path");

async function write(data) {
  
 await fs.writeFile(path.resolve("src", "db", "db.json"), JSON.stringify(data, null, 2))

}

module.exports = write;