const express = require("express");
const app = express();
const static = express.static(__dirname + '/public');
const configRoutes = require('./routes');

const exphbs = require('express-handlebars');
app.use('/public', static);
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

configRoutes(app);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
