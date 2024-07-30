import mongoose from "mongoose";

const url = process.env.MONGODB_URI

const mongoURI = process.env.MONGODB_URI;
const adminUser = process.env.ADMINUSER;
const adminPass = process.env.ADMINPASS;

const connectMongoDB = async () => {
  try {
    await mongoose.connect(mongoURI)
    console.log("connected");
  } catch(e) {
    console.log(e);
  }
}

export default connectMongoDB