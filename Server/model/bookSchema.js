const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    name: String, 
    title: String,
    Price: Number, 
    Catergory: String, 
    Image: String, 
})

module.exports = mongoose.model("Book", bookSchema);