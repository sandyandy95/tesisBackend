const {response}=require('express');
const jwt=require('jsonwebtoken');
const validarJWT=(req,res=response,next)=>{
    const token=req.header('x-token')
    if(!token){
        return res.status(401).json({
            ok:false,
            msg:'no hay token en la peticion'

        });
    }
    try{
        const {uid,nombreEncargado}=jwt.verify(
            token,
            process.env.SECRET_JW_SEED
        );
        req.uid=uid;
        req.nombreEncargado=nombreEncargado;
        console.log(nombreEncargado)
       /* const payload =jwt.verify(
            token,
            process.env.SECRET_JW_SEED
        );
        console.log(payload)*/


    }catch(error){
        return res.status(401).json({
            ok:false,
            msg:'Token no valido'
        });
    }

    console.log(token)
    next();
}
module.exports={
    validarJWT
}