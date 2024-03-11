const Task = require("../models/Task");

const addTask = async (req, res) => {
    const task = req.body.task;
    if(!task) res.send({
        status: 405,
        message: "Task not recieved",
    });
    else {
        const stored_task = await Task.create({task});
        if(stored_task) {
            res.send({
                status: 200,
                message: "Task stored successfully",
                task: stored_task,
            });
        } else res.send({
            status: 405,
            message: "Error!",
            task: null,
        })
    }
}

const fetchTasks = async(req, res) => {
    const tasks = await Task.find({});
    if(tasks) {
        res.send({
            status: 200,
            tasks,
        });
    } else {
        res.send({
            status: 401,
            tasks: null,
        });
    }
}

module.exports = { addTask, fetchTasks }