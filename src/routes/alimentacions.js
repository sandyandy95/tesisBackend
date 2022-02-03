const {Router}=require('express');
const router =Router();

const {getAlimentacions,createAlimentacions,getAlimentacion,delateAlimentacion,updateAlimentacion} = require('../controllers/alimentacion.controller')
router.route('/')
.get(getAlimentacions)
.post(createAlimentacions)
router.route('/:id')
.get(getAlimentacion)
.delete(delateAlimentacion)
.put(updateAlimentacion)
module.exports=router;
