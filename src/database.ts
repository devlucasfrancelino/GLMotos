import mongoose from "mongoose";

mongoose.set("strictQuery", true)

const url = "process.env.MONGODB_URI"

const connect = async () => {
  return await mongoose.connect(url)
}

const disconnect = async () => {
  return await mongoose.disconnect()
}

const database = {
  connect, 
  disconnect
}

export default database