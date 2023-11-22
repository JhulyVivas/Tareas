const express = require('express');
const Task = require('../models/TaskShema');

const crearTask = async (req, res = express.request ) => {
    const task = new Task(req.body);

    try {
        task.user = req.uid;
        const saved = await task.save();
        res.json({
            ok: true,
            task: saved
        })
    } catch (error) {
        console.log( error );
        res.status(500).json({
            ok: false,
            task: 'Internal Error',

        })
        
    }
}

const listarTask = async (req, res = express.request ) => {
    const tasks = await Task.find().populate('user', 'name');

    try {
        res.status(200).json({
            ok: true,
            tasks,
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            task: 'Error Interno',
        })
        
    }
}

const actualizarTask = async (req, res = express.request) => {
    const { Taskid } = req.params;
    const { title } = req.body;

    try {
        const task = await Task.findById(Taskid);

        if (!task) {
            return res.status(404).json({
                ok: false,
                message: 'Task not found',
            });
        }

        if (task.user.toString() !== req.uid) {
            return res.status(401).json({
                ok: false,
                msg: 'Unauthorized - You are not the creator of this task',
            });
        }

        task.title = title;
        const updatedTask = await task.save();

        res.json({
            ok: true,
            task: updatedTask,
            message: 'Task updated successfully'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Internal Error',
        });
    }
};

const eliminarTask = async (req, res = express.request) => {
    const { Taskid } = req.params;

    try {
        const task = await Task.findByIdAndDelete(Taskid);

        if (!task) {
            return res.status(404).json({
                ok: false,
                message: 'Task not found',
            });
        }

        if (task.user.toString() !== req.uid) {
            return res.status(401).json({
                ok: false,
                msg: 'Unauthorized - You are not the creator of this task',
            });
        }

        const deletedTask = await task.remove();

        res.json({
            ok: true,
            task: deletedTask, 
            message: 'Task deleted successfully'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Internal Error',
        });
    }
};


module.exports =  {
    listarTask,
    crearTask,
    actualizarTask,
    eliminarTask
}