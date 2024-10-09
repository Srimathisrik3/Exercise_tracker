const mongoose = require('mongoose')


const Schema = mongoose.Schema

const workoutSchema = new Schema({
  title:{
    type:String,
    required:true
  },
  reps:{
    type:Number,
    required:true
  },
  load:{
    type:Number,
    required:true
  }
},
//Another argument,whhen we try to create a new document.It automatically add a created property 
{timestamps:true})

module.exports = mongoose.model('Workout',workoutSchema)

