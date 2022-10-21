const express = require('express')
const mysql= require('mysql2')


const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:"e_waste",
    port: '3306'
});


app.post("/signup", (req, res)=>{
    const name = req.body.name;
    const username = req.body.username;
    const email = req.body.email;
    const role = req.body.role;
    const password = req.body.password;
    const confirmpassword = req.body.confirmpassword;
    
    db.query(
        "INSERT INTO signup_data (name, username, email, role, password, confirmpassword) VALUES (?,?,?,?,?,?)", 
        [ name, username, email, role, password, confirmpassword],
        (err, result) => {
            console.log(err);
        }

    );

    db.query("DELETE FROM signup_data WHERE id NOT IN (SELECT MIN(id) FROM signup_data GROUP BY name,username,email,role, password, confirmpassword)");
    
});

app.post('/signin', (req, res)=>{
    const name = req.body.name;
    const username = req.body.username;
    const email = req.body.email;
    const role = req.body.role;
    const password = req.body.password;
    const confirmpassword = req.body.confirmpassword;
    
    db.query(
        "SELECT * FROM signup_data email = ? AND password = ?", 
        [ email, password],
        (err, result) => {
            
            if (err){
                res.send({err: err});
            }
            if (result){
                res.send(result)
            } else {
                res.send({message: "Wrong Email/Password combination!"})
            }
            
        }

    );
});


app.listen(4000, () => {
    console.log("running server");
});

