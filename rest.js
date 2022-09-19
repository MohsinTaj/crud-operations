const express=require("express")
const port=8000
const app=express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.get("/",(req,res)=>{
    res.send("get request received ")
})
app.post("/",(req,res)=>{
  
    let a=req.body.username
    let b=req.body.password
    let reg=true
    if(reg)
    {
        let c=req.body.retypepassword
        if(c="1234"){
        res.send("post request received ")
      console.log(req.body);
      console.log("your are registered")
        }
    }
    else{
    if(a=="MohsinTaj" && b=="1234"){
    res.send("post request received ")
      console.log(req.body);
      console.log("your are logged in")
    }
    else {
        res.send("post request not received ")
      console.log("your are not logged in")
      }
    }
})
app.put("/",(req,res)=>{
    res.send("put request received ")
})
app.delete("/",(req,res)=>{
    res.send("delete request received ")
})
app.listen(process.env.port|| port,async()=>{
    console.log(`server is started ${port}`)
})