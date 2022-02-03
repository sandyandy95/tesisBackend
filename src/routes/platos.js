const {Router}=require('express');
const router =Router();

const {getPlatos,createPlatos,getPlato,delatePlato,updatePlato} = require('../controllers/platos.controller')
router.route('/')
.get(getPlatos)
.post(createPlatos)
router.route('/:id')
.get(getPlato)
.delete(delatePlato)
.put(updatePlato)
module.exports=router;