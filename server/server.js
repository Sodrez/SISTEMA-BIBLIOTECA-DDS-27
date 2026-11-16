// IMPORTAÇÃO DO MÓDULO DO EXPRESS
const express = require("express")
const app = express()

// MODULO DO NODE PARA LIDAR COM CAMINHO DE ARQUIVOS
const path = require("path")

// IMPORTAR O MÓDULO DO DOTENV, LÊ O ARQUIVO .ENV, E JÁ CONFIGURA O BANCO
require('dotenv').config()

// DEFINE A PORTA DO SERVIDOR 
const port = process.env.PORT || 5000

// CONFIGURAR O EJS COMO TEMPLATE ENGINE
// define o ejs como engine do front - interpreta as paginas
app.set("view engine", "ejs")
//APONTAR PARA O EJS ONDE ESTAO AS PAGINAS
app.set("views", path.join(__dirname,"../client/views") )

// CRIAÇÃO DAS ROTAS

// IMPORTAR AS ROTAS DE USUARIO
const usuarioRoutes = require("./routes/usuarioRoutes.js")

app.use("/usuarios", usuarioRoutes)



// ROTAS PÚBLICAS
app.get("/", (req, res) => {
    res.render('index')
})

app.get("/login", (req, res) => {
 res.render('login')
})

// TRAZ AS CONFIGURAÇÕES DO BANCO
const pool = require("./config/db.js");


// FORÇA A CONEXÃO COM O BANCO

(
    async () =>{
        try{
            await pool.getConnection()
            console.log("Banco foi conectado 😃");
            // SE O BANCO SUBIU, SOBRE O BACKEND

            // FUNÇÃO PARA SUBIR O SERVIDOR
            app.listen(port, () =>{
                console.log(`Servidor na porta: ${port}`);
                console.log(`Link: http://localhost:${port}`);
            })
        }
        catch(erro){
            console.log("ERRO COMPLETO:", erro);
            console.log("CÓDIGO DO ERRO:", erro.code);
            console.log("MENSAGEM:", erro.message);
            process.exit(1)
             //SE DE ERRO ENCERRA A TENTATIVA
        }
    }
)()