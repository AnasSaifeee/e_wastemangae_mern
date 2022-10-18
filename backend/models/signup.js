const mysql=require('mysql2')

const User = new mysql.Schema(
    {
        name:{type:String,required:true},
        username:{type:String,required:true},
        email:{type:String,required:true},
        role:{type:String,required:true},
        password:{type:String,required:true},
        confirmpassword:{type:String,required:true},
    }
)

const model = mysql.model('Userdata',User)
module.exports=User