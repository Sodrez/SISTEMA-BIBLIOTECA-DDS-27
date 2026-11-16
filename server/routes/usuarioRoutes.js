// IMPORTAÇÃO DO MÓDULO DO EXPRESS
const express = require("express")
const router = express.Router()

// IMPORTAR O CONTROLLER DO USUARIO
const usuarioControllers = require("../controllers/usuarioControllers.js")

// ROTAS DO USUÁRIO
// LOGIN
router.get("/login", usuarioControllers.login)


// CRUS

// MOSTRA A PAGINA DE CRIAR USUARIO
router.get("/cadastre", (req, res) => {
    res.send("ESTOU NA PAGINA CADASTRO")
})

router.get("/", (req, res) => {
    res.send("MOSTRANDO A LISTA DE USUARIOS")
})

router.get("/login", usuarioControllers.login )

// EXPORTAR O ROUTER
module.exports = router