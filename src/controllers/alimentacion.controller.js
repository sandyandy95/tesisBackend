const alimentacionCtrl ={};
const AlimentacionModel=require('../models/alimentacion')
alimentacionCtrl.getAlimentacions=async(req,res)=>{
   const alimentacions= await AlimentacionModel.find();
    res.json(alimentacions)
}
alimentacionCtrl.createAlimentacions=async(req,res)=>
{
    const {listPlatos} =req.body;
    const newAlimentacionModel=new AlimentacionModel({
        listPlatos:listPlatos

    });
    await newAlimentacionModel.save();
    console.log(newAlimentacionModel.listPlatos)
    res.json({message:"note saved"})

//    console.log(req.body);

}
alimentacionCtrl.getAlimentacion=async(req,res)=>
{
   const newAlimentacionModel= await AlimentacionModel.findById(req.params.id);
    res.json(newAlimentacionModel)
}
alimentacionCtrl.delateAlimentacion=async(req,res)=>{
    await AlimentacionModel.findByIdAndDelete(req.params.id);
    res.json({message:'Admin eliminado'})
}
alimentacionCtrl.updateAlimentacion=async(req,res)=>{
    const {listPlatos}=req.body;
    await AlimentacionModel.findByIdAndUpdate(req.params.id,{listPlatos
       });
    res.json("actualizado")
}

module.exports=alimentacionCtrl;
