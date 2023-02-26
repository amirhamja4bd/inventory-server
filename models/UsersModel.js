const  mongoose=require('mongoose');

const DataSchema=mongoose.Schema({
    email:{
        type:String,
        unique:true
    },
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    mobile:{
        type:String
    },
    password:{
        type:String
    },
    photo:{
        type:String,
        default: "https://img.icons8.com/ios-filled/1x/user-male-circle.png"
    },
    
},{timestamps: true, versionKey:false});


const UsersModel=mongoose.model('users',DataSchema);
module.exports=UsersModel

