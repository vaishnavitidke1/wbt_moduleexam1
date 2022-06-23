const express= require("express")
const app=express()


const mysql2 = require('mysql2');

// const bodyPraser =require("body-parser");
// const Connection = require("mysql2/typings/mysql/lib/Connection");
const con =mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'cdac',
    database: 'wbt',
	port:3306
});


app.use(express.static('program'));

app.get('/update',function (req,res){
    let bookid =parseInt(req.query.id)
    let bookname =req.query.name
    let bookprice =parseInt(req.query.price)
    console.log(bookid ,typeof(bookid))
    console.log(bookname ,typeof(bookname))
    console.log(bookprice ,typeof(bookprice))

sql ="update book set bookname=?,bookprice=? where bookid=?";
con.query(sql,[bookname,bookprice,bookid],(err,result)=>{
    if(err){
        console.log("successful"+result.status)
    }
    else{
        if(result.affectedRows>0){
            console.log("data is updated"+result.status)
        }
    }
})
res.send()

})
// app.get('/add',function (req,res){
//     let bookid =parseInt(req.query.id)
//     let bookname =req.query.name
//     let bookprice =parseInt(req.query.price)
//     console.log(bookid ,typeof(bookid))
//     console.log(bookname ,typeof(bookname))
//     console.log(bookprice ,typeof(bookprice))

// sql ="insert into Book ( bookid,booknam,bookprice)values(?,?,?), [bookname,bookprice bookid]
// con.query(sql,[bookname,bookprice,bookid],(err,result)=>{
//     if(err){
//         console.log("successful"+result.status)
//     }
//     else{
//         if(result.affectedRows>0){
//             console.log("data is inserted"+result.status)
//         }
//     }
// })
// res.send()

})
app.listen(8081,function(){
    console.log("server is running")
});