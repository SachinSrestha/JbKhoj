import jwt from "jsonwebtoken";

export const generate_jwt = (id,res)=>{
    const token = jwt.sign({id}, process.env.JWT_TOKEN, {expiresIn:"2d"});    

    res.cookie("token", token, {
        httpOnly:true,
        sameSite:"none",
        secure:false,
    });
    return token
}
