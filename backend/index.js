const express = require("express");

const userRouter =require("./routers/UserRouter");


const app  = express();

const port = 5000;

app.use("/user" , userRouter);

app.get("/", (req , res) =>{
    console.log("Running")
    res.send("Fir aa gye ")
} )



app.listen(port, () => {
    console.log("server Started");
});
