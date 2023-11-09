const mongoose = require("mongoose")
const juiceSchema = mongoose.Schema({
    Juice_name: String,
    Juice_color: String,
    Juice_cost: Number
})
module.exports = mongoose.model("Costume",
juiceSchema)