const establecimientoCtrl ={};
const encargado =require('../models/encargado');
const establecimiento = require('../models/establecimiento');
const EstablecimientoModel=require('../models/establecimiento')

establecimientoCtrl.getEstablecimientos=async(req,res)=>{
    const establecimientos= await EstablecimientoModel.find({encargadoEstablecimiento:req.params.encargadoEstablecimiento})

    res.json(establecimientos)
 }
/*establecimientoCtrl.getEstablecimientos=async(req,res)=>{
   const establecimientos1= await EstablecimientoModel.find();
    res.json(establecimientos1)
}*/
establecimientoCtrl.createEstablecimientos=async(req,res)=>
{
    const {nombreEstablecimiento,
        direccionEstablecimiento,actividadesEstablecimiento, encargadoEstablecimiento} =req.body;
    const newEstablecimientoModel=new EstablecimientoModel({
        nombreEstablecimiento:nombreEstablecimiento,
        direccionEstablecimiento: direccionEstablecimiento,
        actividadesEstablecimiento:actividadesEstablecimiento,
        encargadoEstablecimiento:encargadoEstablecimiento

    });
    await newEstablecimientoModel.save();
    console.log(newEstablecimientoModel.nombreEstablecimiento,newEstablecimientoModel.encargadoEstablecimiento)
    res.json({message:"note saved"})

//    console.log(req.body);

}
/*establecimientoCtrl.getEstablecimiento=async(req,res)=>
{
   const newEstablecimientoModel= await EstablecimientoModel.findById(req.params.id)
    res.json(newEstablecimientoModel)
}*/
establecimientoCtrl.delateEstablecimiento=async(req,res)=>{
    await EstablecimientoModel.findByIdAndDelete(req.params.id);
    res.json({message:'Admin eliminado'})
}
establecimientoCtrl.updateEstablecimiento=async(req,res)=>{
    const {nombreEstablecimiento,
        direccionEstablecimiento,actividadesEstablecimiento,encargadoEstablecimiento}=req.body;
    await EstablecimientoModel.findByIdAndUpdate(req.params.id,{nombreEstablecimiento,
        actividadesEstablecimiento,
        direccionEstablecimiento,
        encargadoEstablecimiento});
    res.json("actualizado")
}

/*establecimientoCtrl.encargadoEstablecimiento= async(req,res)=>{ 
    const nuevoEncargado =new encargado.findById(req.encargado._id)
    res.send(encargado)

}*/
/*
establecimientoCtrl.assingEncargado=async(req,res)=>{
    const {_id}=req.params;
    const {encargadoEstablecimiento}=req.body;
    const encargadoUpdate=await EstablecimientoModel.findByIdAndUpdate(
        _id,{$push:{encargadoEstablecimiento:encargadoEstablecimiento}});
    res.send(`${encargadoUpdate.encargadoEstablecimiento}updated`)
},*/



module.exports=establecimientoCtrl;
