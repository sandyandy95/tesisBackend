const reservaCtrl ={};
const ReservaModel=require('../models/reserva')
reservaCtrl.getReserva=async(req,res)=>{
   const reservas= await ReservaModel.find();
    res.json(reservas)
}
reservaCtrl.createReservas=async(req,res)=>
{
    const {reservaConfirmada, turista,horarioReservado} =req.body;
    const newReservadoModel=new ReservaModel({
        reservaConfirmada:reservaConfirmada,
        turista:turista,
        horarioReservado: horarioReservado,

    });
    await newReservadoModel.save();
    console.log(newReservadoModel.reservaConfirmada,newReservadoModel.turista)
    res.json({message:"note saved"})

//    console.log(req.body);

}
reservaCtrl.getReserva=async(req,res)=>
{
   const newReservadoModel= await ReservaModel.findById(req.params.id);
    res.json(newReservadoModel)
}
reservaCtrl.delateReserva=async(req,res)=>{
    await ReservaModel.findByIdAndDelete(req.params.id);
    res.json({message:'Admin eliminado'})
}
reservaCtrl.updateReserva=async(req,res)=>{
    const {reservaConfirmada,turista,horarioReservado}=req.body;
    await ReservaModel.findByIdAndUpdate(req.params.id,{reservaConfirmada,
        turista,
        fechaNacimientoEncargado,
        horarioReservado
        });
    res.json("actualizado")
}

module.exports=reservaCtrl;
