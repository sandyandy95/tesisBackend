const {Router}=require('express');
const router =Router();

const {getActividades,createActividades,getActividad,delateActividad,updateActividad} = require('../controllers/actividades.controller')
router.route('/')
.get(getActividades)
.post(createActividades)
router.route('/:id')
//.get(getActividad)
.delete(delateActividad)
.put(updateActividad)
//router.route('/:establecimientoActividad')
//.get(getActividades)
module.exports=router;
