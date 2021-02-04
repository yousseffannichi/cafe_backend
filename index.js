//after installing express we need to require it ot use it
const express = require('express');
//const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cafe_backend')
let db = mongoose.connection;
//assigns to variable app, app Init
const app = express();
//app get will get data on main page /, pass on function with params
//required and response
//home route
app.get('/', (req, res) => {
  //sends it to the browser
  res.send("Hello");
});

app.get('/books/add', (req, res) => {

})
//listens to port
//navigate to localhost 3000
// http://localhost:3000/
app.listen(3000, function(){
  console.log("server started on port 3000");
});
