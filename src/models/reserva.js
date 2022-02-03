const {Schema,model}=require('mongoose');
const reservaSchema=new Schema
({
    reservaConfirmada:String,
    turista:String,
    horarioReservado: String

});
module.exports=model('Reserva',reservaSchema);