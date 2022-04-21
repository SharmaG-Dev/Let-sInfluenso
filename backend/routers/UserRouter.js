const express = require("express");
const router = express.Router();



router.get("/home" , (req , res) => {
    console.log("Request at User Home");
    res.send("Resonse from User home")
});





module.exports =router ;