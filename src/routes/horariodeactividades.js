const {Router}=require('express');
const router =Router();

const {getHorarioDeActividades,createHorarioDeActividades,
    getHorarioDeActividad,delateHorarioDeActividad,
    updateHorarioDeActividad} = require('../controllers/horariodeactividad.controller')
router.route('/')
.get(getHorarioDeActividades)
.post(createHorarioDeActividades)
router.route('/:id')
.get(getHorarioDeActividad)
.delete(delateHorarioDeActividad)
.put(updateHorarioDeActividad)
module.exports=router;