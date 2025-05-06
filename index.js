
const express=require("express")
const path=require("path")

const app=express()

app.get("/",(req,res)=>{
    res.send("welcome home")
})

app.get("/about",(req,res)=>{
   res.send("welcome about")
})

app.get("/contact",(req,res)=>{
  res.send("welcome conatct")
})

const port=process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`server is runnig ${port}`)
})