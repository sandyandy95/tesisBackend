const {Schema,model}=require('mongoose');
const actividad =require('../models/actividad')

const horarioDeActividadSchema=new Schema
({
    horarioInicio: String,
    horarioFin:String,
    fechaFin:Date,
    fechaInicio:Date,
    cantDisponible:Number,
    cantOcupado:Number,
    actvidadHorarioActividad:
        {type: Schema.Types.ObjectId,
        ref:'actividad'
    },

});
module.exports=model('Horario de Actividad',horarioDeActividadSchema);