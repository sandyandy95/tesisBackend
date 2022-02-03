const {Schema,model}=require('mongoose');
const adminSchema=new Schema
({
    nombreAdmin: String,
    apellidoAdmin: String,
    correoAdmin: String,
    fechaNacimientoAdmin:{
        type: Date

    },
    SuperAdmin: {
        type: Boolean,
        default:true}

});
module.exports=model('Admin',adminSchema);
