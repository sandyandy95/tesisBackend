const {Schema,model}=require('mongoose');
const establecimiento = require('./establecimiento');
const encargadoSchema=new Schema
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
module.exports=model('Encargado',encargadoSchema);