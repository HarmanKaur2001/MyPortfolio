var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About me' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: ' My contact info' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'About my projects' });
});

module.exports = router;
