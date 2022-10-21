const mysql = require('mysql2');

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123456',
    database:"accordion_data",
    port: '3306',
    connectionLimit:10
}).then(function (session) {
    session.createSchema('e_waste_data').then(function(schema){
        console.log('Schema created');
        session.close();
    });
}).catch(function (err) {
    console.log(err.message);
    console.log(err.stack);
});



conn.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
