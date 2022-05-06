
const mongoose = require("../connections");

const schema = new mongoose.Schema({
    brandName : String ,
    ownerName :String ,
    email : String ,
    contact : Number ,
    websiteLink : String,
    password :String,
    createdAt : { type : Date, default : new Date() },

});


const model = mongoose.model("BrandUsers" , schema)

module.exports = model;