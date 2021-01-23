const express = require('express');
const { callbackify } = require('util');
const app = express();

app.get("/",(req,res)=>{
       res.send("hellow  world from the express by shah alam ");
});
app.get("/about",(req,res)=>{
    res.send("hellow  world from the express from about  ");
});

app.listen(8000,()=>{
       console.log("listening the port")
});

//API
 //get - read 
 //post - create 
 //put  - update
 // delete - delete

 //---------------------------
 //The callback function has 2 parameters, request(req) and response(res).
 // The request object(req) represents ihe•HTTP• reques€ and 
 //has properties for the request query string, parameters, body, 
 //HTTP headers, etc.
 // Similarly, the response object represents the HTTP response 
 //that the Express app sends when it receives an HTTP request.
