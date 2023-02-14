const OTPSModel = require("../../models/OTPSModel");
const SendEmailUtility = require("../../utility/sendEmailUtility");

const UserEmailVerifyService = async (Request, DataModel)=>{
    try{
        let email = Request.params.email;
        let OTPCode = Math.floor(100000 + Math.random() * 900000);

        let UserCount = (await DataModel.aggregate([{$match: {email:email}}, {$count: "total"}]))

        if(UserCount.length >0 ){
            await OTPSModel.create({email: email, otp:OTPCode})

            let SendEmail = await SendEmailUtility(email, "Ypor PIN Code is - " + OTPCode , "Inventory PIN Verification")
            return {status: "Success", data: SendEmail}
        }
        else{
            return {status:"fail", data: "No User Found"}
        }
    }
    catch(error){
        return {status:"fail", data: error.toString()}
    }
}

module.exports = UserEmailVerifyService;