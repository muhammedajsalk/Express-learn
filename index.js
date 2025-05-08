const express=require("express")

const app=express()

const multer=require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })


const upload=multer({storage})

app.get("/",(req,res)=>{
   res.send("home")
})

app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.send("succefully post")
})

app.listen(3000,()=>{
    console.log("ther server is runnig 3000")
})