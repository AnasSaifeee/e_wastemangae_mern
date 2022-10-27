const express = require('express')
const mysql= require('mysql2')
require("dotenv").config()
const {
    SIGNUP_QUERY,
    SIGNIN_QUERY,
    REQUEST_QUERY,
    REDUNDANCY_CHECK_QUERY,
    VERIFICATION_QUERY
}=require('./queries')

const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

var db = mysql_connector.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:'e_waste',
    port:'3306'
   
});


app.post("/signup", (req, res)=>{
    const name = req.body.name;
    const username = req.body.username;
    const email = req.body.email;
    const role = req.body.role;
    const password = req.body.password;
    const confirmpassword = req.body.confirmpassword;
    
    db.query(
        SIGNUP_QUERY, 
        [ name, username, email, role, password, confirmpassword],
        (err, result) => {
            console.log(err);
        }

    );

    db.query(REDUNDANCY_CHECK_QUERY);
    
});

app.post('/signin', (req, res)=>{
    const email = req.body.email;
    const password = req.body.password;
    
    db.query(
        SIGNIN_QUERY, 
        [ email, password],
        (err, result) => {
            
            if (err){
                res.send({err: err});
            }

            if (result.length > 0){
                res.send(result)
            } else {
                res.send({message: "Wrong Email/Password combination!"})
            }
            
        }

    );
});

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
               REQUEST_QUERY, 
                [name, email, address, district, city, state,pincode,contact_number,date,time,ename,equantity,type,weight,img1,img2,img3,comment],
                (err, result) => {
                    console.log(err);
                }
        
            );
    db.query(
              "SELECT pincode FROM collector_verification" 
                [state,district,city,pincode],
                (err, result) => {
                    console.log(err);
                    console.log(result);
                }
        
            );
    
    
  
   res.json({status:'ok'})

})

app.post('/verification',(req,res)=>{

    const state=req.body.state
    const district=req.body.district
    const city=req.body.city
    const pincode=req.body.pincode
   db.query(

      VERIFICATION_QUERY, 
       [state,district,city,pincode],
       (err, result) => {
           console.log(err);
       }
   );
    console.log(req.body)
    res.json({status:'ok'})
})

app.listen(process.env.PORT, () => {
    console.log("running server");
});

