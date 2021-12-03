const FormUser= require("../Model/FormUser")
module.exports.AddMeeting= async (req,res)=>{
    const {name,surname,doctor,department,meeting,age,weight,email,message}= req.body
    try{
        const sending = await FormUser.create({name, surname,doctor, department,meeting,age,weight,email,message, date: Date()})
        res.json({msg: sending})
    }
    catch(err){
        res.json({m:"cool"})
        console.log({msg: err})
    }
}
module.exports.GetAll=async (req,res)=>{
    try{
        const receive= await FormUser.find()
        res.json({msg:receive})
    }
    catch(err){
        res.json({err:err})
        console.log(err)
    }
}