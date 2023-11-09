var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var juice_controller = require('../controllers/juice');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// juice ROUTES ///
// POST request for creating a juice.
router.post('/juice', juice_controller.juice_create_post);
// DELETE request to delete juice.
router.delete('/juice/:id', juice_controller.juice_delete);
// PUT request to update juice.
router.put('/juice/:id', juice_controller.juice_update_put);
// GET request for one juice.
router.get('/juice/:id', juice_controller.juice_detail);
// GET request for list of all juice items.
router.get('/juice', juice_controller.juice_list);
module.exports = router;



