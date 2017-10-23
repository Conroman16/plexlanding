let config = require('./config');
let node_redis = require('redis');

node_redis.__currentClient = node_redis.__currentClient || node_redis.createClient(config.redisUrl);

let redis = {

	client: node_redis.__currentClient,

	generatePrefixedKey: (prefix, key) => `${prefix}:${key}`,

	disconnect: (callback) => {
		if (!callback)
			callback = () => {};

		if (!redis.client)
			callback();
		else
			redis.client.quit(callback);
	},

	generateArgsWithTTL: (key, value, ttlInSeconds) => {
		let args = [ key, value ];
		if (ttlInSeconds)
			args.push('EX', ttlInSeconds);
		return args;
	},

	healthCheck: () => {
		return new Promise((resolve, reject) => {
			let retObj = { ok: false };
			redis.client.ping((err, pong) => {
				if (err)
					return reject(Object.assign(retObj, { error: err }));

				if (pong !== 'PONG')
					return reject(Object.assign(retObj, { error: `Incorrect ping response.  Expected 'PONG', got '${pong}'` }));

				return resolve(Object.assign(retObj, { ok: true }));
			});
		});
	}
};

module.exports = redis;