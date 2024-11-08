const express = require("express")
const app = express()
app.get("/mayank/:id", (req, res) => {
    const id = req.params.id
    res.send("Hello Mayank!")
})

app.listen(9090)