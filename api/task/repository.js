const Task = require('../../models/Task');

const getAllTasks = async () => {
    try {
        let tasks = await Task.find();
        return tasks;
    } catch (error) {
        return error;
    }
};
const addTask = async (task = {}) => {
    try {
        let data = await Task.create(task);
        return data;
    } catch (error) {
        return error;
    }
};
const getTasksById = async (id) => {
    try {
        let tasks = await Task.findById(id);
        return tasks;
    } catch (error) {
        return error;
    }
};
const editTask = async (id,task = {}) => {
    try {

        let tasks = await Task.findByIdAndUpdate(id,task);
        return tasks;
    } catch (error) {
        return error;
    }
};
const dropTask = async (id) => {
    try {
        let tasks = await Task.findByIdAndRemove(id);
        /*

        */
        return tasks;
    } catch (error) {
        return error;
    }
};


module.exports = {
    getAllTasks,
    addTask,
    editTask,
    dropTask,
    getTasksById
};