const express = require('express')
const app = express()
const port = 3000
const expressValidator = require('express-validator')


require('./data/Legends_db.js')


//Middleware
const exphbs  = require('express-handlebars');
app.use(express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(express.json);
app.use(express.urlencoded());
app.use(expressValidator());

//controllers
require('./controllers/legends.js')(app)


//routes
app.get('/', (req, res) => {
  res.send('home')
});

app.get('/posts/new', (req, res) => {
  res.render('new-legends')
}); 

// Start Server
app.listen(port, () => {
  console.log('Legends of Tomorrow on port http://localhost:3000');
});

module.exports = app;