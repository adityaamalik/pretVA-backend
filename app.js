const express = require("express");
const mongoose = require("mongoose");
const { static } = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());

app.use(static("public"));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/productDB", { useNewUrlParser: true, useUnifiedTopology: true });

const productSchema = new mongoose.Schema({
    product_id: String,
    product_name: String,
    lead_time: String,
    weight_gsm: String,
    quantity: String,
    price_rs: String,
    buyer_name: String
});

const Product = new mongoose.model("Product",productSchema);

app.get("/",function(req,res){
    res.send("API working properly !");
});

app.get("/all",function(req,res){
    Product.find({}, function(err,products){
        if(err){
            res.send(err);
        }else{
            res.send(products);
        }
    })
});

app.post("/search",function(req,res){
    const buyer = req.body.buyerName;
    Product.find({buyer_name: buyer}, function(err,products){
        if(err){
            res.send(err);
        }else{
            res.send(products);
        }
    })
});

app.post("/filter",function(req,res){
    const leadTime = req.body.lead_time, productName = req.body.product_name, quantity = req.body.quantity, weightGsm = req.body.weight, cost = req.body.cost;
    var filter = {};
    if(leadTime !== ""){
        filter.lead_time = leadTime;
    }
    if(productName !== ""){
        filter.product_name = productName;
    }
    if(quantity !== ""){
        filter.quantity = quantity;
    }
    if(weightGsm !== ""){
        filter.weight_gsm = weightGsm;
    }
    if(cost !== ""){
        filter.price_rs = cost;
    }

    Product.find(filter, function(err, results){
        if(err){
            res.send(err);
        }
        else{
            res.send(results);
        }
    })
});

app.listen("5000",function(){
    console.log("Server is up and running !");
});