const express=require("express")
const app=express()
const PORT=3000
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.post("/fruits", (req, res) => {
    console.log(req.body.fruits);
    res.send("mango and apple")
})
app.put("/vegetables", (req, res) => {
    console.log(req.body.fruits);
    res.send("mango and apple")
})
app.get("/cars", (req, res) => {
    console.log(req.body.fruits);
    res.send("mango and apple")
})
app.delete("/delete",(req,res)=>{
    console.log(req.body.delete);
    res.send("delete request received")
})


app.listen(
    PORT,
    () => console.log(`server running on ${PORT}`)
    )