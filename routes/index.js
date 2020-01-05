var express = require('express');
var router = express.Router();
var controller=require('../controller/controller')
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/',controller.dosomething);
router.get('/test',controller.nextpage);
router.post('/',controller.registuser);

module.exports = router;
