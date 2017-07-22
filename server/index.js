const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
var app = express();
app.use(bodyParser.json());
app.use( session({
  secret: 'a3nrlkjenflsdio',
  resave: false,
  saveUninitialized: false,
}))

app.listen(3000, () => {
  console.log('Server is starting on port 3000')
})
