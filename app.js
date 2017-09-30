var express = require("express");
var path = require('path');
var app = express();
var port = 3000;

app.use(express.static(__dirname + '/dest'));
// app.use(express.static(path.resolve(__dirname, '..', '/dest')));


// app.use("/", (req, res) => {
//  res.sendFile(__dirname + '/dest');
// });

// app.use((req, res) => {
//     res.status(400);
//     res.send('404: This Shit Is Broken');
// });

app.listen(port, () => {
 console.log("Server listening on port " + port);
});