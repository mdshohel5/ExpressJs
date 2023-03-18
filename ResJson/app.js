const express = require('express')
const app = express()


app.get('/', (req, res)=>{
    res.send('this is home get')
})

app.get('/register', (req, res)=>{
    res.status(200).json({
        name: "Md. Shohel Mia",
        age: 23
    })
})

app.get('/login', (req, res)=>{
    res.send('this is logIn page')
})



module.exports = app