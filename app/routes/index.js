'use strict';

var path = process.cwd();
var multer  = require('multer');
var storage = multer.memoryStorage()
var upload = multer({ storage: storage })

module.exports = function (app) {
    
    app.get('/',function (req, res) {
		res.sendFile(path + '/public/index.html');
	});
	
	
	app.post('/', multer().single('the-file'), function(req, res, next) {
      console.log('file', req.file.size);
      res.setHeader('Content-Type', 'application/json');
      res.json("file size: " + req.file.size);
    });
	

    
	
};
