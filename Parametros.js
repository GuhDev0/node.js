let express = require("express");
const app = express();

app.listen(8045, function () {
  app.get("/", function (req, res) {
    res.sendFile(__dirname + "/HTML/index.html"); // Chamando um arquivo HTML Para o meu servidor
  });

  app.get('/porta/:nome/:cargo/:cor', function(req,res){
    res.send(`Ola ${req.params.nome} `) //Exibindo Msg na Tela 
  });
  app.get('/sobre', function(req, res){//ROTA SOBRE
    res.sendFile(__dirname + "/HTML/sobre.html") 
});

  console.log('SERVIDOR ABERTO!')
});
