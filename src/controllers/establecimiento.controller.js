const establecimientoCtrl ={};
const EstablecimientoModel=require('../models/establecimiento')
establecimientoCtrl.getEstablecimientos=async(req,res)=>{
   const establecimientos= await EstablecimientoModel.find();
    res.json(establecimientos)
}
establecimientoCtrl.createEstablecimientos=async(req,res)=>
{
    const {nombreEstablecimiento, encargadoEstablecimiento,
        direccionEstablecimiento,actividadesEstablecimiento} =req.body;
    const newEstablecimientoModel=new EstablecimientoModel({
        nombreEstablecimiento:nombreEstablecimiento,
        encargadoEstablecimiento:encargadoEstablecimiento,
        direccionEstablecimiento: direccionEstablecimiento,
        actividadesEstablecimiento:actividadesEstablecimiento,

    });
    await newEstablecimientoModel.save();
    console.log(newEstablecimientoModel.nombreEstablecimiento,newEstablecimientoModel.encargadoEstablecimiento)
    res.json({message:"note saved"})

//    console.log(req.body);

}
establecimientoCtrl.getEstablecimiento=async(req,res)=>
{
   const newEstablecimientoModel= await EstablecimientoModel.findById(req.params.id);
    res.json(newEstablecimientoModel)
}
establecimientoCtrl.delateEstablecimiento=async(req,res)=>{
    await EstablecimientoModel.findByIdAndDelete(req.params.id);
    res.json({message:'Admin eliminado'})
}
establecimientoCtrl.updateEstablecimiento=async(req,res)=>{
    const {nombreEstablecimiento,encargadoEstablecimiento,
        direccionEstablecimiento,actividadesEstablecimiento}=req.body;
    await EstablecimientoModel.findByIdAndUpdate(req.params.id,{nombreEstablecimiento,
        encargadoEstablecimiento,
        actividadesEstablecimiento,
        direccionEstablecimiento});
    res.json("actualizado")
}

module.exports=establecimientoCtrl;
