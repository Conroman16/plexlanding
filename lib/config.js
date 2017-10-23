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
	redisUrl: process.env.REDIS_URL || 'redis://rediscloud:HZ8gxLtsDZQLLdqo@redis-16161.c15.us-east-1-4.ec2.cloud.redislabs.com:16161',
	dbUrl: process.env.DATABASE_URL || 'postgres://pebjbeeyxdlzdr:69afb3cd5c66b63baf859ce68f650465fbbfa740cb05a59e7ebfe8cddc5d0b4a@ec2-54-221-196-253.compute-1.amazonaws.com:5432/dap8orkdo6phlp',
	maxSessionAge: 1000 * 60 * 60 * 24 // 1 day
};

config.pathsWithoutAuth.push(config.loginPath);
config.pathsWithoutAuth.push(config.registerPath);

module.exports = config;