const express=require('express')
const route=express.Router()
const Allcontrollers=require("../controller/Allcontrollers")
route.post('/addpatient', Allcontrollers.AddMeeting)
route.get('/get', Allcontrollers.GetAll)
module.exports=route