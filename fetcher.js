const fs = require("fs");
const request = require("request");

let url = process.argv[2];
let path = process.argv[3];

request(url, (error, response, body) => {
  console.log("error:", error);

  fs.writeFile(path, body, () => {
    console.log(`Downloaded and saved ${body.length} bytes to ${path}`);
  });
});
