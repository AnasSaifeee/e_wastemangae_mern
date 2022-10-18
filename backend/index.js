const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql2')
app.use(cors())
app.use(express.json())

mysql.connect()

app.post('/api/signup',(req,res)=>{
    console.log(req.body)
    res.json({status:'ok'})
})

app.listen(4000,()=>{
    console.log("app is running")
})