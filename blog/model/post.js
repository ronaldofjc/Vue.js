var mongoose      = require('mongoose');
var Schema        = mongoose.Schema;

var postSchema = new Schema({
  title: String,
  author: String,
  body: String,
  //relacionamento entre o modelo user e o post
  //modelo post possui uma referência ao modelo user
  user: {type: mongoose.Schema.Types.ObjetctId, ref: 'User'},
  date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Post', postSchema);
