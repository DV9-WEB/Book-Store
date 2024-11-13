import mongoose from "mongoose"

const bookSchema = mongoose.Schema({
    name: String, 
    title: String,
    Price: Number, 
    Catergory: String, 
    Image: String, 
})

const Book = mongoose.model("Book", bookSchema);
export default Book