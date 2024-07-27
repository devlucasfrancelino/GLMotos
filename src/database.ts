import mongoose from "mongoose";

const url = process.env.MONGODB_URI

const connectMongoDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://lucas:f9NihHNYSHVBWP1I@motos.8exatax.mongodb.net/Motorcycles")
    console.log("connected");
  } catch(e) {
    console.log(e);
  }
}

export default connectMongoDB