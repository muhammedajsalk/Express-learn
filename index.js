const express = require("express");
const path=require("path")
require('dotenv').config();



const app = express();

let posts = [
  { id: 1, title: 'Post One' },
  { id: 2, title: 'Post Two' },
  { id: 3, title: 'Post Three' },
  ];

//get all posts
app.get("/api/posts",(req,res)=>{
  res.json(posts)
})

//get params(id) posts
app.get("/api/posts/:id",(req,res)=>{
  const id=parseInt(req.params.id)
  const itemPosts=posts.find(item=>item.id===id)
  if(itemPosts===undefined){
    res.json({messages:"this item not in server"})
  }else{
    res.json(itemPosts)
  }
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
