const categoriaCtrl ={};
const CategoriaModel=require('../models/categoria')
categoriaCtrl.getCategorias=async(req,res)=>{
   const categorias= await CategoriaModel.find();
    res.json(categorias)
}
categoriaCtrl.createCategorias=async(req,res)=>
{
    const {nombreCategoria, descripcionCategoria} =req.body;
    const newCategoriaModel=new CategoriaModel({
        //nombre categoria modelo
        nombreCategoria:nombreCategoria,
        descripcionCategoria:descripcionCategoria,
    });
    await newCategoriaModel.save();
    console.log(newCategoriaModel.nombreCategoria,newCategoriaModel.descripcionCategoria)
    res.json({message:"note saved"})

//    console.log(req.body);

}
categoriaCtrl.getCategoria=async(req,res)=>
{
   const newCategoriaModel= await CategoriaModel.findById(req.params.id);
    res.json(newCategoriaModel)
}
categoriaCtrl.delateCategoria=async(req,res)=>{
    await CategoriaModel.findByIdAndDelete(req.params.id);
    res.json({message:'Admin eliminado'})
}
categoriaCtrl.updateCategoria=async(req,res)=>{
    const {nombreCategoria,descripcionCategoria}=req.body;
    await CategoriaModel.findByIdAndUpdate(req.params.id,{nombreCategoria,
        descripcionCategoria});
    res.json("actualizado")
}

module.exports=categoriaCtrl;
