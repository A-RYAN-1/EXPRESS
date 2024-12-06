const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res) => {
    res.send(`We don't fit in well because we are just ourselves`)
})

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})