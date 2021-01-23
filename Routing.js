// wm.thapa.com - welcome to my home page
 // / about - welcome to my about page 
 // / contact - welcome to my contact page 
 // / temp - welcome to my temp page

const { Router } = require('express');
const express = require('express');
 const app = express();
//------------------------------------------Routing-------------------------------------------------------
 app.get("/",(req,res)=>{
     res.send("welcome to my new home page");
 });
 app.get("/about",(req,res)=>{
    res.send("welcome to my new home page");
});
app.get("/contact",(req,res)=>{
    res.send("welcome to my new home page contact");
});


  const port = 5000000;
 app.listen(8000,()=>{
     console.log("listennig the port ${port}");
 });
