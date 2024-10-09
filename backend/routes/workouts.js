const express = require('express')

const {
  createWorkout,
  getWorkout,
  getWorkouts,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutController')



const router = express.Router()

//GET all the workouts
router.get('/',getWorkouts)

//GET a single workout
//colon --(:) represents a route paramter where by this can change and then fire a function we get response and req object
router.get('/:id',getWorkout)

//POST a new workout
//asynchronous function


router.post('/',createWorkout)

//DELETE a workout
router.delete('/:id',deleteWorkout)

//UPDATE a workout
router.patch('/:id',updateWorkout)



module.exports = router