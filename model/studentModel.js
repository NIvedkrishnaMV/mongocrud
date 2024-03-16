const mongoose=require('mongoose');
const studentSchema=mongoose.Schema({
    name:String,
    age:Number
});
const studentModel=mongoose.model('student',studentSchema);
module.exports=studentModel;