var connect = require('connect');

connect.createServer(
	connect.static("/Users/wnelson/github/pangjs/Chapter 01")
).listen(5000);
