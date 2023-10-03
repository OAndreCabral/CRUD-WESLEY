const express = require("express")
const usuarioController = require("../controller/usuario-controller")

const router = express.Router()

router.get("/usuario", usuarioController.findAllUsuario)

router.post("/usuario", usuarioController.createUsuario)

module.exports = router;