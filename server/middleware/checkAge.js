
export const checkAge = (req,res,next) =>{
    const {age} = req.body;
    if(age < 26){
        return res.send({message:"Age is Below 26"});

    }
    next();

}