const e = require("express");
const express = require("express");
const app = express();
const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/Cities")
app.use(express.json());

app.get('/', (req, res)=>{
    res.send("hello world")
})

const cities=require("./cities")
const allCities =require("./citySchema")
app.post("/",async (req, res)=>{
    try{
    const city=await allCities.insertMany(cities)
    res.json({
        status:"success",
        data:city
    })
}catch(err){
    res.status(400).json({
        status:"fail",
        message:e.message
    })
}

})

app.listen(5000,()=>{
    console.log("listening on ")
})