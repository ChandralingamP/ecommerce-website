const router = require("express").Router()
const Tags = require("../models/tags.model")

router.route("/add").post( async(req,res)=>{
    try{
        const data = req.body;
        const d = await Tags.findOne({tag : data.tag});
        if(d){
           res.json("Exits paki.."); 
        }else{
            const da = await Tags.create(data);
            res.status(200).json(da);
        }
    }catch(err){
        res.status(400).json(err);
    }
});

router.route('/').get(async (req,res)=>{
    try{
        const data = await Tags.find().limit(30);
        res.status(200).json(data);
    }catch(err){
        res.status(400).json(err);
    }
})


module.exports = router;