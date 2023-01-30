const express = require("express")
const cors = require('cors')
const {default : mongoose} = require('mongoose');
require('dotenv').config();

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;

connection.once('open',()=>{
    console.log("Connection made");
});

const cartApi = require('./Routes/cart')
const cartItemApi = require('./Routes/cartItem')
const api = require('./Routes/books')
app.use("/cartItems",cartItemApi);
app.use("/books",api);
app.use("/cart",cartApi);

app.listen(port,()=>{
    console.log("listinging on port 5000");
})