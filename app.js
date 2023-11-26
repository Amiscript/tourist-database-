const express = require('express')
const mongoose = require("mongoose")
 const dotenv = require('dotenv')
 const connectDB = require("./db")
 tourRoutes = require("./routes/tourRoute")
 const Tour = require("./model/tourModel")
 dotenv.config()
const app= express()

app.use(express.json())

dotenv.config()



app.use("/api", tourRoutes)




const PORT = process.env.PORT || 8000 

app.listen(PORT, async()=>{
  await connectDB()
  console.log(`Server is running on port ${PORT}`)

})