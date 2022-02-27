const {Schema,model}=require('mongoose');
const establecimiento = require('./establecimiento');
const encargadoPendienteSchema= Schema
({
    nombreEncargado: String,
    apellidoEncargado: String,
    correoEncargado: String,
    fechaNacimientoEncargado:String,
    cedulaEncargado: String,
    passwordEncargado: {
        type:String,
    },
    passwordEncargadoConfirmacion:String


});
module.exports=model('EncargadoSolicitud',encargadoPendienteSchema);