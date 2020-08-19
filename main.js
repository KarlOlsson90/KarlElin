const express = require("express");

const app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/test', (req,res) => {

res.send('testet')

})

let item = { 
    "title" : 'Namnet på saken',
    "content": 'Innehållet123'
}

app.post('/inlagg', function(req, res, next) {

    console.log(req.body)

    db.insert(req.body, function(error, newdoc) {
        res.json(req.body + " lades till!")
    })
});

app.put('/redigera/:id/', function (req, res) {

    db.update({ _id: req.params.id}, {title: req.body.title, content: req.body.content},{})

    res.json(req.body.title + " ändrades!")
  })

app.delete('/radera/:id/', function (req, res) {

    db.remove({ _id: req.params.id}, {})

    res.json("req.params.id togs bort")
    db.remove({koppling: req.params.id}, {multi: true})



  })


app.listen(3000);

let document = { 
    "title" : 'Namnet på saken',
    "content": 'Innehållet'
}

var Datastore = require('nedb'), 

db = new Datastore({ filename: 'Testfilen' });

console.log(db)

db.loadDatabase(function (err) {

});

app.post('/kommentar/:objektkoppling', function(req, res, next) {

    objektet = {
        "text": req.body,
        "koppling": req.params.objektkoppling
    }

    db.insert(objektet, function(error, newdoc) {


        res.json(objektet + " lades till!")
    })

});