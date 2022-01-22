const roteador = require('express').Router()
//  Crianto rota GET
roteador.use('/',(requisicao,resposta) =>{
    resposta.send('OK')
})

module.exports = roteador