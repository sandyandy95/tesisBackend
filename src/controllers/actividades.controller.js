const ActividadCtrl ={};
const ActividadModel=require('../models/actividad')
ActividadCtrl.getActividades=async(req,res)=>{
   const actividades= await ActividadModel.find();
    res.json(actividades)
}
ActividadCtrl.createActividades=async(req,res)=>
{
    const {nombreActividad, horariosDisponiblesActividad,establecimientoActividad,categoriaActividad,horariosActividad} =req.body;
    const newActividadModel=new ActividadModel({
        nombreActividad:nombreActividad,
        horariosDisponiblesActividad:horariosDisponiblesActividad,
        establecimientoActividad: establecimientoActividad,
        categoriaActividad:categoriaActividad,
        horariosActividad: horariosActividad

    });
    await newActividadModel.save();
    console.log(newActividadModel.nombreActividad,newActividadModel.horariosDisponiblesActividad,
        newActividadModel.establecimientoActividad,newActividadModel.categoriaActividad,
        newActividadModel.horariosActividad)
    res.json({message:"note saved"})

//    console.log(req.body);

}
ActividadCtrl.getActividad=async(req,res)=>
{
   const newActividadModel= await ActividadModel.findById(req.params.id);
    res.json(newActividadModel)
}
ActividadCtrl.delateActividad=async(req,res)=>{
    await ActividadModel.findByIdAndDelete(req.params.id);
    res.json({message:'Admin eliminado'})
}
ActividadCtrl.updateActividad=async(req,res)=>{
    const {nombreActividad,horariosDisponiblesActividad,establecimientoActividad,categoriaActividad,
        horariosActividad}=req.body;
    await ActividadModel.findByIdAndUpdate(req.params.id,{nombreActividad,
        horariosDisponiblesActividad,
        categoriaActividad,
        establecimientoActividad,
        horariosActividad});
    res.json("actualizado")
}

module.exports=ActividadCtrl;
