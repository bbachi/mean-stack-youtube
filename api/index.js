const express = require('express')
const app = express()
const port = 3000

app.get("/", (req, res) => {
    res.send("<h1>It has been updated!!!</h1>")
})

app.listen(port, () => console.log(`API listening on port ${port}`));