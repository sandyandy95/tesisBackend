const adminCtrl ={};
const AdminModel=require('../models/admin')
const AdminPendiente=require('../models/admin')
const response =require('express');
const bcrypt = require('bcrypt')
const {generarJWT}=require('../helpers/jwt');

adminCtrl.getAdmins=async(req,res)=>{
   const admins= await AdminModel.find();
    res.json(admins)
}
/*adminCtrl.createAdmins=async(req,res)=>
{
    
    const {nombreAdmin, apellidoAdmin,correoAdmin,fechaNacimientoAdmin,SuperAdmin,passwordAdmin,rol} =req.body;
    const newAdminModel=new AdminModel({
        nombreAdmin:nombreAdmin,
        apellidoAdmin:apellidoAdmin,
        correoAdmin: correoAdmin,
        fechaNacimientoAdmin:fechaNacimientoAdmin,
        SuperAdmin:SuperAdmin,
        passwordAdmin:passwordAdmin,
        rol:rol

    });
    await newAdminModel.save();
    console.log(newAdminModel.nombreAdmin,newAdminModel.apellidoAdmin)
    res.json({message:"note saved"})

//    console.log(req.body);
}
const{nombreAdmin,
    apellidoAdmin,
    correoAdmin,
    fechaNacimientoAdmin,
    passwordAdmin}=req.body;
    try{
    let encargadoPendiente=await AdminModel.findOne({correoAdmin});
    if(encargadoPendiente){
                
        return res.status(400).json({
                
                        ok:false,
                        msg:'ya hay este correo'
            }
        )
    }
    
    encargadoPendiente =new AdminModel(req.body);
    //encriptar 
    const salt  =bcrypt.genSaltSync();
    encargadoPendiente.passwordAdmin=bcrypt.hashSync(passwordAdmin,salt);
    
    
    await encargadoPendiente.save();
    //generar
    const token=await generarJWT(encargadoPendiente.id,encargadoPendiente.nombreAdmin)
    res.status(201).json({
            ok: true,
            msg:'registro',
            uid:encargadoPendiente.id,
            nombreAdmin:encargadoPendiente.nombreAdmin,
    
            token
        })
    
    }catch(error){
        console.log(error)
        res.status(500).json(
            {
                ok:false,
                msg:"hable con el admin"
            }
        )
    }
    }*/
    adminCtrl.createAdmins=async(req,res=response)=>{
        //manejo de errores
        const{nombreAdmin, apellidoAdmin,correoAdmin,
            fechaNacimientoAdmin,SuperAdmin,
            passwordAdmin,rol}=req.body;
        try{
        let adminPendiente=await AdminPendiente.findOne({correoAdmin});
        if(adminPendiente){
            return res.status(400).json({
                    
                            ok:false,
                            msg:'ya hay este correo'
                }
            )
        }
        
        adminPendiente =new AdminPendiente(req.body);
        //encriptar 
        const salt  =bcrypt.genSaltSync();
        adminPendiente.passwordAdmin=bcrypt.hashSync(passwordAdmin,salt);
        
        
        await adminPendiente.save();
        //generar
        const token=await generarJWT(adminPendiente.id,adminPendiente.nombreAdmin)
        res.status(201).json({
                ok: true,
                msg:'registro',
                uid:adminPendiente.id,
                nombreAdmin:adminPendiente.nombreAdmin,
        
                token
            })
        
        }catch(error){
            console.log(error)
            res.status(500).json(
                {
                    ok:false,
                    msg:"hable con el admin"
                }
            )
        }
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
    const {nombreAdmin,apellidoAdmin,correoAdmin,fechaNacimientoAdmin,passwordAdmin,rol}=req.body;
    await AdminModel.findByIdAndUpdate(req.params.id,{nombreAdmin,
        apellidoAdmin,
        fechaNacimientoAdmin,
        correoAdmin,
        passwordAdmin,
    rol});
    res.json("actualizado")
}

module.exports=adminCtrl;