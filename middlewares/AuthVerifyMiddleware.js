var jwt = require('jsonwebtoken');

module.exports = (req, res, next) =>{
    let Token = req.headers['token'];
    jwt.verify(Token, process.env.SECRET_KEY, function(error, decoded){
        if(error){
            res.status(401).json({status: "Unauthorized"})
        }
        else{
            let email = decoded["data"];
            req.headers.email = email
            next();
        }
    })
}