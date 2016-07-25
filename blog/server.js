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
//middleware: run in all requests
//código será executado em toda requisição que o express receber
router.use(function(req, res, next){
  console.warn(req.method + " " + req.url + " with " + JSON.stringify(req.body));
  next();
});
//middleware:  auth
//serve para verificar se o token fornecido pela requisição é válido
var auth = function(req, res, next){
  //var token recebe o conteúdo do token vindo do cliente
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  if(token){
    //método jwt.verify serve para analisar o token fornecido pelo cliente
    jwt.verify(token, secretKey, function(err, decoded){
      //se o token é inválido
      if(err){
        return res.status(403).send({
          success: false,
          message: 'Access denied'
        });
      //se o token é válido
      } else {
        req.decoded = decoded;
        next(); //método next continua o fluxo da execução
      }
    });
  //se não houver um token sendo repassado pelo cliente
  } else {
    return res.status(403).send({
      success: false,
      message: 'Access denied'
    });
  }
}
//simple GET / test
router.get('/', function(req, res){
  res.json({message: 'hello world!'});
});
//roteamento dos usuários, que será acessado inicialmente pela url /users
router.route('/users').get(auth, function(req, res){
  User.find(function(err, users){
    if(err)
      res.send(err);
    res.json(users);
  });
}).post(function(req, res){ //método post /users para cadastrar o usuário
  var user = new User();
  user.name = req.body.name;
  user.login = req.body.login;
  user.password = req.body.password;
  user.save(function(err){ //salva o registro no banco
    if(err)
      res.send(err);
    res.json(user); //retorna o objeto user ao cliente
  })
});

//parei na página 114
