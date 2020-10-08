const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.get("/",function(req,res){
    res.send("Home page !");
});

app.listen("3000",function(){
    console.log("Server is up and running !");
});