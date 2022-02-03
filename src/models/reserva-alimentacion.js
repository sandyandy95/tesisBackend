const {Schema,model}=require('mongoose');
const ReservaAlimentacionSchema=new Schema
({
    reservaConfirmada: String,
    turista: String,
    alimentacion: String,
    horarioReserva:String

});
module.exports=model('ReservaAlimentacion',ReservaAlimentacionSchema);