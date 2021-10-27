  
const {check,validationResult}=require("express-validator")

exports.registerCheck=()=>[
    check("Email",'this field must be a valid email').isEmail(),
    check("Nickname","Nickname is required").notEmpty(),
    check("Password","password should have 8 chars").isLength({min:8})
]

exports.validator=(req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty())
    {return res.status(400).send({errors:errors.array()})}
    next()
}