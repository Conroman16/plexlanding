let config = {
	appName: 'plexlanding',
	isDev: process.env.NODE_ENV === 'development',
	isProd: process.env.NODE_ENV === 'production',
	webPort: process.env.PORT || 8888,
	saltRounds: 8,
	logLibSassOutput: false,
	registrationEnabled: !!JSON.parse(process.env.REGISTRATION_ENABLED || 'true'),
	loginPath: '/auth/login',
	logoutPath: '/auth/logout',
	registerPath: '/auth/register',
	sessionSecret: process.env.EXPRESS_SESSION_SECRET || 'test_express_session_secret',
	pathsWithoutAuth: [ '/', '/getformauthtoken', '/status', '/songrequest', '/favicon.ico' ],
	redisUrl: process.env.REDIS_URL,
	dbUrl: process.env.DATABASE_URL,
	maxSessionAge: 1000 * 60 * 60 * 24 // 1 day
};

config.pathsWithoutAuth.push(config.loginPath);
config.pathsWithoutAuth.push(config.registerPath);

module.exports = config;