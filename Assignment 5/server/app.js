const express = require('express');
const configRoutes = require('./routes');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
configRoutes(app);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
