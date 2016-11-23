'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000 });

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

        return reply([
                {
                    id: 3,
                    title: 'Il vecchio e il mare',
                    author: 'Ernest Hemingway',
                    rating: 4.5,
                    isNew: true,
                    isAvailable: true
                },
                {
                    id: 16,
                    title: 'Harry Potter e la pietra filosofale',
                    author: 'J.K. Rowling',
                    rating: 4.1,
                    isNew: false,
                    isAvailable: true
                },
                {
                    id: 9,
                    title: 'Il ritratto di Dorian Gray',
                    author: 'Oscar Wilde',
                    rating: 4.2,
                    isNew: true,
                    isAvailable: false
                }
            ]);
    }
    });

})


server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at localhost:3000`);
});