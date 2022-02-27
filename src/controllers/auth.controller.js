const response =require('express');
const EncargadoPendiente=require('../models/usuario')
const AdminPendiente=require('../models/admin')

const bcrypt = require('bcrypt')
const {generarJWT}=require('../helpers/jwt');
const loginEncargado=async(req,res=response)=>{
    //manejo de errores
const{nombreUsuario,correoUsuario,passwordUsuario}=req.body;
     try {
        const encargadoPendiente=await EncargadoPendiente.findOne({correoUsuario});
        console.log("dhbf"+encargadoPendiente)
        if(!encargadoPendiente){
            return res.status(400).json({
                    
                    ok:false,
                    msg:'no existe correo'
                }
            )
        }
        const validPassword=bcrypt.compareSync(passwordUsuario,encargadoPendiente.passwordUsuario);
        if(!validPassword)
        {
            return res.status(400).json(
                {
                    ok:false,
                    msg:'password incorrecto'
                }
                
            )
        }
        console.log("28")
        const token=await generarJWT(encargadoPendiente.id,encargadoPendiente.nombreUsuario, encargadoPendiente.rol)
        console.log("30",token);
        res.json({
            ok:true,
            //uid:encargadoPendiente.id,
            //nombreUsuario:encargadoPendiente.nombreUsuario,
            token,
        })
        

         
     } catch (error) {
        console.log(error)
        res.status(500).json(
            {
                ok:false,
                msg:"hable con el admin"
            }
        )
         
     }
}

//const token=await generarJWT(encargadoPendiente.id,encargadoPendiente.nombreUsuario)

const tokenEncargado=async(req,res=response)=>{
    const {uid,nombreUsuario}=req;
    const token=await generarJWT(uid,nombreUsuario);
   
    res.json({
        ok: true,
       // uid:uid,
      //nombreUsuario:nombreUsuario,
      token
        
    })
}

/*const registroEncargado=async(req,res=response)=>{
//manejo de errores
const{nombreUsuario,apellidoEncargado,
correoUsuario,fechaNacimientoEncargado,
cedulaEncargado,passwordUsuario,
 establecimiento}=req.body;
try{
let encargadoPendiente=await EncargadoPendiente.findOne({correoUsuario});
if(encargadoPendiente){
            
    return res.status(400).json({
            
                    ok:false,
                    msg:'ya hay este correo'
        }
    )
}

encargadoPendiente =new EncargadoPendiente(req.body);
//encriptar 
const salt  =bcrypt.genSaltSync();
encargadoPendiente.passwordUsuario=bcrypt.hashSync(passwordUsuario,salt);


await encargadoPendiente.save();
//generar
const token=await generarJWT(encargadoPendiente.id,encargadoPendiente.nombreUsuario)
res.status(201).json({
        ok: true,
        msg:'registro',
        uid:encargadoPendiente.id,
        nombreUsuario:encargadoPendiente.nombreUsuario,

        token
    })

}catch(error){
    console.log(error)
    res.status(500).json(
        {
            ok:false,
            msg:"hable con el admin"
        }
    )
}
}*/
module.exports={
    loginEncargado,
    tokenEncargado,
  
}