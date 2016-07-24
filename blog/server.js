//Referenciando as bibliotecas que usaremos neste código
var express  = require('express');
//variável app que contém a instância do servidor express
var app = express();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
//variável secret key que será usada em conjunto com o módulo jsonwebtoken
//Vai gerar um token de acesso ao usuário, quando o mesmo logar
var secretKey = "MySuperSecretKey";
//Database in the cloud
var mongoose = require('mongoose');
//conecta no banco de dados do serviço mongolab
mongoose.connect('mongodb://root:123456@ds015700.mlab.com:15700/blog', function(err){
  if (err) {
    console.error("error! " + err)
  }
});
//configuração do bodyparser através do método use do express, representado pela var app
//o bodyparser irá obter os dados de uma requisição json e formatar para usar na aplicação
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//Importação dos modelos criados e que referenciam Post e User
var Post = require('./model/post');
var User = require('./model/user');
//criação do router, preparação para o express se comportar como uma API
//Um Router é responsável em obter as requisições e executar um determinado código
//dependendo do formato da requisição, GET, POST, PUT, DELETE
var router = express.Router();
//static files
//configuração do diretório / como estático, ou seja, todo conteúdo neste diretório
//será tratado como um arquivo, que quando requisitado, deverá ser entregue ao requisitante
app.use('/', express.static(__dirname+'/'));

//Parei na página 110 do livro
