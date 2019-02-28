const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./api');
app.use(cors());
require('./config/dataBase');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use('/api', routes);


module.exports = app;