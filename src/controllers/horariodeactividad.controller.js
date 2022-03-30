const horarioDeActividadCtrl ={};
const HorarioDeActividadModel=require('../models/horariodeactividad')
horarioDeActividadCtrl.getHorarioDeActividades=async(req,res)=>{
   //const horarioDeActividades= await HorarioDeActividadModel.find();
   const horarioDeActividades= await HorarioDeActividadModel.find({actvidadHorarioActividad:req.params.actvidadHorarioActividad});

   res.json(horarioDeActividades)
}
horarioDeActividadCtrl.createHorarioDeActividades=async(req,res)=>
{
    const {horarioInicio, horarioFin,fechaInicio,fechaFin,cantDisponible,cantOcupado,actvidadHorarioActividad} =req.body;
    const newHorarioDeActividades=new HorarioDeActividadModel({
        horarioInicio:horarioInicio,
        horarioFin:horarioFin,
        fechaInicio: fechaInicio,
        fechaFin:fechaFin,
        cantDisponible: cantDisponible,
        cantOcupado:cantOcupado,
        actvidadHorarioActividad:actvidadHorarioActividad

    });
    await newHorarioDeActividades.save();
    res.json({message:"note saved"})

//    console.log(req.body);

}
horarioDeActividadCtrl.getHorarioDeActividad=async(req,res)=>
{
   const newHorarioDeActividades= await HorarioDeActividadModel.findById(req.params.id);
    res.json(newHorarioDeActividades)
}
horarioDeActividadCtrl.delateHorarioDeActividad=async(req,res)=>{
    await HorarioDeActividadModel.findByIdAndDelete(req.params.id);
    res.json({message:'Admin eliminado'})
}
horarioDeActividadCtrl.updateHorarioDeActividad=async(req,res)=>{
    const {horarioInicio,horarioFin,fechaInicio,fechaFin,
        cantDisponible,cantOcupado,actvidadHorarioActividad}=req.body;
    await HorarioDeActividadModel.findByIdAndUpdate(req.params.id,{horarioInicio,
        horarioFin,
        fechaFin,
        fechaInicio,
        cantDisponible,
        cantOcupado,
        actvidadHorarioActividad});
    res.json("actualizado")
}

module.exports=horarioDeActividadCtrl;
