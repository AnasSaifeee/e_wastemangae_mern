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
    port:'3306'
   
});


// app.post("/signup", (req, res)=>{
//     const name = req.body.name;
//     const username = req.body.username;
//     const email = req.body.email;
//     const role = req.body.role;
//     const password = req.body.password;
//     const confirmpassword = req.body.confirmpassword;
    
//     db.query(
//         "INSERT INTO signup_data (name, username, email, role, password, confirmpassword) VALUES (?,?,?,?,?,?)", 
//         [ name, username, email, role, password, confirmpassword],
//         (err, result) => {
//             console.log(err);
//         }

//     );

//     db.query("DELETE FROM signup_data WHERE id NOT IN (SELECT MIN(id) FROM signup_data GROUP BY name,username,email,role, password, confirmpassword)");
    
// });

// app.post('/signin', (req, res)=>{
//     const email = req.body.email;
//     const password = req.body.password;
    
//     db.query(
//         "SELECT * FROM signup_data WHERE email = ? AND password = ?", 
//         [ email, password],
//         (err, result) => {
            
//             if (err){
//                 res.send({err: err});
//             }

//             if (result.length > 0){
//                 res.send(result)
//             } else {
//                 res.send({message: "Wrong Email/Password combination!"})
//             }
            
//         }

//     );
// });

app.post('/request',(req,res)=>
{
    const name = req.body.name;
    const email = req.body.email;
    const address = req.body.address;
    const district = req.body.district;
    const city = req.body.city;
    const state = req.body.state;
    const pincode = req.body.pincode;
    const contact_number = req.body.contact;
    const date = req.body.date;
    const time = req.body.time;
    const ename = req.body.ename;
    const equantity = req.body.equantity;
    const type = req.body.type;
    const weight = req.body.weight;
    const img1 = req.body.img1;
    const img2 = req.body.img2;
    const img3 = req.body.img3;
    const comment= req.body.comment;
    
    db.query(
                "INSERT INTO request (name, email, address, district, city, state,pincode,contact_number,date,time,ename,equantity,type,weight,img1,img2,img3,comment) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", 
                [name, email, address, district, city, state,pincode,contact_number,date,time,ename,equantity,type,weight,img1,img2,img3,comment],
                (err, result) => {
                    console.log(err);
                }
        
            );
    
   console.log(req.body);
   res.json({status:'ok'})

})


app.listen(4000, () => {
    console.log("running server");
});

