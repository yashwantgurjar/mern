const mongoose = require("mongoose");
const empSchema= new mongoose.Schema({
    empno:{
        type:Number,
        require:true
    },
    empname:{
        type:String,
        require:true
    },
    designation:{
        type:String,
        require:true
    },
    salary:{
        type:Number,
        require:true
    }
})
module.exports = mongoose.model("employee", empSchema);