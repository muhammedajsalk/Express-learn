const express = require('express')
const token = require("./middle ware/token")
const validation = require('./middle ware/validation')

const app = express()

const middleware = [token, validation]

app.get("/", middleware, (req, res) => {
  console.log("user authetication success");
  res.send("<h1>Success</h1>")
})


app.listen(3000, () => {
  console.log("the server is runnig");
})







