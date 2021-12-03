const mongoose = require('mongoose')
const PostSchema = new mongoose.Schema({
    name: String,
    surname: String,
    doctor: String,
    department: String,
    meeting: String,
    age: String,
    weight: String,
    email: String,
    message: String,
    date: Date
})
const FormUser= mongoose.model('patient', PostSchema)

module.exports=FormUser