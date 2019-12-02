const path = require('path');
const router = require('express').Router();
const db = require('json-server');
const books = require('./basket');

router.use('/basket', books);
router.use('/', db.router(path.resolve(`${__dirname}/./database.json`)));

module.exports = router;
