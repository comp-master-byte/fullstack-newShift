const express = require("express")

const PORT = 8080

const app = express()
app.get("/", (req, res) => res.send("Server started"))

app.listen(PORT, () => console.log(`Server has been started on PORT: ${PORT}`))