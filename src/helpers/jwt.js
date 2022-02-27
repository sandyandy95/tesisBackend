const jwt=require('jsonwebtoken');
const generarJWT =(uid,nombreEncargado,rol)=>{
    return new Promise((resolve,reject)=>{
        const payload ={uid,nombreEncargado,rol};
        jwt.sign(payload,process.env.SECRET_JW_SEED,{
            
            expiresIn:'180s'
        },(err,token)=>{
          if(err){
              console.log(err)
              reject('no se pudo ejecutar el token')
          }  
          //console.log("si se ejecuta",token);
          resolve(token);
        })
    })
}
module.exports={generarJWT}