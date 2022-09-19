const express=require("express")
const app=express()
const port=3000
const bodyParser = require('body-parser')
app.use(bodyParser.json())

// app.get('/',(req,res)=>{
//     res.send("it is the home page")
//     // res.send("post request received ")
//     console.log(req.body);
//     console.log("your are registered")
// })

app.post('/fruits',(req,res)=>{
    console.log(req.body.fruits);
    let checkfruit = req.body.fruits
    if( checkfruit === "Banana"){
        res.send("It is Bananna");
    }
    else{
    res.send("it is not Banananananan")
    }
    // res.send("post request received ")
    // console.log("your are registered")
})

app.listen(port,()=>{
    console.log(`server started successfully ${port}`)
})