const {Schema,model, Mongoose}=require('mongoose');
const establecimientoSchema=new Schema
({
    _id: Schema.Types.ObjectId,
    nombreEstablecimiento: 
    {type: String,
    require: true},
    encargadoEstablecimiento:[
        {type: Schema.Types.ObjectId,
        ref:'encargado'}],
    direccionEstablecimiento: String,
    actividadesEstablecimiento:String,

});
module.exports=model('Establecimiento',establecimientoSchema);