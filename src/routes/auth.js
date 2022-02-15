const {Router} =require('express');
const {check} =require('express-validator')
const { loginEncargado,tokenEncargado,registroEncargado  }=require('../controllers/auth.controller')
const {validadCampos}=require('../middlerwares/validar-campos')
const {validarJWT}=require('../middlerwares/valida-jwt')
const router=Router();
/*router.post('/new',
[
check('correoEncargado','el email es obligatorio').isEmail(),
check('passwordEncargado','el password debe ser de 6 caracter').isLength({min:6}),
validadCampos
],
registroEncargado );
*/
router.post('/new',registroEncargado );
router.post('/',loginEncargado);
router.get('/renew',validarJWT, tokenEncargado );
module.exports=router;
/*[check('email','el email es obligatorio').isEmail(),
check('password','el password debe ser de 6 caracter').isLength({min:6}),
validadCampos
]*/