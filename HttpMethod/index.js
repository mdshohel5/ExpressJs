const express = require('express')
const app = express()
const port = 2022

app.get('/', (req, res)=>{
    res.send('This is get request')
})
app.post('/', (req, res)=>{
    res.send('This is post request')
})
app.put('/', (req, res)=>{
    res.send('This is put request')
})
app.delete('/', (req, res)=>{
    res.send('This is delete request')
})

app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
})