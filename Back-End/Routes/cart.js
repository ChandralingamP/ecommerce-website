const express = require('express');
const router = express.Router();
const Cart = require('../Models/cart.model')
router.route('/items').get((req,res)=>{
    Cart.find().then(exercises => res.json(exercises))
    .catch(err => res.statusCode(400).json('Errors: ' + err));
});
router.route('/add').post((req,res)=>{
    const bookName = req.body.bookName;
    const bookImg = req.body.bookImg;
    const author = req.body.author;
    const price = req.body.price;
    const category = req.body.category;
    const count =1;
    const newItem = new Cart({bookImg,bookName,category,author,price,count});
    newItem.save()
    .then(() => res.json('Items added!'))
    .catch(err => res.status(400).json("Error : " + err));
});
module.exports = router;