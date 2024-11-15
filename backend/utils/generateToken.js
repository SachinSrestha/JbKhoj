import jwt from "jsonwebtoken";

export const generate_jwt = (id,res)=>{
    const token = jwt.sign({id}, process.env.JWT_TOKEN, {expiresIn:"1m"});    

    res.cookie("token", token, {
        maxAge : 1*60*1000,
        httpOnly:true,
        sameSite:"strict",
    });
    return token
}
