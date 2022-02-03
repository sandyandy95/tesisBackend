const {Router}=require('express');
const router =Router();

const {getAdmins,createAdmins,getAdmin,delateAdmin,updateAdmin} = require('../controllers/admins.controller')
router.route('/')
.get(getAdmins)
.post(createAdmins)
router.route('/:id')
.get(getAdmin)
.delete(delateAdmin)
.put(updateAdmin)
module.exports=router;
