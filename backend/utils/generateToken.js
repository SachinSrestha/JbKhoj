import jwt from "jsonwebtoken";

export const generate_jwt = (id,res)=>{
    const token = jwt.sign({id}, process.env.JWT_TOKEN, {expiresIn:"10s"});    

    res.cookie("token", token, {
        maxAge : 10*1000,
        httpOnly:true,
        sameSite:"none",
        secure:false,
    });
    return token
}
