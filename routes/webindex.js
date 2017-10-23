let router = require('express').Router();
let auth = require('../lib/auth');

module.exports = () => {

    router.get('/', (req, res) => res.render('index/index'));

    return router;
};