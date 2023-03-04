const express = require("express");
const app = express();


var hbs = require("express-handlebars"); //hbs=handlebars
const path = require('path');

app.use(express.json()); //allows to post json data when post request

//serving starting files

app.use(express.static(path.join(__dirname,"public")));


//connect mongodb database
require("./server/conn/conn");

//setup view engine
app.set('view engine', 'hbs');
app.engine('hbs',hbs.engine({
  extname:'hbs',
  defaultView:'default',
  layoutsDir:path.join(__dirname,'views'),
  partialsDir:path.join(__dirname,'views/partials')
}));

//calling routes
app.use('/', require('./server/router/router'));

app.listen(3000, function (){
  console.log('Server Started');
});
