// const OTPSModel = require("../../models/OTPSModel");

// const UserResetPassService = async (Request, DataModel) =>{

//     let email = Request.body['email'];
//     let OTPCode = Request.body['OTP'];
//     let NewPass = Request.body['password'];
//     let statusUpdate = 1;

//     try{
//         let OTPUsedCount = await OTPSModel.aggregate([{$match: {email: email, otp: OTPCode, status: statusUpdate}}, {$count: "total"}])

//         if(OTPUsedCount > 0 ){
//             let PassUpdate = await DataModel.updateOne({email: email, password : NewPass})

//             return {status:"Success", data: PassUpdate}
//         }
//         else{
//             return {status:"fail", data: "Invalid Request"}
//         }
//     }
//     catch(error){
//         return {status:"fail", data: error.toString()}
//     }
// }

// module.exports = UserResetPassService;





const OTPSModel = require("../../models/OTPSModel");

const UserResetPassService = async (Request, DataModel) =>{

    let email = Request.body['email'];
    let OTPCode = Request.body['otp'];
    let NewPass =  Request.body['password'];
    let statusUpdate=1;

    try {
        let OTPUsedCount = await OTPSModel.aggregate([{$match: {email: email, otp: OTPCode, status: statusUpdate}}, {$count: "total"}])
        if (OTPUsedCount.length>0) {

            let PassUpdate = await DataModel.updateOne({email: email}, { password: NewPass })
            return {status: "success", data: PassUpdate}
        } else {
            return {status: "fail", data: "Invalid Request"}
        }
    }
    catch (error) {
        return {status: "fail", data: error.toString()}
    }
}

module.exports = UserResetPassService;

