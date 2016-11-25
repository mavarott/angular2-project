'use strict';

const Uuid = require('node-uuid');
const Nano = require('nano')('http://localhost:5984');
const Hapi = require('hapi');

// Create the server
const server = new Hapi.Server();
server.connection({ port: 3000 });

var dbName = 'virtualibrarydb';


// clean up the database we created previously
Nano.db.destroy(dbName, function() {
  // create a new database
  Nano.db.create(dbName, function() {
    // specify the database we are going to use
    var vldb = Nano.db.use(dbName);
    // and insert a document in it
    vldb.insert({
                    id: 3,
                    title: 'Il vecchio e il mare',
                    author: 'Ernest Hemingway',
                    rating: 4.5,
                    isNew: true,
                    isAvailable: true
                }, function(err, body, header) {
                    if (err) {
                        console.log('[vldb.insert] ', err.message);
                        return;
                    }
                    console.log('you have inserted Hemingway.')
    });
    vldb.insert({
                    id: 16,
                    title: 'Harry Potter e la pietra filosofale',
                    author: 'J.K. Rowling',
                    rating: 4.1,
                    isNew: false,
                    isAvailable: true
                }, function(err, body, header) {
                    if (err) {
                        console.log('[vldb.insert] ', err.message);
                        return;
                    }
                    console.log('you have inserted Rowling.')
    });
    vldb.insert({
                    id: 9,
                    title: 'Il ritratto di Dorian Gray',
                    author: 'Oscar Wilde',
                    rating: 4.2,
                    isNew: true,
                    isAvailable: false
                }, function(err, body, header) {
                    if (err) {
                        console.log('[vldb.insert] ', err.message);
                        return;
                    }
                    console.log('you have inserted Wilde.')
    });
  });
});


server.register(require('inert'), (err) => {
    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/index.html',
        handler: function (request, reply) {
            reply.file('./index.html');
        }
    });

    server.route({
    method: 'GET',
    path: '/{param*}',
    handler: {
        directory: {
            path: './'
            //,
            //listing: true
        }
    }
    });

    // to test http requests in angular 2
    server.route({  
    method: 'GET',
    path:'/books',
    handler: function (request, reply) {

        var vldb = Nano.db.use(dbName);
        vldb.list({"include_docs": true}, function(err, body) {
            if (!err) {
                console.log(body);
                var books = [];
                body.rows.forEach(function(element) {
                    books.push(element.doc);
                })
                reply(books);
            }
        });
        
    }
    });

    // to test http requests in angular 2
    server.route({  
    method: 'POST',
    path:'/book',
    handler: function (request, reply) {

        var vldb = Nano.db.use(dbName);
        vldb.insert(request.payload, function(err, body, header) {
                    if (err) {
                        console.log('[vldb.insert] ', err.message);
                        return;
                    }
                    console.log('you have inserted new book.');
                    reply(request.payload);
        });
        
    }
    });

    server.route({  
    method: 'DELETE',
    path:'/book',
    handler: function (request, reply) {

        var vldb = Nano.db.use(dbName);
        vldb.get(request.query.id, {"include_docs": true}, function(err, body) {
            if (!err) {
                vldb.destroy(request.query.id, request.query.rev, function(err, body, header) {
                    if (err) {
                        console.log('[vldb.destroy] ', err.message);
                        return;
                    }
                    console.log('you have removed the book.');
                });
                reply(body);
            }
        });
        
        
    }
    });

})


server.start((err) => {

    if (err) {
        return reply(Boom.wrap(err, 'Errore di connessione'));
    }
    console.log(`Server running at localhost:3000`);
});