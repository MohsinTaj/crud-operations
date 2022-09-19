// GET:   http://localhost:3000/aliens
// GET:  http://localhost:3000/aliens/<id>
// GET:  http://localhost:3000/aliens/<id>
// PATCH:  http://localhost:3000/aliens/<id>
const express=require("express")
const mongoose=require("mongoose")
const app=express()
const port=9000;
const url="mongodb://localhost/alienex"
mongoose.connect(url,{useNewUrlParser:true})
const con =mongoose.connection;
con.on("open", async()=>{
    console.log("connected...");
})
app.use(express.json())
const alienRouter=require('./routes/aliens')
app.use("/aliens",alienRouter)

app.listen(process.env.port || port ,async()=>{
    console.log(`server is started on port ${port}`)
})
