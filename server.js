const mysql = require('mysql2');

const db = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'ppvar123#',
    database:'varmadb'
})

db.connect((err)=>{
    if(err){
        console.log(err.stack);
        return;
    }
    console.log("Connected Succcessfully......");
})


// db.query((`SELECT * FROM FRIENDS;`),(err,result,field)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(result);
//     console.log(result.length);
//     console.log(result[0].Name)
//     console.log(field)
// })

module.exports =mysql