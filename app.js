var express = require("express");
var path = require('path');
var app = express();
var port = 3000;
var r = require('rethinkdb');

app.use(express.static(__dirname + '/dest'));
// app.use(express.static(path.resolve(__dirname, '..', '/dest')));


// app.use("/", (req, res) => {
//  res.sendFile(__dirname + '/dest');
// });

app.use((req, res) => {
    res.status(400);
    res.send('404: This Shit Is Broken');
});

// var connection = null;
// r.connect( {host: 'localhost', port: port}, function(err, conn) {
//     if (err) throw err;
//     connection = conn;
// });
//
// console.log(connection);

// r.tableCreate('todos').run(req.app._rdbConn, function(err, cursor) {
// // r.db('test').tableCreate('authors').run(connection, function(err, result) {
//     if (err) throw err;
//     console.log(JSON.stringify(result, null, 2));
// });


app.listen(port, () => {
 console.log("Server listening on port " + port);
});