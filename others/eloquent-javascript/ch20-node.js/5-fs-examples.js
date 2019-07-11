/*var fs = require("fs");
fs.readFile("5-fs-example-file.txt", "utf8", function(error, text) {
  if (error)
    throw error;
  console.log("The file contained:", text);
});*/

/*var fs = require("fs");
fs.readFile("5-fs-examples-file.txt", "utf8", function(error, buffer) {
  if (error)
    throw error;
  console.log("The file contained", buffer.length, "bytes.",
              "The first byte is:", buffer[0]);
});*/

/*var fs = require("fs");
fs.writeFile("5-fs-examples-graffiti.txt", "Node was here", function(err) {
  if (err)
    console.log("Failed to write file:", err);
  else
    console.log("File written");
});*/

var fs = require("fs");
console.log(fs.readFileSync("5-fs-examples-file.txt", "utf8"));
