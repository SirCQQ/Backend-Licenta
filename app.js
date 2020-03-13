const express = require("express")
const PORT = 3000;
const router=require("./router/auth")
const post=require("./router/post")
let app = express()
const mogoose = require("mongoose");
const dotenv=require("dotenv");

dotenv.config();
//Connect to db 

mogoose.connect(process.env.DB_URL,
{ useUnifiedTopology: true , useNewUrlParser: true },
()=>{
    console.log("Connected to database");
})
app.use(express.json())

app.use('/api/user',router);
app.use('/api/post',post)
app.listen(PORT, ()=>{
    console.log(`Server starts at http://localhost:${PORT}`)
})