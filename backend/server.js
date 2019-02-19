const express = require("express")

const API_PORT = 3001;
const app = express()
const router = express.Router()

app.use(function (req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");    
    next();
});



app.get("/getResponse",(req,res)=>{
    return res.json({"Name":"Biswaranjan","role":"Author"})
})

app.listen(API_PORT,()=>console.log(`Listening on port ${API_PORT}`))
