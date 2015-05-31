
'use strict';


module.exports = function(router) {

router.route('/api/photo')

.post(function(req, res){

  if(done==true){
    console.log(req.files);
    res.end("File uploaded.");
  }
});
};
