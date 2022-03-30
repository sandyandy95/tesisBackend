const ActividadCtrl ={};
//const {uploadImage} =require('../libs/cloudinary.js')
const cloudinary= require ('cloudinary').v2;
const ActividadModel=require('../models/actividad')
cloudinary.config({
    cloud_name:"dgypr0grx",
    api_key:"752778558282185", 
    api_secret:"I5jxirxlrGRVhKdTDizgbZAvRaI"
})
ActividadCtrl.getActividades=async(req,res)=>{
  //const actividades= await ActividadModel.find({establecimientoActividad:req.params.establecimientoActividad});
  const actividades= await ActividadModel.find();

   res.json(actividades)
}
ActividadCtrl.createActividades=async(req,res)=>
{
    const {nombreActividad,descripcionActividad,aforo,horariosDisponiblesActividad,
        establecimientoActividad,categoriaActividad,horariosActividad} =req.body;
        const file=req.files.photo;
        const valor=await cloudinary.uploader.upload(file.tempFilePath,(err,result1)=>{
            return result1;
        }
        )
        console.log("##",valor) 
        const url1= String(valor.url)
        const public_id1= String(valor.public_id)
        const newActividadModel=new ActividadModel({
        nombreActividad:nombreActividad,
        descripcionActividad:descripcionActividad,
        aforo:aforo,
        horariosDisponiblesActividad:horariosDisponiblesActividad,
        establecimientoActividad: establecimientoActividad,
        categoriaActividad:categoriaActividad,
        horariosActividad: horariosActividad,
        imagen:url1
        

    });
    await newActividadModel.save();
    console.log(newActividadModel.idActvidad, newActividadModel.nombreActividad,newActividadModel.horariosDisponiblesActividad,
        newActividadModel.establecimientoActividad,newActividadModel.categoriaActividad,
        newActividadModel.horariosActividad),
    res.status(200).send({status: newActividadModel._id});
    

//    console.log(req.body);

}
ActividadCtrl.getActividad=async(req,res)=>
{
   const newActividadModel= await ActividadModel.findById(req.params.id);
    res.json(newActividadModel)
}
ActividadCtrl.delateActividad=async(req,res)=>{
    await ActividadModel.findByIdAndDelete(req.params.id);
    res.json({message:'Admin eliminado'})
}
ActividadCtrl.updateActividad=async(req,res)=>{
    const {nombreActividad,aforo,descripcionActividad,horariosDisponiblesActividad,establecimientoActividad,categoriaActividad,
        horariosActividad}=req.body;
    await ActividadModel.findByIdAndUpdate(req.params.id,{nombreActividad,descripcionActividad,aforo,
        horariosDisponiblesActividad,
        categoriaActividad,
        establecimientoActividad,
        horariosActividad,        });
    res.json("actualizado")
}

module.exports=ActividadCtrl;
