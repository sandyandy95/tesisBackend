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
        required:true
    },
    establecimiento:[
        {type: Schema.Types.ObjectId,
        ref:'establecimiento'}],

});
module.exports=model('EncargadoSolicitud',encargadoPendienteSchema);