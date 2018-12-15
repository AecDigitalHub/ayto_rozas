const express = require('express');
const router  = express.Router();
const apiRoutes = require('./api/index.controller');


// // serve angular front end files from root path
// router.use('/', express.static('app', { redirect: false }));
 
// rewrite virtual urls to angular app to enable refreshing of internal pages
router.get('*', function (req, res, next) {
  res.sendFile(path.resolve('public/index.html'));
});

router.use('/api', apiRoutes, express.static('app', { redirect: false }));

module.exports = router;