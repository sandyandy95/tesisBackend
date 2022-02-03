const reservaAlimentacionCtrl ={};
const ReservaAlimentacionModel=require('../models/reserva-alimentacion')
reservaAlimentacionCtrl.getReservaAlimentacions=async(req,res)=>{
   const reservaAlimentacions= await ReservaAlimentacionModel.find();
    res.json(reservaAlimentacions)
}
reservaAlimentacionCtrl.createReservaAlimentacions=async(req,res)=>
{
    const {reservaConfirmada, turista,alimentacion,horarioReserva} =req.body;
    const getReservaAlimentacion=new ReservaAlimentacionModel({
        reservaConfirmada:reservaConfirmada,
        turista:turista,
        alimentacion: alimentacion,
        horarioReserva:horarioReserva

    });
    await getReservaAlimentacion.save();
    console.log(getReservaAlimentacion.reservaConfirmada,getReservaAlimentacion.turista)
    res.json({message:"note saved"})

//    console.log(req.body);

}
reservaAlimentacionCtrl.getReservaAlimentacion=async(req,res)=>
{
   const getReservaAlimentacion= await ReservaAlimentacionModel.findById(req.params.id);
    res.json(getReservaAlimentacion)
}
reservaAlimentacionCtrl.delateReservaAlimentacion=async(req,res)=>{
    await ReservaAlimentacionModel.findByIdAndDelete(req.params.id);
    res.json({message:'Admin eliminado'})
}
reservaAlimentacionCtrl.updateReservaAlimentacion=async(req,res)=>{
    const {reservaConfirmada,turista,alimentacion,horarioReserva
    }=req.body;
    await ReservaAlimentacionModel.findByIdAndUpdate(req.params.id,{reservaConfirmada,
        turista,
        horarioReserva,
        alimentacion});
    res.json("actualizado")
}

module.exports=reservaAlimentacionCtrl;
