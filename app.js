const express = require("express");
const routes = require('./routes/routes')
const app = express();


//Middelware
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use('/', routes)


app.listen(3000);

