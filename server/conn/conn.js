const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const conn = async(req,res,next)=>{
  try{
    await mongoose.connect("mongodb+srv://admin:admin123@uploader.wevekmu.mongodb.net/Uploader?retryWrites=true&w=majority").then(()=> {
      console.log("connected");
    } )
  }catch(error){
    res.status(400).json({message:"Not Connected"})
    console.log(error);
  }
};

conn();
