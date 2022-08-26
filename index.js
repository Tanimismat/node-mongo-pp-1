const http = require("http");
const colors = require("colors");

// console.log(http);

const server = http.createServer(function (req, res) {
	res.writeHead(200, { "content-Type": "text/plain" });
	res.end("hello");
});
server.listen(5000);
console.log(colors.green("Listening to the port"));
