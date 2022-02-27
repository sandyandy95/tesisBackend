const {Schema,model}=require('mongoose');
const establecimiento = require('./establecimiento');
const encargadoSchema=new Schema
({
    nombreEncargado: String,
    apellidoEncargado: String,
    correoEncargado: String,
    fechaNacimientoEncargado:String,
    establecimiento:[
        {type: Schema.Types.ObjectId,
        ref:'establecimiento'}],
    cedulaEncargado: String,
    passwordEncargado: String,
    rol:String

});
module.exports=model('Encargado',encargadoSchema);