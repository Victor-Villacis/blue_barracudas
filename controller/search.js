var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/search', function(req, res, next) {
  //console.log("request is " + req.user.username);
  res.send('/public/partials/search.html');
});

module.exports = router;
