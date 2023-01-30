const express = require("express")
const router = express.Router();
const Cart = require('../Models/cart.model')
router.post("/items", async (req, res) => {
    let category = req.body.category;
    category = category.charAt(0).toUpperCase() + category.slice(1);
    console.log(category);
    Cart.find({category:category}).then(exercises => res.json(exercises))
        .catch(err => res.statusCode(400).json('Errors: ' + err));
});

module.exports = router;