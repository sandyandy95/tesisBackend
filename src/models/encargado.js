const {Schema,model}=require('mongoose');
const encargadoSchema=new Schema
({
    nombreEncargado: 
    {type: String,
    required: true},
    apellidoEncargado: String,
    correoEncargado: String,
    fechaNacimientoEncargado:{
        type: Date

    },
    cedulaEncargado: String,
    passwordEncargado: String

});
module.exports=model('Encargado',encargadoSchema);