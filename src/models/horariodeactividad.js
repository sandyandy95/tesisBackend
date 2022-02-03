const {Schema,model}=require('mongoose');
const horarioDeActividadSchema=new Schema
({
    horarioInicio: String,
    horarioFin:String,
    fechaFin:String,
    fechaInicio:String,
    cantDisponible:String,
    cantOcupado:String,
    actvidadHorarioActividad:String

});
module.exports=model('Horario de Actividad',horarioDeActividadSchema);