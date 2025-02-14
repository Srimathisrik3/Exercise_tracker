const User = require('../models/userModel')

//login user
const loginUser = async(req,res)=>{
  res.json({message:'login user'})
}

//signup user
const signupUser = async(req,res)=>{

  //grab email and password
  const {email,password} =req.body 

  try{
  const user =await User.signup(email,password)

  res.status(200).json({email, user})
  }
  catch(error){
    res.status(400).json({error: error.message})

  }
  res.json({message:'signup user'})
}

module.exports={signupUser, loginUser}