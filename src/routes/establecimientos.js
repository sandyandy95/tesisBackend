const {Router}=require('express');
const router =Router();

const {getEstablecimientos,createEstablecimientos,
    getEstablecimiento,delateEstablecimiento,
    updateEstablecimiento} = require('../controllers/establecimiento.controller');
//const { updateOne } = require('../models/encargado');
router.route('/')
.get(getEstablecimientos)
.post(createEstablecimientos)
router.route('/:id')
.get(getEstablecimiento)
.delete(delateEstablecimiento)
.put(updateEstablecimiento)
/*router.put('/assingEncargado/:_id',assingEncargado )
//.put(encargadoEstablecimiento)*/

module.exports=router;