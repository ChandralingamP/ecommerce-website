const express = require("express");
const router = express.Router();
const Cart = require("../Models/cart.model");
router.route("/items").post((req, res) => {
  const userId = req.body.userId;
  console.log("cartItem"+userId);
  Cart.find({ userId: userId })
    .then((data) => {
      res.json(data[0].cartItems);
      console.log(data[0].cartItems);
    })
    .catch((err) => res.status(400).json("Errors: " + err));
});
// router.route("/add/:id").get(async (req, res) => {
//   const userId = req.params.id;
//   Cart.create({ userId: userId })
//     .then((data) => {
//       res.status(200).json(data);
//       console.log(data,"jhbjkuysuyf");
//     })
//     .catch((err) => res.statusCode(400).json("Errors: " + err));
// });
router.route("/update").post(async (req, res) => {
  const userId = req.body.id;
  const cartItems = req.body.cartItems;
  Cart.findOneAndUpdate(
    { userId: userId },
    { cartItems: cartItems },
    (err, data) => {
      if (err) {
        console.log(err);
        res.status(400).send(err);
      } else {
        console.log(data,"sdfsdfsf");
        res.status(200).send(data);
      }
    }
  );
});

module.exports = router;
