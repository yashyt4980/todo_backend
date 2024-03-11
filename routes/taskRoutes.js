const express = require('express');
const { addTask, fetchTasks } = require('../controller/taskController');

const route = express.Router();
route.post('/addTask', addTask);
route.get('/fetchTasks', fetchTasks)

module.exports = route 