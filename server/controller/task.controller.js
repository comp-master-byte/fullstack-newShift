const db = require("../db")

class TaskController {
    async createTask(req, res) {
        const {title, content, taskAssignedIn, userId, taskFinishedIn} = req.body
        const newTask = await db.query(
            `INSERT INTO task (title, content, task_assigned_in, user_id, task_finished_in) values ($1, $2, $3, $4, $5) RETURNING *`, 
            [title, content, taskAssignedIn, userId, taskFinishedIn])
        res.json(newTask.rows[0])
    }

    async getTasksByUser(req, res) { 
        const id = parseInt(req.params.id)
        const tasks = await db.query(`SELECT * FROM task WHERE user_id = $1`, [id])
        res.json(tasks.rows)
    }

    async updateTask(req, res) { 
        const id = parseInt(req.params.id)
        const {title, content} = req.body
        const updatedTask = await db.query(`UPDATE task SET title = $1, content = $2 WHERE id = $3`, 
            [title, content, id]
        )
        res.json(updatedTask.rows[0])
    }

    async deleteTask(req, res) { 
        const id = req.params.id
        const deletedTask = await db.query(`DELETE FROM task where id = $1`, [id])
        res.json(deletedTask.rows[0])
    }
}

module.exports = new TaskController()