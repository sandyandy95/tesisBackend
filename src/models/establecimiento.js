const {Schema,model, Mongoose}=require('mongoose');
//const encargado =require('../models/encargado')
const establecimientoSchema=new Schema

({
    nombreEstablecimiento: 
    {type: String,
    require: true},
    direccionEstablecimiento: String,
    actividadesEstablecimiento:String,
    encargadoEstablecimiento:[
        {type: Schema.Types.ObjectId,
        ref:'encargado'
    }],

});

module.exports= model('Establecimiento',establecimientoSchema);