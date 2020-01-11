var express = require('express');
var router = express.Router();
var UploadService =  require('../services/fileupload')
const singleUpload = UploadService.single('image');

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.post('/upload',function(req, res) {
  singleUpload(req, res, function(err) {

    if (err) {
      return res.status(422).send({errors: [{title: 'File Upload Error', detail: err.message}] });
    }

    return res.json({'imageUrl': req.file.location});
  });
});


module.exports = router;
