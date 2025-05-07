const express = require('express')


const app = express()

app.use(decoration)

app.get("/", (req, res) => {
  console.log("user authetication success");
  res.send("<h1>Success</h1>")
})


app.listen(3000, () => {
  console.log("the server is runnig");
})

function decoration(req,res,next){
  console.log("user is comming");
  next()
}







