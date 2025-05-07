function token(req,res,next){
    console.log("creating token.....")
    setTimeout(()=>{
        req.token=true;
        next()
    },3000)
    
}

module.exports=token