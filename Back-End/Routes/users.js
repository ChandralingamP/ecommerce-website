const express = require("express");
const router = express.Router();
const Users = require("../Models/users.model");
const Cart = require('../Models/cart.model')
router.route("/:id").get(async (req, res) => {
  try {
    const data = await Users.find({ _id: req.params.id });
    res.status(200).send(data);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.route("/add").post(async (req, res) => {
  try {
    await Users.create({
      _id: req.body.id,
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
    });
    const userId = req.body.id;
    Cart.create({ userId: userId })
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => res.status(400).json("Errors: " + err));

    res.status(200).json("done");
  } catch (err) {
    res.status(400).json(err);
  }
});

router.route("/update/address").post(async (req, res) => {
  const userId = req.body.id;
  const address = req.body.address;
  Users.findOneAndUpdate({ _id: userId }, { address: address }, (err, data) => {
    if (err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

module.exports = router;
