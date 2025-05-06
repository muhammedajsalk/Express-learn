
const express=require("express")
const path=require("path")

const app=express()

app.get("/",(req,res)=>{
    res.json("hello ajsal")
})

const port=process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`server is runnig ${port}`)
})