var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');


module.exports = {
	development: {
		db: 'mongodb://localhost/scotchapp',
		rootPath: rootPath,
		port: process.env.PORT || 3030,
		where: 'development'
	},
	production: {
		db: 'mongodb://clervius:JcVrm431@ds038379.mlab.com:38379/scotchapp',
		rootPath: rootPath,
		port: process.env.PORT || 80,
		where: 'production'
	}
}