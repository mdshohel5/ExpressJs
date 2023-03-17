const express = require('express')
const app = express()
const PORT = 1001

app.get('/', (req, res)=>{
    res.send('Router')
})
app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})