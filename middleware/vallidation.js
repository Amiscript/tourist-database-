const validateSignup = (req, res, next)=>{

  const { name, email, phone, startDate, endDate,location, } = req.body

  error = []

  if(!name){
      error.push("Please enter your name")
  }

  if(!email){
      error.push( "Please enter your email")
  }

  if(!phone){
    error.push( "Please enter your Phone Number")
}


if(!startDate){
  error.push( "Please input Start Date")
}


if(!endDate){
  error.push( "Please input End Date")
}

if(!location){
  error.push( "Please input your location")
}


  // if(!passkey)
  
  // {
  //     error.push("Please enter a password.")
  //   } else if(passkey.length < 8) {
  //     error.push("Please passkey must be  8 chars.")
  //   } else if (!/[A-Z,0-9]/.test(password)) 
  
  
  // if(error.length > 0){
  //     return res.status(400).json( error)
  // }

  next()
}

const validateLogin = (req, res, next)=>{

  const { passkey } = req.body

  error = []

  if(!passkey){
      error.push( "Please enter your passkey")
  }

  if(error.length > 0){
      return res.status(400).json( error)
  }

  next()
}





module.exports = {
  validateSignup,
  validateLogin
}