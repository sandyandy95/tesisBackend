const {Router}=require('express');
const router =Router();

const {getReservas,createReservas,getReserva,delateReserva,updateReserva} = require('../controllers/reserva.controller')
router.route('/')
.get(getReservas)
.post(createReservas)
router.route('/:id')
.get(getReserva)
.delete(delateReserva)
.put(updateReserva)
module.exports=router;
