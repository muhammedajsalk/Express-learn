const express = require("express");
const path=require("path")
require('dotenv').config();



const app = express();

let posts = [
  { id: 1, title: 'Post One' },
  { id: 2, title: 'Post Two' },
  { id: 3, title: 'Post Three' },
  ];

//get all posts and quary url logic
app.get("/api/posts",(req,res)=>{
  const newlimit=parseInt(req.query.limit)
  if(newlimit<=posts.length){ 
    const newposts=posts.slice(0,newlimit)
    res.status(200).json(newposts)
  }else if(newlimit>=posts.length){
    res.status(404).json(`page is not found`)
  }else{
    res.status(200).json(posts)
  }
})

//get params(id) posts
app.get("/api/posts/:id",(req,res)=>{
  const id=parseInt(req.params.id)
  const itemPosts=posts.find(item=>item.id===id)
  if(itemPosts===undefined){
    res.status(404).json({messages:"this page is not found"})
  }else{
    res.status(200).json(itemPosts)
  }
})



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});













