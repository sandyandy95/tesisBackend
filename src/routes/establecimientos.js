const {Router}=require('express');
const router =Router();

const {getEstablecimientos,createEstablecimientos,
    getEstablecimiento,delateEstablecimiento,
    updateEstablecimiento} = require('../controllers/establecimiento.controller')
router.route('/')
.get(getEstablecimientos)
.post(createEstablecimientos)
router.route('/:id')
.get(getEstablecimiento)
.delete(delateEstablecimiento)
.put(updateEstablecimiento)
module.exports=router;