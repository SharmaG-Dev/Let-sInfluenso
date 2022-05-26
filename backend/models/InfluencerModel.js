
const mongoose = require("../connections");

const schema = new mongoose.Schema({
    name :String ,
    email : String ,
    contact : Number ,
    password :String,
    createdAt : { type : Date, default : new Date() },

});


const model = mongoose.model("influencerUsers" , schema)

module.exports = model;