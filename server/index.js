const express = require("express")
const config = require("config")
const userRouter = require("./routes/user.routes")
const taskRouter = require("./routes/task.routes")

const PORT = config.get("serverPort")

const app = express()

app.use(express.json())
app.use("/api", userRouter)
app.use("/api", taskRouter)

const serverStarted = () => {
    try {
        app.listen(PORT, () => console.log(`Server has been started on PORT: ${PORT}`))
    } catch(error) {
        throw new Error(err.message);
    }
}

serverStarted()