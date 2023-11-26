
const mongoose = require("mongoose")


const connectDB = async()=>{
  mongoose.set("strictQuery", true)
  await mongoose.connect(process.env.MONGODB_URL)
  .then((res)=> { console.log("Connect to mongoose");})
  .catch((err)=>console.error(err))}

module.exports = connectDB