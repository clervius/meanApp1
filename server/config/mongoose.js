var mongoose = require('mongoose');

module.exports = function(config) {
	// db setup
	mongoose.connect(config.db);

	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'shit is fucked up - connection error...'));
	db.once('open', function callback(){
	    console.log('db connection established in ' + config.where)
	});


	var userSchema = mongoose.Schema({
		firstName: String,
		lastName: String,
		username: String
	});

	var User = mongoose.model('User', userSchema);

	User.find({}).exec(function(err, collection){
		if(collection.length === 0) {
			User.create({firstName: 'JC',lastName: 'Clervius',username:'clervius'});
			User.create({firstName: 'John',lastName: 'pDos',username:'johnpdos'});
			User.create({firstName: 'James',lastName: 'Estimable',username:'gqGuy'})
		}
	})

}