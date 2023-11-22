const express = require('express');
const router = express.Router();
const { check } = require('express-validator'); 
const { crearUsuario, loginUsuario, revalidarToken } = require('../Controllers/auth');
const { listatUsuarios } = require('../Controllers/Users')
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-token');

router.post('/', loginUsuario)

router.post(
    '/new', 
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'Debe tener min 6 caracteres').isLength({ min: 6}),
        validarCampos
    ],
    crearUsuario )
router.post('/renew', validarJWT, revalidarToken)

router.get('/', listatUsuarios)

module.exports = router;