const app = require('./app')

const PORT = 1001


// page not found


app.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`)
})