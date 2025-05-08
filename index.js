const express=require('express')

const app=express()

const bodyParse=require('body-parser')

app.use(bodyParse.json())

app.use(bodyParse.urlencoded({extended:true}))

app.post("/login",(req,res)=>{
  const {username,password}=req.body
    res.send(`new user name is ${username} and his password ${password}`)
})

app.listen(3000,()=>{
  console.log("server is runnig")
})