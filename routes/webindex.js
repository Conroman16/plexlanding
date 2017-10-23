let router = require('express').Router();
let auth = require('../lib/auth');

module.exports = () => {

    router.get('/', (req, res) => res.render('index/index'));

    router.get('/links', (req, res) => {
    	res.json({
			links: [
				{
					href: "https://plexpy.cjtkennedy.com",
					name: "PlexPy",
					order: 5
				},
				{
					href: 'https://plexrequests.cjtkennedy.com',
					name: 'Plex Requests',
					order: 2
				},
				// {
				// 	href: 'mailto:plexadmin@cjtkennedy.com',
				// 	name: 'Email Administrator',
				// 	order: 1
				// },
				{
					href: "https://plexweb.cjtkennedy.com",
					name: "Plex",
					class: "button button--primary button--rounded",
					order: 10
				}
			]
		});
    });

    return router;
};