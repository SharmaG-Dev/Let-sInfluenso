const express = require("express");

const BrandUser =require("./routers/BrandRouter");

const influRouter =require("./routers/InfluencerRouter");

const cors = require("cors");

const app  = express();

const port = 5000;

app.use(cors({
    origin : ["http://localhost:3000"],
}))

app.use(express.json())

app.use("/brand", BrandUser);
app.use("/influencer" , influRouter);




app.get("/", (req , res) =>{
    console.log("Running")
    res.send("Fir aa gye ")
} )



app.listen(port, () => {
    console.log("server Started");
});
