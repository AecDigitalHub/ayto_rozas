const express = require('express');
const router  = express.Router();
const apiRoutes = require('./api/index.controller');


// serve angular front end files from root path
router.use('/', express.static('app', { redirect: false }));
 
// rewrite virtual urls to angular app to enable refreshing of internal pages
router.get('*', function (req, res, next) {
    res.sendFile(path.resolve('app/index.html'));
});

router.use('/api', apiRoutes);

module.exports = router;