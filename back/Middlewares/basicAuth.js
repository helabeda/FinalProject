const authUser=(req,res,next)=>{

    if(req.user._id.toString()==req.params.id){  
    next();

    }
    else if(req.user.Role=="admin")
    next();
else{
    return res.status(400).send('You need to login');
}
}

module.exports=authUser;