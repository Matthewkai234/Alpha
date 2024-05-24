import mongoose from 'mongoose';


const connectDb=()=>{
  mongoose.connect(process.env.DB).then(()=>{
    console.log("Connect");
  }).catch((error)=>{
    console.log("Error at connect");
  });
}

export default connectDb;
