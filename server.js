var express = require('express');
    mongoose = require('mongoose');
    passport = require('passport');
    LocalStrategy = require('passport-local').Strategy;

// config variables
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();
var config = require('./server/config/config')[env];

// express setup
require('./server/config/express')(app, config);
// mongoose setp
require('./server/config/mongoose')(config);

// authentication with passport
var User = mongoose.model('User');
passport.use(new LocalStrategy( function(username, password, done){
    User.findOne({username:username}).exec(function(err, user){
        if(user){
            return done(null, user);
        }else{
            return done(null, false);
        }
    })
}));
passport.serializeUser(function(user, done){
    if(user){
        done(null, user._id);
    }
});
passport.deserializeUser(function(id, done){
    User.findOne({_id:id}).exec(function(err, user){
        if(user){
            return done(null, user);
        }else{
            return done(null, false);
        }
    })
})


// routes setup
require('./server/config/routes')(app);


// server
app.listen(config.port);
console.log("JC is listening on port " + config.port + '...');