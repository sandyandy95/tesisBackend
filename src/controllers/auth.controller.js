const response =require('express');
const EncargadoPendiente=require('../models/encargadoSolicitud')
const bcrypt = require('bcrypt')
const {generarJWT}=require('../helpers/jwt');
const loginEncargado=async(req,res=response)=>{
    //manejo de errores
const{nombreEncargado,correoEncargado,passwordEncargado}=req.body;
     try {
        const encargadoPendiente=await EncargadoPendiente.findOne({correoEncargado});
        if(!encargadoPendiente){
            return res.status(400).json({
                    
                    ok:false,
                    msg:'no existe correo'
                }
            )
        }
        const validPassword=bcrypt.compareSync(passwordEncargado,encargadoPendiente.passwordEncargado);
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
        const token=await generarJWT(encargadoPendiente.id,encargadoPendiente.nombreEncargado)
        console.log("30",token);
        res.json({
            ok:true,
            uid:encargadoPendiente.id,
            nombreEncargado:encargadoPendiente.nombreEncargado,
            token
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
//const token=await generarJWT(encargadoPendiente.id,encargadoPendiente.nombreEncargado)

const tokenEncargado=async(req,res=response)=>{
    const {uid,nombreEncargado}=req;
    const token=await generarJWT(uid,nombreEncargado);
   
    res.json({
        ok: true,
        uid:uid,
      nombreEncargado:nombreEncargado
        
    })
}

const registroEncargado=async(req,res=response)=>{
//manejo de errores
const{nombreEncargado,apellidoEncargado,
correoEncargado,fechaNacimientoEncargado,
cedulaEncargado,passwordEncargado,
 establecimiento}=req.body;
try{
let encargadoPendiente=await EncargadoPendiente.findOne({correoEncargado});
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
encargadoPendiente.passwordEncargado=bcrypt.hashSync(passwordEncargado,salt);


await encargadoPendiente.save();
//generar
const token=await generarJWT(encargadoPendiente.id,encargadoPendiente.nombreEncargado)
res.status(201).json({
        ok: true,
        msg:'registro',
        uid:encargadoPendiente.id,
        nombreEncargado:encargadoPendiente.nombreEncargado,

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
}
module.exports={
    loginEncargado,
    tokenEncargado,
    registroEncargado   
}