const express = require("express");
const path=require("path")
require('dotenv').config();



const app = express();

let posts = [
  { id: 1, title: 'Post One' },
  { id: 2, title: 'Post Two' },
  { id: 3, title: 'Post Three' },
  ];

app.get("/api/posts",(req,res)=>{
  res.json(posts)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
