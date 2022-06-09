const db = require("../db")

class TaskController {
    async createTask(req, res) {
        const {title, content, taskAssignedIn, userId, taskFinishedIn, status} = req.body
        const newTask = await db.query(
            `INSERT INTO task (title, content, task_assigned_in, user_id, task_finished_in, status) values ($1, $2, $3, $4, $5, $6) RETURNING *`, 
            [title, content, taskAssignedIn, userId, taskFinishedIn, status])
        res.json(newTask.rows[0])
    }

    async getTasksByUserAndStatus(req,res) {
        const id = parseInt(req.params.id)
        const status = req.query.status
        const filteredTasks = await db.query(`SELECT * FROM task WHERE status = $1 AND user_id = $2`, [status, id])
        res.json(filteredTasks.rows)
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