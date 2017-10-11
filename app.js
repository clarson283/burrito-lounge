var async = require('async');
var express = require('express');
var path = require('path');
var app = express();
var port = 3000;
var bodyParser = require('body-parser');
var r = require('rethinkdb');


app.use(express.static(__dirname + '/dest'));

// app.use("/", (req, res) => {
//  res.sendFile(__dirname + '/dest');
// });

app.use((req, res) => {
    res.status(400);
    res.send('404: This Shit Is Broken');
});

app.use(bodyParser.json());

//The REST routes for "orders".
app.route('/orders')
  .get(listTodoItems)
  .post(createTodoItem);

app.route('/orders/:id')
  .get(getTodoItem)
  .put(updateTodoItem)
  .delete(deleteTodoItem);

//If we reach this middleware the route could not be handled and must be unknown.
app.use(handle404);

//Generic error handling middleware.
app.use(handleError);


/*
 * Retrieve all todo items.
 */
function listTodoItems(req, res, next) {
  r.table('orders').orderBy({index: 'createdAt'}).run(req.app._rdbConn, function(err, cursor) {
    if(err) {
      return next(err);
    }

    //Retrieve all the orders in an array.
    cursor.toArray(function(err, result) {
      if(err) {
        return next(err);
      }

      res.json(result);
    });
  });
}

/*
 * Insert a new todo item.
 */
function createTodoItem(req, res, next) {
  var todoItem = req.body;
  todoItem.createdAt = r.now();

  console.dir(todoItem);

  r.table('orders').insert(todoItem, {returnChanges: true}).run(req.app._rdbConn, function(err, result) {
    if(err) {
      return next(err);
    }

    res.json(result.changes[0].new_val);
  });
}

/*
 * Get a specific todo item.
 */
function getTodoItem(req, res, next) {
  var todoItemID = req.params.id;

  r.table('orders').get(todoItemID).run(req.app._rdbConn, function(err, result) {
    if(err) {
      return next(err);
    }

    res.json(result);
  });
}

/*
 * Update a todo item.
 */
function updateTodoItem(req, res, next) {
  var todoItem = req.body;
  var todoItemID = req.params.id;

  r.table('orders').get(todoItemID).update(todoItem, {returnChanges: true}).run(req.app._rdbConn, function(err, result) {
    if(err) {
      return next(err);
    }

    res.json(result.changes[0].new_val);
  });
}

/*
 * Delete a todo item.
 */
function deleteTodoItem(req, res, next) {
  var todoItemID = req.params.id;

  r.table('orders').get(todoItemID).delete().run(req.app._rdbConn, function(err, result) {
    if(err) {
      return next(err);
    }

    res.json({success: true});
  });
}

/*
 * Page-not-found middleware.
 */
function handle404(req, res, next) {
  res.status(404).end('not found');
}

/*
 * Generic error handling middleware.
 * Send back a 500 page and log the error to the console.
 */
function handleError(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({err: err.message});
}

/*
 * Store the db connection and start listening on a port.
 */
function startExpress(connection) {
  app._rdbConn = connection;
  app.listen(config.express.port);
  console.log('Listening on port ' + config.express.port);
}


// var connection = null;
// r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
//     if (err) throw err;
//     connection = conn;
//
//     // r.db('test').tableCreate('authors').run(connection, function(err, result) {
//     //     if (err) throw err;
//     //     console.log(JSON.stringify(result, null, 2));
//     // });
// });
//
// r.db('test').tableCreate('authors').run(connection, function(err, result) {
//     if (err) throw err;
//     console.log(JSON.stringify(result, null, 2));
// });

function startExpress(connection) {
    app.listen(port, () => {
     console.log("Server listening on port " + port);
    });
}

async.waterfall([
    function connect(callback) {
        r.connect({
            host: 'localhost',
            port: 28015//,
            // authKey: '',
            // db: 'BURRITOBASE'
        }, callback)
    },
    function createDatabase(connection, callback) {
        //Create the database if needed.
        r.dbList().contains('burrito_base').do(function(containsDb) {
            return r.branch(
                containsDb,
                {created: 0},
                r.dbCreate('burrito_base')
            );
        }).run(connection, function(err) {
            callback(err, connection);
        });
    },
    function createTable(connection, callback) {
        //Create the table if needed.
        r.tableList().contains('orders').do(function(containsTable) {
            return r.branch(
                containsTable,
                {created: 0},
                r.db('burrito_base').tableCreate('orders')
            );
        }).run(connection, function(err) {
            callback(err, connection);
        });
        console.log(connection);

    }], function(err, connection) {
        if(err) {
            console.error(err);
            process.exit(1);
            return;
    }

    startExpress(connection);
});

