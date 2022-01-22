 const express = require('express')
 const app = express()
 const bodyParser = require('body-parser')
 const config = require('config')

 app.use(bodyParser.json())

//  Crianto rota GET
 app.use('/api/fornecedores',(req,res) =>{

 })
 app.listen(config.get('api.porta'), () => console.log('A API está funcionando'))