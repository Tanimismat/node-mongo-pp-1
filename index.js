const http = require("http");
const colors = require("colors");

// console.log(http);

const server = http.createServer(function (req, res) {
	console.log(req.url);
	let path = req.url;
	switch (path) {
		case "/":
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(`<p>Welcome to Full Stack Development.</p>`);
			res.end();
			break;
		default:
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(`<p>Page not found</p>`);
			res.end();
	}
	// res.writeHead(200, { "Content-Type": "text/html" });
	// res.write(`<This is home page/>`);
	// res.end();
});
server.listen(5000);
console.log(colors.blue("Listening to the port"));
