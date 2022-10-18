const {
    createPool
}=require('mysql2');

const pool = createPool({
    host:'localhost',
    user:'root',
    password:'123456',
    database:"birthday_reminder",
    connectionLimit:10
})

pool.query(`select * from user_details `,(err,result,fields)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result)
})