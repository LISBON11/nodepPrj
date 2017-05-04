'use strict';

const Page = require('../models/page');

exports.index = (req, res) => {

    res.render('main', {'1': '123'});
};

exports.worker = (req, res) => {
    res.send(`Worker with id - ${req.params.id}`);
};

exports.error = (req, res) => {
    res.sendStatus(404);
};