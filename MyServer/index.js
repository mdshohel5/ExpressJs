const app = require('./app')
const port = 5003;

app.get('/', (req, res)=>{
    res.send('hello')
})
app.listen(port, ()=>{
    console.log(`Server is runnign at http://localhost:${port}`)
})

