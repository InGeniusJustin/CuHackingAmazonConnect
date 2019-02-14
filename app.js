const express = require('express');
const app = express();
const https = require('https');
const fs = require("fs");
const path = require('path');
const router = express.Router();

router.get("/", (req, res) =>
{
	res.sendFile(path.join(__dirname + '/html/example.html'));
})

app.use("/lib", express.static(__dirname + '/lib'));
app.use('/', router);
https.createServer({
	key: fs.readFileSync('server.key'),
	cert: fs.readFileSync('server.cert')
}, app).listen(process.env.port || 8080);

console.log("running on Port 8080");
