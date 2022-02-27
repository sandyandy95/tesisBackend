const {Router}=require('express');
const router =Router();

const {getEncargados,createEncargados,getEncargado,delateEncargado,updateEncargado} = require('../controllers/encargadoSolicitud.controller')
router.route('/')
.get(getEncargados)
.post(createEncargados)
router.route('/:id')
.get(getEncargado)
.delete(delateEncargado)
.put(updateEncargado)
//router.route('encargado/:id')
//.put(encargadoEstablecimiento)
module.exports=router;
