const express = require('express');
const Router = express.Router();
const {
    getUsers,
    postUser
} = require('./controller');

Router.get('/user', getUsers);
Router.post('/user', postUser);

module.exports = Router;