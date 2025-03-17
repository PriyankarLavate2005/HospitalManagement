const mongoose=require('mongoose')


const connectDB=async()=>{
    try{
        mongoose.connect("mongodb://localhost:27017/e-commerce")
        console.log("mongoDB connected")
    }
    catch(e){
        console.log("some error is occure",e)
    }
}
module.exports=connectDB;
