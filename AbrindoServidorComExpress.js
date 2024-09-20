let express = require('express');
const app = express();


app.listen(8082,function(){//ABRINDO SERVIDOR
        app.get('/', function(req,res){ //ROTA BASE
        res.send('Seja bem vindo!')
    });
    
    app.get('/sobre', function(req, res){//ROTA SOBRE
        res.send('Minha Pagina Sobre')
    });

    app.get('/Blog', function(req, res){//ROTA BLOG
        res.send('Bem Vindo ao meu Blog')
    });

    console.log('SERVIDOR RODANDO http://localhost:8082')//função callBack
}); //Servidor Aberto 
