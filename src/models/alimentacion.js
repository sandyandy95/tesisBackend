const {Schema,model}=require('mongoose');
const alimentacionSchema=new Schema
({
    listPlatos: String

});
module.exports=model('Alimentacion',alimentacionSchema);