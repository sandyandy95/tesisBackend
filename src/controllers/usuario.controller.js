const usuarioCtrl ={};
const EncargadoModel=require('../models/usuario')
const EncargadoPendiente=require('../models/usuario')
const response =require('express');
const bcrypt = require('bcrypt')
const {generarJWT}=require('../helpers/jwt')
const {createEncargados} = require('../controllers/usuario.controller')


usuarioCtrl.getEncargados=async(req,res)=>{
   const encargados= await EncargadoModel.find();
    res.json(encargados)
}

usuarioCtrl.createEncargados=async(req,res=response)=>{
    //manejo de errores
    const{nombreUsuario, apellidoUsuario,correoUsuario,fechaNacimientoUsuario,cedulaUsuario,passwordUsuario,rol}=req.body;
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
    }




usuarioCtrl.getEncargado=async(req,res)=>
{
   const newEncargadoModel= await EncargadoModel.findById(req.params.id);
    res.json(newEncargadoModel)
}
usuarioCtrl.delateEncargado=async(req,res)=>{
    await EncargadoModel.findByIdAndDelete(req.params.id);
    res.json({message:'Admin eliminado'})
}
usuarioCtrl.updateEncargado=async(req,res)=>{
    const {nombreUsuario,apellidoUsuario,correoUsuario,fechaNacimientoUsuario,
        cedulaUsuario,passwordUsuario,rol}=req.body;
    await EncargadoModel.findByIdAndUpdate(req.params.id,{nombreUsuario,
        apellidoUsuario,
        fechaNacimientoUsuario,
        correoUsuario,
        cedulaUsuario,
        passwordUsuario,
        rol
    
    });
    res.json("actualizado")
}


module.exports=usuarioCtrl;
