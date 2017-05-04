'use strict';

const pages = require('../controllers/pages');

module.exports = function(router) {
    router.route('/')
        .get(pages.index);
    router.route('/worker/:id([0-9]+)')
        .get(pages.worker);
    router.route('*')
        .all(pages.error);
    return router;
};
