const Student = require('../models/Student');
exports.createStudent = async (req,res)=>{
    try{
        const totalCount = await Student.countDocuments({});
        req.body['rollno']=1+totalCount
        const student = await Student.create(req.body);
        res.json(student);
    }
    catch(e){
        res.status(400).json({error:e.message});
    }
}

exports.getAllStudents = async (req,res)=>{
    try{
        const students = await Student.find();
        res.json(students);
    }
    catch(e){
        res.status(400).json({error:e.message});
    }
}

exports.getStudent = async (req,res)=>{
    try{
        const student1 = await Student.findOne({rollno:req.params.r});
        res.json(student1);
    }
    catch(e){
        res.status(400).json({error:e.message});
    }
}

exports.deleteStudent = async (req,res)=>{
    try{
        const student = await Student.findOneAndDelete({rollno:req.params.id});
        if(!student) return res.status(404).json({error:"Student not found"});
        res.json({message:"Student deleted successfully"});
    }
    catch(e){
        res.status(500).json({error:e.message});
    }
}

exports.updateStudent = async (req,res)=>{
    try{
        const student = await Student.findOneAndUpdate({rollno:req.params.id},req.body,{new:true});//new:true -to get updated data
        if(!student) return res.status(404).json({error:"Student not found"});
        res.json(student);
    }
    catch(e){
        res.status(400).json({error:e.message});
    }
}