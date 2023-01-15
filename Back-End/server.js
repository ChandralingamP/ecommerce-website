const express = require("express")
const api = require('./Routes/engineering')
let recentBooks = require('./BookData/RecentBooks')
const app = express()
var cors = require('cors');
app.use(cors());
app.use("/engineering",api);
app.get("/",(req,res)=>{
    console.log(recentBooks);
    res.send(recentBooks);
})

app.listen(5000,()=>{
    console.log("listinging on port 5000");
})