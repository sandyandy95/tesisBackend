const adminCtrl ={};
const AdminModel=require('../models/admin')
adminCtrl.getAdmins=async(req,res)=>{
   const admins= await AdminModel.find();
    res.json(admins)
}
adminCtrl.createAdmins=async(req,res)=>
{
    const {nombreAdmin, apellidoAdmin,correoAdmin,fechaNacimientoAdmin,SuperAdmin} =req.body;
    const newAdminModel=new AdminModel({
        nombreAdmin:nombreAdmin,
        apellidoAdmin:apellidoAdmin,
        correoAdmin: correoAdmin,
        fechaNacimientoAdmin:fechaNacimientoAdmin,
        SuperAdmin:SuperAdmin

    });
    await newAdminModel.save();
    console.log(newAdminModel.nombreAdmin,newAdminModel.apellidoAdmin)
    res.json({message:"note saved"})

//    console.log(req.body);

}
adminCtrl.getAdmin=async(req,res)=>
{
   const newAdminModel= await AdminModel.findById(req.params.id);
    res.json(newAdminModel)
}
adminCtrl.delateAdmin=async(req,res)=>{
    await AdminModel.findByIdAndDelete(req.params.id);
    res.json({message:'Admin eliminado'})
}
adminCtrl.updateAdmin=async(req,res)=>{
    const {nombreAdmin,apellidoAdmin,correoAdmin,fechaNacimientoAdmin,
        SuperAdmin}=req.body;
    await AdminModel.findByIdAndUpdate(req.params.id,{nombreAdmin,
        apellidoAdmin,
        fechaNacimientoAdmin,
        correoAdmin,
        SuperAdmin});
    res.json("actualizado")
}

module.exports=adminCtrl;
