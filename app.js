var express = require("express");
var path = require('path');
var app = express();
var port = 3000;
var r = require('rethinkdb');


app.use(express.static(__dirname + '/dest'));

// app.use("/", (req, res) => {
//  res.sendFile(__dirname + '/dest');
// });

app.use((req, res) => {
    res.status(400);
    res.send('404: This Shit Is Broken');
});

var connection = null;
r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
    if (err) throw err;
    connection = conn;

    // r.db('test').tableCreate('authors').run(connection, function(err, result) {
    //     if (err) throw err;
    //     console.log(JSON.stringify(result, null, 2));
    // });
});

r.db('test').tableCreate('authors').run(connection, function(err, result) {
    if (err) throw err;
    console.log(JSON.stringify(result, null, 2));
});


app.listen(port, () => {
 console.log("Server listening on port " + port);
});