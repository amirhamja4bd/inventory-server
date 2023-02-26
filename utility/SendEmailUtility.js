// var nodemailer = require('nodemailer');

// const SendEmailUtility= async (EmailTo, EmailText, EmailSubject) => {
//     let transporter = nodemailer.createTransport({
//         service: 'gmail',
//         host: 'smtp.gmail.com',
//         secure: false,
//         auth: {
//             user: "studypurposemern@gmail.com",
//             pass: 'qljchbggzwnrsgiw'
//         },tls: {
//             rejectUnauthorized: false
//         },
//     });
//     let mailOptions = {
//         from: 'Task Manager  <studypurposemern@gmail.com>',
//         to: EmailTo,
//         subject: EmailSubject,
//         text: EmailText
//     };
//    return  await transporter.sendMail(mailOptions)
// }
// module.exports=SendEmailUtility


var nodemailer = require('nodemailer');

const SendEmailUtility= async (EmailTo, EmailText, EmailSubject) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        secure: false,
        auth: {
            user: "studypurposemern@gmail.com",
            pass: 'qljchbggzwnrsgiw'
        },tls: {
            rejectUnauthorized: false
        },
    });
    let mailOptions = {
        from: 'Inventory  <studypurposemern@gmail.com>',
        to: EmailTo,
        subject: EmailSubject,
        text: EmailText
    };
   return  await transporter.sendMail(mailOptions)
}
module.exports=SendEmailUtility

