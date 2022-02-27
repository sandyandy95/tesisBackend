const encargadoCtrl ={};
const EncargadoModel=require('../models/encargadoSolicitud')
encargadoCtrl.getEncargados=async(req,res)=>{
   const encargados= await EncargadoModel.find();
    res.json(encargados)
}
encargadoCtrl.createEncargados=async(req,res)=>
{
    const {nombreEncargado, apellidoEncargado,correoEncargado,fechaNacimientoEncargado,cedulaEncargado,passwordEncargado,passwordEncargadoConfirmacion} =req.body;
    const newEncargadoModel=new EncargadoModel({
        nombreEncargado:nombreEncargado,
        apellidoEncargado:apellidoEncargado,
        correoEncargado: correoEncargado,
        fechaNacimientoEncargado:fechaNacimientoEncargado,
        cedulaEncargado: cedulaEncargado,
        passwordEncargado:passwordEncargado,
        passwordEncargadoConfirmacion:passwordEncargadoConfirmacion

    });
    await newEncargadoModel.save();
    console.log(newEncargadoModel.nombreEncargado,newEncargadoModel.apellidoEncargado)
    res.json({message:"note saved"})

//    console.log(req.body);

}
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
        cedulaEncargado,passwordEncargado,passwordEncargadoConfirmacion}=req.body;
    await EncargadoModel.findByIdAndUpdate(req.params.id,{nombreEncargado,
        apellidoEncargado,
        fechaNacimientoEncargado,
        correoEncargado,
        cedulaEncargado,
        passwordEncargado,
        passwordEncargadoConfirmacion
    
    });
    res.json("actualizado")
}

module.exports=encargadoCtrl;
