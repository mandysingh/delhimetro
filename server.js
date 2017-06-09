'use strict'
var Hapi = require('hapi');
var MySQL = require('mysql');
var Joi = require('joi');
var Bcrypt = require('bcrypt');
// Create a server with a host and port
var server = new Hapi.Server();


var connection = MySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nodeapp'
});




server.connection({
    host: 'localhost',
    port: 3000
});
connection.connect();

server.route({
    method: 'GET',
    path: '/helloworld',
    handler: function (request, reply) {
        return reply('hello world');
    }
});

// Add the route
server.route({
    method: 'GET',
    path: '/users',
    handler: function (request, reply) {

        connection.query('SELECT uid, username FROM users', function (error, results, fields) {
            if (error) throw error;
            console.log(results);
            reply(results);
        });

    }
});

server.route({
    method: 'GET',
    path: '/user/{uid}',
    handler: function (request, reply) {
        var uid = request.params.uid;

        connection.query('SELECT uid, username, email FROM users WHERE uid = "' + uid + '"', function (error, results, fields) {
            if (error) throw error;
            console.log(results);
            reply(results);
        });

    },
    config: {
        validate: {
            params: {
                uid: Joi.number().integer()
            }
        }
    }
});

server.route({
    method: 'POST',
    path: '/signup',

    handler: function (request, reply) {

        var username = request.payload.username;
        var email = request.payload.email;
        var password = request.payload.password;

        // var salt = Bcrypt.genSaltSync();
        // var encryptedPassword = Bcrypt.hashSync(password, salt);
        //
        // var orgPassword = Bcrypt.compareSync(password, encryptedPassword);

        connection.query('INSERT INTO users (username,email,password) VALUES ("' + username + '","' + email + '","' + password + '")', function (error, results, fields) {
            if (error) throw error;
            console.log(results);
            reply(results);
        });

    },
    config: {
        validate: {
            payload: {
                username: Joi.string().alphanum().min(3).max(30).required(),
                email: Joi.string().email(),
                password: Joi.string().regex(/^[a-zA-Z0-9]{8,30}$/)
            }
        }

    }
});

server.route({
    method: 'POST',
    path: '/login',

    handler: function (request, reply) {

        var email = request.payload.email;
        var password = request.payload.password;
        //
        // var salt = Bcrypt.genSaltSync();
        // var encryptedPassword = Bcrypt.hashSync(password, salt);
        //
        // var orgPassword = Bcrypt.compareSync(password, encryptedPassword);

        console.log(password);
        console.log(email);
        connection.query('select * from users where email ="'+ email + '" and password = "' +password +'"', function (error, results, fields) {
            if (error) throw error;
            console.log(results);
            reply(results);
        });

    },
    config: {
        validate: {
            payload: {
                email: Joi.string().email(),
                password: Joi.string().regex(/^[a-zA-Z0-9]{8,30}$/)
            }
        }

    }
});
    

server.route({
    method: 'POST',
    path: '/sendMessage',
    handler: function (request, reply) {

        var uid = request.payload.uid;
        var message = request.payload.message;
        var parentid = request.payload.parentid;
        connection.query('INSERT INTO messages (message,uid_fk,parent_id,time) VALUES ("' + message + '","' + uid + '","' + parentid + '","' + new Date() + '")', function (error, results, fields) {
            if (error) throw error;
            console.log(results);
            reply(results);
        });

    },
    config: {
        validate: {
            payload: {
                uid: Joi.number().integer(),
                parentid: Joi.number().integer(),
                message: [Joi.string(), Joi.number()]
            }
        }

    }
});

server.route({
    method: 'POST',
    path: '/messages',

    handler: function (request, reply) {

        var uid = request.payload.uid;

        console.log(uid);

        connection.query('SELECT * FROM messages WHERE uid_fk = "' + uid + '"', function (error, results, fields) {
            if (error) throw error;
            console.log(results);
            reply(results);
        });

    },
    config: {
        validate: {
            payload: {
                uid: Joi.number().integer()
            }
        }

    }
});

server.route({
    method: 'GET',
    path: '/messages',

    handler: function (request, reply) {

        connection.query('SELECT * FROM messages m inner join users u on u.uid = m.uid_fk ', function (error, results, fields) {
            if (error) throw error;
            console.log(results);
            reply(results);
        });

    },
});


server.route({
    method: 'POST',
    path: '/like',

    handler: function (request, reply) {
        var mid = request.params.mid;
        connection.query('UPDATE messages SET likes = likes+ 1 WHERE mid = "' + mid + '"', function (error, results, fields) {
            if (error) throw error;
            console.log(results);
            reply(results);
        });
    },
    config: {
        validate: {
            params: {
                mid: Joi.number().integer()
            }
        }

    }
});

server.route({
    method: 'POST',
    path: '/unlike',

    handler: function (request, reply) {
        var mid = request.params.mid;
        connection.query('UPDATE messages SET likes = likes-1 WHERE mid = "' + mid + '"', function (error, results, fields) {
            if (error) throw error;
            console.log(results);
            reply(results);
        });
    },
    config: {
        validate: {
            params: {
                mid: Joi.number().integer()
            }
        }

    }
});

server.route({
    method: 'POST',
    path: '/favorite',

    handler: function (request, reply) {
        var mid = request.params.mid;
        connection.query('UPDATE messages SET favorite =  1 WHERE mid = "' + mid + '"', function (error, results, fields) {
            if (error) throw error;
            console.log(results);
            reply(results);
        });
    },
    config: {
        validate: {
            params: {
                mid: Joi.number().integer()
            }
        }

    }
});

server.route({
    method: 'POST',
    path: '/unfavorite',

    handler: function (request, reply) {
        var mid = request.params.mid;
        connection.query('UPDATE messages SET favorite = 0 WHERE mid = "' + mid + '"', function (error, results, fields) {
            if (error) throw error;
            console.log(results);
            reply(results);
        });
    },
    config: {
        validate: {
            params: {
                mid: Joi.number().integer()
            }
        }

    }
});


server.route({
    method: 'DELETE',
    path: '/message/{uid}/{mid}',
    handler: function (request, reply) {
        var mid = request.params.mid;

        console.log(uid + "---" + mid);

        connection.query('DELETE FROM messages WHERE mid = "' + mid + '"', function (error, result, fields) {
            if (error) throw error;

            if (result.affectedRows) {
                reply(true);
            } else {
                reply(false);
            }

        });
    },
    config: {
        validate: {
            params: {
                mid: Joi.number().integer()
            }
        }

    }
});


// Start the server
server.start(function(err) {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
