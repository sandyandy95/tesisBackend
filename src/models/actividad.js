const {Schema,model}=require('mongoose');
const establecimiento = require('./establecimiento');
const categoria = require('./categoria');
const horariodeActividad = require('./horariodeactividad');
const actividadSchema=new Schema
({
    nombreActividad:String,
    descripcionActividad:String,
    aforo:Number,
    establecimientoActividad:
        {type: Schema.Types.ObjectId,
        ref:'establecimiento'},
    categoriaActividad:
        {type: Schema.Types.ObjectId,
        ref:'categoria'},
    horariosActividad: [
        {type: Schema.Types.ObjectId,
            ref:'horariodeActividad'
        }],
  /*  imagen:{
        url:String,
        public_id:String
    }*/
    imagen:String,
      

});
module.exports=model('Actividad',actividadSchema);