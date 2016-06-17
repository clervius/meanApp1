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
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback(){
    console.log('Database has been opened')
});


var messageSchema = mongoose.Schema({
    message: String
});
var Message = mongoose.model('Message', messageSchema);
var mongoMessage;
Message.findOne().exec(function(err, messageDoc){
    mongoMessage = messageDoc.message;
});


// routes
app.get('/partials/:partialPath', function(req, res){
    res.render('partials/' + req.params.partialPath);
});
app.get('*', function(req, res){
    res.render('index', {
        mongoMessage: mongoMessage
    });
});

// server
var port = process.env.port || 3030;
app.listen(port);
console.log("JC is listening on port " + port + '...');