const mysql = require('mysql');
const db=require('../config/db')
// MySQLとのコネクションの作成
const connection = mysql.createConnection(db);


module.exports={
  getuser:function(){
    return new Promise(function(resolve,reject){
            connection.query('select * from newuser;',(err,result,fields)=>{
              if (err) throw err;

              resolve(result)
      });

  })



},
registnew :function(name){
  connection.query('insert into newuser values(30,?)',[name],(err,res)=>{
          if(err) throw err;
          console.log(name);}
)
}

}

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
