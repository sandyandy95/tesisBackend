const {Schema,model}=require('mongoose');
const categoriaSchema=new Schema
({
    nombreCategoria: String,
    descripcionCategoria: String,


});
module.exports=model('categoria',categoriaSchema);