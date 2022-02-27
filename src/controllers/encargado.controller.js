const encargadoCtrl ={};
const EncargadoModel=require('../models/encargado')
const EncargadoPendiente=require('../models/encargado')
const response =require('express');
const bcrypt = require('bcrypt')
const {generarJWT}=require('../helpers/jwt')


encargadoCtrl.getEncargados=async(req,res)=>{
   const encargados= await EncargadoModel.find();
    res.json(encargados)
}
encargadoCtrl.createEncargados=async(req,res=response)=>
{
    const {nombreEncargado, apellidoEncargado,correoEncargado,fechaNacimientoEncargado,cedulaEncargado,passwordEncargado,rol} =req.body;
    let newEncargadoModel=new EncargadoModel({
        nombreEncargado:nombreEncargado,
        apellidoEncargado:apellidoEncargado,
        correoEncargado: correoEncargado,
        fechaNacimientoEncargado:fechaNacimientoEncargado,
        cedulaEncargado: cedulaEncargado,
        passwordEncargado:passwordEncargado,
        rol:rol
       
    });
    console.log("ke"+newEncargadoModel)
    console.log("hola body")
    console.log(req.body);
    await newEncargadoModel.save();
    res.json({message:"note saved"})

//    console.log(req.body);


}

/*encargadoCtrl.createEncargados=async(req,res=response)=>{
    //manejo de errores
    const{nombreEncargado,apellidoEncargado,
    correoEncargado,fechaNacimientoEncargado,
    cedulaEncargado,passwordEncargado}=req.body;
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
    }*/


encargadoCtrl.getEncargado=async(req,res)=>
{
   const newEncargadoModel= await EncargadoModel.findById(req.params.id);
    res.json(newEncargadoModel)
}
encargadoCtrl.delateEncargado=async(req,res)=>{
    await EncargadoModel.findByIdAndDelete(req.params.id);
    res.json({message:'Admin eliminado'})
}
encargadoCtrl.updateEncargado=async(req,res)=>{
    const {nombreEncargado,apellidoEncargado,correoEncargado,fechaNacimientoEncargado,
        cedulaEncargado,passwordEncargado}=req.body;
    await EncargadoModel.findByIdAndUpdate(req.params.id,{nombreEncargado,
        apellidoEncargado,
        fechaNacimientoEncargado,
        correoEncargado,
        cedulaEncargado,
        passwordEncargado
    
    });
    res.json("actualizado")
}

module.exports=encargadoCtrl;
