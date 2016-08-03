 //var knex = require('knex');
//var Bookshelf = require('bookshelf')(knex);

 var knex = require('knex')({
        client: 'mysql',
        connection: {
            host     : 'gridebnodejs.db.8059635.hostedresource.com',
  user     : 'gridebnodejs',
  password : 'gri12DEB!@',
  database : 'gridebnodejs',
   charset: 'UTF8_GENERAL_CI'
        }
    });

    var Bookshelf = require('bookshelf')(knex);

    module.exports.DB = Bookshelf;

//var config = {
 // host     : 'gridebnodejs.db.8059635.hostedresource.com',
 // user     : 'gridebnodejs',
 // password : 'gri12DEB!@',
 // database : 'gridebnodejs',
 //  charset: 'UTF8_GENERAL_CI'
//};

//var DB = Bookshelf.initialize({
 //  client: 'mysql', 
 //  connection: config
//});

//module.exports.DB = DB;