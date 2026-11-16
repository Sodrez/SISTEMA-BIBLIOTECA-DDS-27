// IMPORTAÇÃO DO MODEL
const usuarioModels = require("../models/usuarioModels.js")

// EXPORTAR AS FUNÇÕES DO CONTROLLER
module.exports= {
    // LOGIN
    login : (req, res) => {
        // EXECUTAR A FUNÇÃO NO MODEL
        usuarioModels.login()

        // DIZ A RESPOSTA
        res.send("VOU CHAMAR O MODEL PRA LOGAR")
    },
    // CRUD
    // CREATE
    criar: () =>{
        
    },
    // READ
    listar: () => {
       
    },
    // UPDADE
    atualizar: () =>{
      
    },
    // DELETE
    deletar: () =>{
      
    }
}