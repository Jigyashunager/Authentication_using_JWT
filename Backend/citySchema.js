const mongoose=require("mongoose");

const citiesSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    state:{ 
        type:String,
        required:true
    }});

const allCities= new mongoose.model("City",citiesSchema)
module.exports=allCities;
