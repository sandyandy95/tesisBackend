const {Schema,model}=require('mongoose');
const usuarioSchema=new Schema
({
    nombreUsuario: String,
    apellidoUsuario: String,
    correoUsuario: String,
    fechaNacimientoUsuario:String,
    establecimiento:[
        {type: Schema.Types.ObjectId,
        ref:'establecimiento'}],
    cedulaUsuario: String,
    passwordUsuario: String,
    rol:String

});
module.exports=model('Usuario',usuarioSchema);