const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const cartItemSchema = new Schema({
    _id : {type : String, required:true},
    bookImg: { type: String, required: true },
    bookName: { type: String, required: true },
    category: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    count: { type: Number, required: true }
},{
    timestamps : true,
})

const CartItems = mongoose.model("CartItems",cartItemSchema);

module.exports = CartItems;