var http = require("http");
var request = http.request({
  hostname: "localhost",
  port: 8080,
  method: "POST"
}, function(response) {
  response.on("data", function(chunk) {
    process.stdout.write(chunk.toString());
  })
});
request.end("Hello server");
