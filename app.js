const express = require('express')
const app     = express()
const hbs     = require('hbs') 

app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

// route

app.get('/users/:username/:age', (req, res, next) => {
  // note: "params"  
  res.send(req.params);
  })

app.get('/users/:username/books/:bookId', (req, res, next) => {
    res.send(req.params);
  })

app.get('/search', (req, res, next) => {
  // note: "query"  
  res.send(req.query);
  })

app.get('/', function (req, res) {
  res.render('index')
  // console.log('Hi' + req);
  // res.send(200);
})








app.listen(3000, () => console.log('App listening on port 3000!'))