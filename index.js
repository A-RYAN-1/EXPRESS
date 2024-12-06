const express = require('express')
const path = require('path')
const app = express()
const port = 4000

app.use(express.static(path.join(__dirname,"public")))

app.get('/hello/:name', (req,res) => {
    res.send(`We don't fit in well because we are just ourselves, right? ` + req.params.name)
})

app.get('/about', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
    res.status(500)
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})