const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dbConnect = require('./db-connect');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(morgan(':method  :status :url'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', require('./routes/index'));


(async function main() {
  await dbConnect();
  app.listen(3001);
  console.log('app listen 3001');
})();

module.exports = app;
