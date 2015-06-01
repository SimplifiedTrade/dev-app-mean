
'use strict';

var mongoose = require( 'mongoose' );
var Email = mongoose.model('Email');

module.exports = function(router) {

router.route('/emails')
  //creates a new email
  .post(function(req, res){

    var email = new Email();
      email.recipient = req.body.recipient;
      email.sender = req.body.sender;
      email.from = req.body.from;
      email.subject = req.body.subject;
//      email.body_plain = req.body.body-plain;
//      email.stripped_text = req.body.stripped-text;
//      email.stripped_signature = req.body.stripped-signature;
//      email.body_html = req.body.body-html;
//      email.stripped_html = req.body.stripped-html;
//      email.attachment_count = req.body.attachment-count;
//      email.attachment_x = req.body.attachment-x;
      email.timestamp = req.body.timestamp;
      email.token = req.body.token;
      email.signature = req.body.signature;
//      email.message_headers = req.body.message-headers;
//      email.content_id_map = req.body.content-id-map;      

    email.save(function(err, email) {
      if (err){
        return res.send(500, err);
      }
      return res.json(email);
    });
  })
  //gets all emails
  .get(function(req, res){
    console.log('debug1');
    Email.find(function(err, emails){
      console.log('debug2');
      if(err){
        return res.send(500, err);
      }
      return res.send(200,emails);
    });
  });

//email-specific commands. likely won't be used
router.route('/emails/:id')
  //gets specified email
  .get(function(req, res){
    Email.findById(req.params.id, function(err, email){
      if(err)
        res.send(err);
      res.json(email);
    });
  }) 
  //updates specified email
  .put(function(req, res){
    Email.findById(req.params.id, function(err, email){
      if(err)
        res.send(err);

      email.recipient = req.body.recipient;
      email.sender = req.body.sender;
      email.from = req.body.from;
      email.subject = req.body.subject;
      email.body_plain = req.body.body-plain;
      email.stripped_text = req.body.stripped-text;
      email.stripped_signature = req.body.stripped-signature;
      email.body_html = req.body.body-html;
      email.stripped_html = req.body.stripped-html;
      email.attachment_count = req.body.attachment-count;
      email.attachment_x = req.body.attachment-x;
      email.timestamp = req.body.timestamp;
      email.token = req.body.token;
      email.signature = req.body.signature;
      email.message_headers = req.body.message-headers;
      email.content_id_map = req.body.content-id-map;



      email.save(function(err, email){
        if(err)
          res.send(err);

        res.json(email);
      });
    });
  })
  //deletes the email
  .delete(function(req, res) {
    Email.remove({
      _id: req.params.id
    }, function(err) {
      if (err)
        res.send(err);
      res.json("deleted :(");
    });
  });
};
