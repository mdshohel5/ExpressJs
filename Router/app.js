const express = require('express')
const app = express()
const userRouter = require('./user.route')

app.use("/user",userRouter)
app.use((req, res)=>{
    res.send('<h1>404 !! Page Not Found</h1>')
})


module.exports = app;