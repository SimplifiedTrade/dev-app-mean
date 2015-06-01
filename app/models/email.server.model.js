var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var emailSchema = new mongoose.Schema({
	created_at: {type: Date, default: Date.now},
	recipient: string,
  sender: string,
  from: string,
  subject: string,
  body-plain: string,
  stripped-text: string,
  stripped-signature: string,
  body-html: string,
  stripped-html: string,
  attachment-count: string,
  attachment-x: string,
  timestamp: string,
  token: string,
  signature: string,
  message-headers: string,
  content-id-map: string

});

mongoose.model('Email', emailSchema);

