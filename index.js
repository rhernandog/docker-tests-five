const express = require("express");
const redis = require("redis");
const process = require("process");

const app = express();
const client = redis.createClient({
	host: "redis-server",
	port: 6379
});
client.set("visits", 0);

app.get("/", (req, res) => {
	client.get("visits", (err, visits) => {
		res.send(`<h1>Home Page</h1><h4>Number of visits: ${visits}</h4>`);
		client.set("visits", parseInt(visits) + 1);
	});
});

app.get("/exit", (req, res) => {
	process.exit(0);
	res.send("<h1>Exit Process Server Fail</h1>");
});

app.listen(8000, () => {
	console.log("Express server listening on port 8000.");
});
