const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const usersSchema = new Schema({
    _id : {type: String, required: true},
    userName : {type : String,required: true},
    email : {type: String , required: true},
    password : {type :String,required: true},
    address : []
},{
    timestamps : true,
});

const Users = mongoose.model("users",usersSchema);

module.exports = Users;