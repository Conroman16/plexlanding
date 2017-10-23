let config = require('./config');
let moment = require('moment');

let viewData = {
	IsProd: config.isProd,
	IsDev: config.isDev,
	PageTitle: config.appName,
	LoginPath: config.loginPath,
	LogoutPath: config.logoutPath,
	RegisterPath: config.registerPath
};

viewData.middleware = (req, res, next) => {
	res.locals = Object.assign({}, res.locals, {
		IsAuthed: req.isAuthenticated(),
		IsNotAuthed: req.isUnauthenticated()
	});
	next();
};

module.exports = viewData;