var passport = require('passport');

module.exports = function(app){

	// routes
	app.get('/partials/*', function(req, res){
	    res.render('../../public/app/' + req.params[0]);
	});

	app.post('/login', function(req, res, next){
		//create a login function
		var auth = passport.authenticate('local', function(err, user){
			if(err){return next(err);}
			if(!user){res.send({success:false})}
			req.logIn(user, function(err){
				if(err){return next(err);}
				res.send({success:true, user: user});
			})
		})
		// call that function
		auth(req, res, next);
	});

	app.get('*', function(req, res){
	    res.render('index');
	});
}