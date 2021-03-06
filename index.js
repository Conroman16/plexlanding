if (!process.env.NODE_ENV){
	if (process.argv[2])
		process.env.NODE_ENV = process.argv[2];
	else
		process.env.NODE_ENV = 'development';
}

console.log(`${process.env.NODE_ENV.toUpperCase()} MODE`);

let config = require('./lib/config');

require('./lib/extensions');  // Configure extensions
let db = require('./db'),
	server = require('./lib/server');

// Suppress bluebird warnings
//  - This app does not directly depend on bluebird (and probably never will now that ES6 includes native native Promises),
//  - so its warnings aren't really important at this point
// require('bluebird').config({ warnings: false });

db.sequelize.sync().then(() => {
	server.start();
});