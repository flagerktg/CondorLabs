const {
    getAllTasks,
    addTask,
    editTask,
    dropTask,
    getTasksById
} = require('./repository');
const getTasks = async (req, res) => {
    try {
        let tasks = await getAllTasks();
        return res.status(200).send(tasks);
    } catch (error) {
        return res.send({
            message: error.message
        })
    }
};
//add tasks 
const postTask = async (req, res) => {
    try {
        const {
            name,
            description,
            user,
            status
        } = req.body;
        let task = await addTask({
            name,
            description,
            user,
            status
        });
        return res.status(200).send(task);
    } catch (error) {
        return res.send({
            message: error.message
        })
    }
}
//edit task by id for each one
const updateTask = async (req, res) => {
    try {
        const {
            name,
            description,
            user,
            status
        } = req.body;
        let task = await editTask(req.params.id, {
            name,
            description,
            user,
            status
        });
        return res.status(200).send(task);
    } catch (error) {
        return res.send({
            message: error.message
        })
    }
}
const deleteTask = async (req, res) => {
    try {
        let task = await dropTask(req.params.id);
        return res.status(200).send(task);
    } catch (error) {
        return res.send({
            message: error.message
        })
    }
}
const getTaskById = async (req, res) => {
    try {
        let task = await getTasksById(req.params.id);
        return res.status(200).send(task);
    } catch (error) {
        return res.send({
            message: error.message
        })
    }
}

module.exports = {
    getTasks,
    postTask,
    updateTask,
    deleteTask,
    getTaskById
};