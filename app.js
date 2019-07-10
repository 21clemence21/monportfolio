
const express = require('express')

const app = express()
const port = 3000;

var Database = require('./src/database');
let database = new Database();


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.use('/admin', require('./routes/admin'));
app.use('/', require('./routes/front'));
//app.use('/', require('./src/database.js'))

//EJS 
app.set('views', './views') //Les views seront dans le dossier ./views
app.set('view engine', 'ejs') //le moteur de view choisi est "ejs"

let message = "je suis un super message"

// c'est l'app qui écoute le port 
app.listen(port, () => console.log(`Example app listening on port !` + port))