var juice = require('../models/juice');
// List of all juice
exports.juice_list = function(req, res) {
res.send('NOT IMPLEMENTED: juice list');
};
// for a specific juice.
exports.juice_detail = function(req, res) {
res.send('NOT IMPLEMENTED: juice detail: ' + req.params.id);
};
// Handle juice create on POST.
exports.juice_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: juice create POST');
};
// Handle juice delete form on DELETE.
exports.juice_delete = function(req, res) {
res.send('NOT IMPLEMENTED: juice delete DELETE ' + req.params.id);
};
// Handle juice update form on PUT.
exports.juice_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: juice update PUT' + req.params.id);
};
