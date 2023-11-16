var juice = require('../models/juice');



// for a specific juice.
exports.juice_detail = function(req, res) {
res.send('NOT IMPLEMENTED: juice detail: ' + req.params.id);
};
// Handle juice create on POST.
exports.juice_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: juice create POST');
};


// Handle juice delete on DELETE.
exports.juice_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await juice.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    



// for a specific Juice.
exports.juice_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await juice.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};


// List of all juice
exports.juice_list = async function(req, res) {
    try{
    thejuice = await juice.find();
    res.send(thejuice);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
// VIEWS
// Handle a show all view
exports.juice_view_all_Page = async function(req, res) {
    try{
    thejuice = await juice.find();
    res.render('juice', { title: 'juice Search Results', results: thejuice });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    
   // Handle Juice update form on PUT.
    exports.juice_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await juice.findById( req.params.id)
    // Do updates of properties
    if(req.body.Juice_name)
    toUpdate.Juice_name = req.body.Juice_name;
    if(req.body.Juice_color) toUpdate.Juice_color = req.body.Juice_color;
    if(req.body.Juice_cost) toUpdate.Juice_cost = req.body.Juice_cost;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };


    
    // Handle juice create on POST.
exports.juice_create_post = async function(req, res) {
    console.log(req.body)
    let document = new juice();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"juice_type":"goat", "cost":12, "size":"large"}
    //[{ Juice_name:'Apple', Juice_color:'Red',Juice_cost:60 },{ Juice_name:'Guava', Juice_color:'Green',Juice_cost:70  }]
    document.Juice_name = req.body.Juice_name;
    document.Juice_color = req.body.Juice_color;
    document.Juice_cost = req.body.Juice_cost;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    