function validation(req,res,next){
    if(req.token){
        console.log("tokken approved");
        next()
       return
    }else{
        console.log("tokken failed");
    }
}


module.exports=validation