var express = require('express');
var router = express.Router();
const formController = require('../controllers/formController');

router.get('/', function (req, res, next) {
  res.render('birds-create-form');
});

router.post('/', function (req, res, next) {
  formController.form_post(req, res);
});

module.exports = router;