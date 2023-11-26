
const Tour = require("../model/tourModel")

const tourist = async(req, res)=>{

  const tour = await Tour.find()

  return res.status(200).json({
      message: "success",
      count: tour.length,
      tour
  })
}


const  generatePasskey = ()=>{
  const timestamp = new Date().getTime(); // Get the current timestamp
  const randomFactor = Math.random(); // Get a random value between 0 and 1
  const passkey = Math.floor(timestamp * randomFactor).toString(36); // Convert the result to base36

  return passkey;
}





const tourSignUp= async(req, res)=>{

  const{ name, email, phone, startDate,endDate,location,  } = req.body

  const passkey = generatePasskey();
  console.log(passkey);
  const alreadyExisting =  await Tour.findOne({email})

  if(alreadyExisting){
      return res.status(400).json({message: "This user account already exixt!"})
  }


  const newTourist = new Tour({ name, email, phone, startDate,endDate,location,})

  await newTourist.save()

  return res.status(200).json({
      mesasge: "Registration successful",
      Passkey:passkey
  })
}

const tourLogin  = async(req, res)=>{

  const providedPasskey = req.body.passkey; // Get passkey from the login request
  const user = await Tour.findOne({ passkey: providedPasskey });
  
  if (user) {
    // User found, allow login
    res.json({ message: 'Login successful' });
  } else {
    // Invalid passkey, deny login
    res.status(401).json({ error: 'Invalid passkey' });
  }

}



module.exports = {
tourist,
tourSignUp,  
 tourLogin
  
}