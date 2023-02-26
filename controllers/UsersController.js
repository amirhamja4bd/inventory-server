
const OTPSModel = require("../models/OTPSModel");
const DataModel = require("../models/UsersModel");
const UserLoginService = require("../services/user/UserLoginService");
const UserUpdateService = require("../services/user/UserUpdateService");
const UserDetailsService = require("../services/user/UserDetailsService");
const UserResetPassService = require("../services/user/UserResetPassService");
const UserOtpVerifyService = require("../services/user/UserOtpVerifyService");
const UserCreateService = require("../services/user/UserCreateService");
const UserEmailVerifyService = require("../services/user/UserEmailVerifyService");

exports.Registration=async (req, res) => {
    let Result=await UserCreateService(req, DataModel)
    res.status(200).json(Result)
}

exports.Login=async(req,res)=>{
    let Result=await UserLoginService(req, DataModel)
    res.status(200).json(Result)
}

exports.ProfileUpdate=async (req, res) => {
    let Result=await UserUpdateService(req, DataModel)
    res.status(200).json(Result)
}

exports.ProfileDetails=async (req, res) => {
    let Result=await UserDetailsService(req, DataModel)
    res.status(200).json(Result)
}


exports.RecoverEmailVerify=async (req,res)=>{
    let Result=await UserEmailVerifyService(req, DataModel)
    res.status(200).json(Result)
}


exports.RecoverOTPVerify=async (req,res)=>{
    let Result=await UserOtpVerifyService(req, OTPSModel)
    res.status(200).json(Result)
}

exports.RecoverResetPass=async (req,res)=>{
    let Result=await UserResetPassService(req, DataModel)
    res.status(200).json(Result)
}














