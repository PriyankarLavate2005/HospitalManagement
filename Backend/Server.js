const express=require("express")
const app=express()

const mongoose=require("mongoose")
const User=require("./Models/User")
const cors=require("cors")
const connectDB=require('./Models/DB')
connectDB()
app.use(cors())
app.use(express.json())

app.post('/Signup',async(req,res)=>{
    let user=new User(req.body)
    let result=await user.save();
    res.send(result)
})

app.listen(5000,()=>{
    console.log("Server is started on the port")
})
