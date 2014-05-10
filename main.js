var express = require('express');
var logger = require('./log');

///////////////////////////////////////////////////////////////////////////////////////// MIDDLEWARE
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
};

var app = express();
//app.use(express.cookieParser());
//app.use(express.session({secret: 'fsd98fa9h89fh0dhf'}));
//app.use(express.bodyParser());
//app.use(express.compress());
//app.use(allowCrossDomain);

///////////////////////////////////////////////////////////////////////////////////////////// ROUTES

function hello(req, res) {
  if (req.params.name != null) {
    var name = req.params.name;
    res.json({'message': 'Hello ' + name});
  }
  else {
    res.json({'message': 'Hello world'});
    //res.error(400).send({'message': 'Name required'});
  }
}

function hi(req, res) {
  if (req.params.name != null) {
    var name = req.params.name;
    res.json({'message': 'Hi ' + name});
  }
  else {
    res.json({'message': 'Hi world'});
  }
}

app.get('/hello/:name', hello);
app.get('/hello/', hello);
app.get('/hi/:name', hi);
app.get('/hi/', hi);

////////////////////////////////////////////////////////////////////////////////////// SERVER LISTEN
var port = process.env.PORT || 3000;
app.listen(port, function () { logger.info("Listening on port " + port); });

