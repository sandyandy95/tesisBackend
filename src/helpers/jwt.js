const jwt=require('jsonwebtoken');
const generarJWT =(uid,nombreEncargado)=>{
    return new Promise((resolve,reject)=>{
        const payload ={uid,nombreEncargado};
        jwt.sign(payload,process.env.SECRET_JW_SEED,{
            
            expiresIn:'2h'
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