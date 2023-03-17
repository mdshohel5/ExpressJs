const express = require('express')
const router = express.Router();


router.get('/', (req, res)=>{
    res.send('<h1>This is home page</h1>')
})
router.get('/register', (req, res)=>{
    res.send('<h1>This is home register page</h1>')
})
router.get('/login', (req, res)=>{
    res.send('<h1>This is logIn page</h1>')
})

module.exports = router;