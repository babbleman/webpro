const mysql = require('mysql');
const db=require('./config/db')
// MySQLとのコネクションの作成
const connection = mysql.createConnection(db);

var x=["pin","sou","man"];
for(var j=0;j<3;j++){
  var str=x[j];
for(var i=1;i<10;i++){
var urlstr=str+String(i)
var pp="https://majandofu.com/wp-content/uploads/2014/09/"+urlstr+"-66-90-l.png";
connection.query('insert into mjhai values(?,?)',[urlstr,pp],(err,res)=>{
        if(err) throw err;
});
}
}
//
// connection.query('insert into newuser values(30,?)',[name],(err,res)=>{
//         if(err) throw err;
//         console.log(name);});

// module.exports={
//   getuser :function(){
//       connection.query('select * from newusers;',(err,result,fields)=>{
//         if (err) throw err;
//         console.log(rows);
//
//       });
//
//
//   }
//
//
// }



// connection.query('select * from newuser',function(err,rows,fields){
//       if(err) console.log(err);
//       // console.log(rows);
//
// 接続
// module.exports={
//   getuser:function(){
//     return new Promise((resolve,reject)=>{
//       connection.connect;
//       connection.query('select * from newuser;'),(err,result,fields)=>{
//         if(err){
//           reject(err);
//         }else{
//               console.log(result);
//           resolve(result);
//         }
//       }
//     })
//   }
// }
// module.export={
//   getuser: function(){
//       return new Promise((resolve,reject) => {
//           connection.query('select * from newuser' ,(err,result,fields)=>{
//               if(err){
//                   reject(err);
//                 }else{
//                   resolve(result);
//                 }  });});}}
