const platoCtrl ={};
const PlatoModel=require('../models/plato')
platoCtrl.getPlatos=async(req,res)=>{
   const platos= await PlatoModel.find();
    res.json(platos)
}
platoCtrl.createPlatos=async(req,res)=>
{
    const {nombrePlato, costoPlato} =req.body;
    const newPlatoModel=new PlatoModel({
        nombrePlato:nombrePlato,
        costoPlato:costoPlato
    });
    await newPlatoModel.save();
    console.log(newPlatoModel.nombrePlato,newPlatoModel.costoPlato)
    res.json({message:"note saved"})

//    console.log(req.body);

}
platoCtrl.getPlato=async(req,res)=>
{
   const newPlatoModel= await PlatoModel.findById(req.params.id);
    res.json(newPlatoModel)
}
platoCtrl.delatePlato=async(req,res)=>{
    await PlatoModel.findByIdAndDelete(req.params.id);
    res.json({message:'Admin eliminado'})
}
platoCtrl.updatePlato=async(req,res)=>{
    const {nombrePlato,costoPlato}=req.body;
    await PlatoModel.findByIdAndUpdate(req.params.id,{nombrePlato,
        costoPlato});
    res.json("actualizado")
}

module.exports=platoCtrl;
