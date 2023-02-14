const  mongoose=require('mongoose');

const DataSchema=mongoose.Schema({
    UserEmail:{
        type:String
    },
    Name:{
        type:String
    },
    Address:{
        type:String
    },
    Phone:{
        type:String,unique:true
    },
    Email:{
        type:String
    },
    
},{timestamps: true, versionKey:false});

const SuppliersModel=mongoose.model('suppliers',DataSchema);
module.exports=SuppliersModel