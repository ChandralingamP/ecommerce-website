const express = require("express")

const router = express.Router();

router.get("/get",(req,res)=>{
    res.json({mgs: "kjsndfj"});
})

module.exports = router