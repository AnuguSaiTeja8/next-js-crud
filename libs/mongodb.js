import mongoose from "mongoose";

 const connectMongoDB = async()=>{
    try{
       await mongoose.connect(process.env.MONOGODB_URI)
        console.log('connected mongo db');
    }
    catch(err){
        console.log(err);
    }
}

export default connectMongoDB;