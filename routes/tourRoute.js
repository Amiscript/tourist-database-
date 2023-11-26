
const express = require("express")
const { tourist, tourSignUp, tourLogin } = require("../controllers/tourclr")
const {  validateSignup,validateLogin } = require("../middleware/vallidation")

const router = express.Router()



router.get("/tourist",tourist )

router.post("/register", validateSignup,  tourSignUp)

router.post("/login", validateLogin, tourLogin)



module.exports = router