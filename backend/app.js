const express=require('express');
const mongoose=require('mongoose');
const cors =require('cors')
const router=require("./routes/book-routes");
const app=express();
app.use(express.json());
app.use(cors());
app.use("/books",router);

mongoose.connect("mongodb://127.0.0.1:27017/bookstore"
).then(()=>console.log("connected db"))
.then(()=>{
    app.listen(5000);
}).catch((err)=>{console.log(err);});
