const {Schema,model}=require('mongoose');
const platoSchema=new Schema
({
    nombrePlato:String,
    costoPlato:String

});
module.exports=model('Plato',platoSchema);