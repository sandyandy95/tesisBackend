const {Schema,model}=require('mongoose');
const actividadSchema=new Schema
({
    nombreActividad:String,
    horariosDisponiblesActividad:String,
    establecimientoActividad: String,
    categoriaActividad:String,
    horariosActividad: String

});
module.exports=model('Actividad',actividadSchema);