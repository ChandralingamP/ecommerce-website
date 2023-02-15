const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cartSchema = new Schema({
    userId : {type: String, required: true},
    cartItems : []
},{
    timestamps : true,
});

const Cart = mongoose.model("Cart",cartSchema);

module.exports = Cart;