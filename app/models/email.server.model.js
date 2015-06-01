var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var emailSchema = new mongoose.Schema({
	created_at: {type: Date, default: Date.now},
	recipient: String,
	sender: String,
  	from: String,
  	subject: String,
  	body_plain: String,
  	stripped_text: String,
  	stripped_signature: String,
  	body_html: String,
  	stripped_html: String,
  	attachment_count: String,
  	attachment_x: String,
  	timestamp: String,
  	token: String,
  	signature: String,
  	message_headers: String,
  	content_id_map: String

});

mongoose.model('Email', emailSchema);

