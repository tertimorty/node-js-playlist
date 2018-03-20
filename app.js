var express = require('express');
var todoController = require('./controlers/todocontrollers');

	var app = express();


//uzstadit templeitu motoru
app.set('view engine', 'ejs');


//patstavigie faili
app.use(express.static('./public'));

//fire controllers

todoController(app);

//klausies portu
app.listen(3000);
console.log('tu klausies portu 3000');


//still dont understand why you need jQuery.. you can just have a form where the input field has a name property.. Then via Node.js check for the POST Request and update that to the data variable and reload the page...﻿