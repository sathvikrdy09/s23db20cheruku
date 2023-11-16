/*var express = require('express');
var router = express.Router();

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('juice', { title: 'Search Results Juice' });
});

module.exports = router;*/

var express = require('express');
const juice_controlers= require('../controllers/juice');
var router = express.Router();
/* GET juice */
router.get('/', juice_controlers.juice_view_all_Page );
module.exports = router;

router.get('/detail', juice_controlers.juice_view_one_Page);

router.get('/create', juice_controlers.juice_create_Page);

router.get('/update', juice_controlers.juice_update_Page);

router.get('/delete', juice_controlers.juice_delete_Page);
