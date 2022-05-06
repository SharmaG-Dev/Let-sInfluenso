
const mongoose = require("../connections");

const schema = new mongoose.Schema({
    username : String ,
    name :String ,
    email : String ,
    contact : Number ,
    instagramid : String,
    linkedinid : String,
    facebookid : String,
    createdAt : { type : Date, default : new Date() },

});


const model = mongoose.model("influencerUsers" , schema)

module.exports = model;