var Datastore = require('nedb'), 

db = new Datastore({ filename: 'Testfilen' });

db.loadDatabase(function (err) {

});

module.exports = db;
