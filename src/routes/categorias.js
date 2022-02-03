const {Router}=require('express');
const router =Router();

const {getCategorias,createCategorias,getCategoria,delateCategoria,updateCategoria} = require('../controllers/categoria.controller')
router.route('/')
.get(getCategorias)
.post(createCategorias)
router.route('/:id')
.get(getCategoria)
.delete(delateCategoria)
.put(updateCategoria)
module.exports=router;
