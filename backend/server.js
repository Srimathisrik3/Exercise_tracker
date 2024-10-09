
require('dotenv').config()
const express = require('express')

//to connect the database
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')



//express app
const app = express()

//middleware
app.use(express.json())


//middleware
//We shoul write next bcoz so that it can move to next piece of middleware
app.use((req,res,next)=>{
console.log(req.path,req.method)
next()//next function   
})

//routes 
app.use('/api/workouts',workoutRoutes)
app.use('/api/user',userRoutes)





//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  //listen for requests
//Still in port 4000 but runs in dotenv file
app.listen(process.env.PORT,()=>{
  console.log('listening on port 4000',process.env.PORT)
})

})
.catch((error)=>{
  console.log(error)
})

