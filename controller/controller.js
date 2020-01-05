const express=require('express');
var usermodel=require('../models/usermodel');
var router=require('../routes/index');
// console.log(result);
// var x=require('./models/tes');
// console.log(x.a());
const Views='../views'
module.exports={
  dosomething: function(req,res,next){
    usermodel.getuser().then((result)=>{res.render(Views+'/index.ejs',{users:result})});
    userpromise=usermodel.getuser();
    userpromise.then(function(result){
                  res.render(Views+'/index.ejs',{users:result});
    }
    )
  },
    registuser: function(req,res,next){
        var name=req.body['name'];
        usermodel.registnew(name);
        res.redirect('/');


      },
      nextpage: function(req,res,next){
          res.render(Views+'/next.ejs');

      }


    }
