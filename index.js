const express=require('express');
const authentication=require('./route/authentication')
const app=express();
app.use(express.json())
app.use('/auth',authentication)

app.get('/',(req,res)=>{
    res.send("working")
})

app.listen('9000',()=>{
    console.log("Connected to port 9000");
})