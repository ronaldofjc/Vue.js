var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

//Criação de um modelo(como se fosse uma tabela) chamado User
//E que possui os campos name, login, senha
var userSchema = new Schema({
  name: String;
  login: String;
  password: String
});

module.exports = mongoose.model('User', userSchema);
