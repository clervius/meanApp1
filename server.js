var express = require('express');
    stylus = require('stylus');
    logger = require('morgan');
    mongoose = require('mongoose');
    bodyParser = require('body-parser');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();


// configurations
function compile(str, path){
    return stylus(str).set('filename', path);
}

app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(stylus.middleware({
    src: __dirname + '/public',
    compile: compile
    }
));
app.use(express.static(__dirname + '/public'));


// Database
    // Connect to local db in development, and connect to hosted in production
if(env === "development"){
    mongoose.connect('mongodb://localhost/scotchapp')
}else {
    mongoose.connect('mongodb://clervius:JcVrm431@ds038379.mlab.com:38379/scotchapp');
}


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'shit is fucked up - connection error...'));
db.once('open', function callback(){
    if(env === 'development'){
        console.log('Local db has been opened');
    }else{
        console.log('Mlab db has been opened');
    }
});

// routes
app.get('/partials/*', function(req, res){
    res.render('../../public/app/' + req.params[0]);
});
app.get('*', function(req, res){
    res.render('index');
});

// server
var port = process.env.PORT || 3030;
app.listen(port);
console.log("JC is listening on port " + port + '...');