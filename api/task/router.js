const express = require('express');
const Router = express.Router();
const {
    getTasks,
    postTask,
    updateTask,
    deleteTask,
    getTaskById
} = require('./controller');

Router.get('/task', getTasks);
Router.post('/task', postTask);
Router.put('/task/:id', updateTask);
Router.delete('/task/:id', deleteTask);
Router.get('/task/:id', getTaskById);

module.exports = Router;