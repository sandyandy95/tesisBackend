const {Router}=require('express');
const router =Router();

const {getEncargados,createEncargados,getEncargado,delateEncargado,updateEncargado} = require('../controllers/encargado.controller')
router.route('/')
.get(getEncargados)
.post(createEncargados)
router.route('/:id')
.get(getEncargado)
.delete(delateEncargado)
.put(updateEncargado)
module.exports=router;
