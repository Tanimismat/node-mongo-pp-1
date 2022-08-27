const http = require("http");
const colors = require("colors");
const url = require("url");
const fs = require("fs");

// console.log(url);

const server = http.createServer(function (req, res) {
	let path = req.url;
	console.log(path);
	switch (path) {
		case "/":
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(`<p>Welcome to Full Stack Development.</p>`);
			res.end();
			break;
		case "/read":
			fs.readFile("first.txt", (err, data) => {
				if (err) {
					res.write("Failed to read data!");
					res.end();
				} else {
					res.write(data);
					res.end();
				}
			});
			break;
		case "/write":
			fs.writeFile("second.txt", "I am a pull stack developer !!! ", (err) => {
				if (err) {
					res.write("Failed to write data!");
					res.end();
				} else {
					res.write("Data written successfully!");
					res.end();
				}
			});
			break;
		case "/append":
			fs.appendFile("first.txt", "No, it will be full not pull!", (err) => {
				if (err) {
					res.write("Failed to append data!");
					res.end();
				} else {
					res.write("Data appended successfully!");
					res.end();
				}
			});
			break;
		case "/delete":
			res.writeHead(200, { "Content-Type": "text/html" });
			res.write(`<p>Welcome to Full Stack Development.</p>`);
			res.end();
			break;
		// case "/about":
		// 	res.writeHead(200, { "Content-Type": "text/json" });
		// 	res.write(JSON.stringify({ course: "ACC!!!" }));
		// 	res.end();
		// 	break;
		default:
			res.writeHead(404, { "Content-Type": "text/html" });
			res.write(`<p>Page not found</p>`);
			res.end();
	}
	// res.writeHead(200, { "Content-Type": "text/html" });
	// res.write(`<This is home page/>`);
	// res.end();
	const address = `https://localhost:5000/www.google.com/search?q=(https%3A%2F%2Fwww.tutorialsteacher.com%2Fnodejs%2Fnodejs-modules)&rlz=1C1GIWA_enBD1014BD1014&oq=(https%3A%2F%2Fwww.tutorialsteacher.com%2Fnodejs%2Fnodejs-modules)&aqs=chrome..69i57.687j0j9&sourceid=chrome&ie=UTF-8`;

	const parsedURL = url.parse(address, true);
	// console.log(parsedURL);

	const queryObj = parsedURL.query;
	console.log(queryObj);
});
server.listen(5000);
console.log(colors.blue("Listening to the port"));
