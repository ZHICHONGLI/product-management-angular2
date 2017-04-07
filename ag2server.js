var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();

app.use(express.static(path.join(__dirname, '/dist')));

var port = process.env.PORT || 8080;

//var router = express.Router();
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname,'/dist','index.html'));
	//res.send("222");
});

//app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);