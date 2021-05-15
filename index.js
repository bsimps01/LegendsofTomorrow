//require("dotenv");
const express = require('express')
const port = 3000
//const expressValidator = require('express-validator')
const app = express()
const legend = require("./controllers/index.js");

require('./data/Legends_db.js');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(expressValidator());

//controllers
require('./controllers/legends.js');
//route
app.use(legend)

// Start Server
app.listen(port, () => {
  console.log('Legends of Tomorrow on port http://localhost:3000');
});

module.exports = app;