var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var emailSchema = new mongoose.Schema({
	created_at: {type: Date, default: Date.now},
	recipient: string,
  sender: string,
  from: string,
  subject: string,
  body_plain: string,
  stripped_text: string,
  stripped_signature: string,
  body_html: string,
  stripped_html: string,
  attachment_count: string,
  attachment_x: string,
  timestamp: string,
  token: string,
  signature: string,
  message_headers: string,
  content_id_map: string

});

mongoose.model('Email', emailSchema);

