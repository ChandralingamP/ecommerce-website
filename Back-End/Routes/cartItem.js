const express = require('express');
const router = express.Router();
const CartItems = require('../Models/cartItem.model')
router.route('/items').get((req, res) => {
    CartItems.find().then(exercises => res.json(exercises))
        .catch(err => res.statusCode(400).json('Errors: ' + err));
});

const getItemCount = async (id) => {
    let res=0;
    await CartItems.findById(id).exec()
        .then((doc) => {
            if (!doc) {console.log(res)}
            else {  res = doc.count;console.log(doc.count,"////");}
        })
        .catch((err) => console.log("when finding err"));
    return res;
}

router.route('/clear').delete(()=>{
    CartItems.remove({}, (err) => {
        if (err) return handleError(err);
        console.log("Documents removed successfully");
      });
})

router.route('/remove').post(async(req,res)=>{
    const _id = req.body.item._id;
    let count = await getItemCount(_id);
    console.log(count)
    count -=1;
    if(count == 0){
        CartItems.findByIdAndRemove(_id, (err, doc) => {
            if (err) return handleError(err);
          });
    }else{
        CartItems.findByIdAndUpdate(_id, { count :count }).exec()
                .catch((err) => console.log(err.message));
    }
    await CartItems.find().then(exercises => res.json(exercises))
        .catch(err => res.statusCode(400).json('Errors: ' + err));
})

router.route('/add').post(async(req, res) => {
    const _id = req.body.item._id;
    const bookName = req.body.item.bookName;
    const bookImg = req.body.item.bookImg;
    const author = req.body.item.author;
    const price = req.body.item.price;
    const category = req.body.item.category;
    let count = 1 + await getItemCount(_id);
    console.log(count);
    // console.log({ _id,bookName,category,author,price,count });
    if (count === 1) {
    const newItem = new CartItems({_id,bookImg,bookName,category,author,price,count });
    newItem.save()
        .then((data) => {console.log(data)})
        .catch(err => {console.log("eerrr"); res.status(400).json("Error : " + err)});
    } else {
        CartItems.findByIdAndUpdate(_id, { count :count }).exec()
            .then((doc) => console.log("count"+ doc.count))
            .catch((err) => console.log(err.message));
    }
    await CartItems.find().then(exercises => res.json(exercises))
        .catch(err => res.statusCode(400).json('Errors: ' + err));
});
module.exports = router;