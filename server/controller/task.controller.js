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
        const id = req.query.id
        const tasks = await db.query(`select * from task where user_id = &1`, [id])
        res.json(tasks.rows)
    }
}

module.exports = new TaskController()