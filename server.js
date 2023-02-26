const express =require('express');
const router =require('./routes/api');
const app= new express();
const bodyParser =require('body-parser');
const rateLimit =require('express-rate-limit');
const mongoSanitize =require('express-mongo-sanitize');
const xss =require('xss-clean');
const hpp =require('hpp');
const helmet = require('helmet')
const cors = require('cors')
require('dotenv').config()

// Database Lib Import
const mongoose =require('mongoose');
const path = require("path");
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(cors());
app.use(hpp());
app.use(express.json({ limit: "50mb" }));
//app.use(express.urlencoded({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }))
app.use(bodyParser.json());
const limiter= rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)


// Body Parser Implement
//app.use(bodyParser.json())


// Server port
const port = process.env.PORT || 5000;

// Mongo DB Database Connection
let URI = 'mongodb+srv://<username>:<password>@cluster0.gsyup6g.mongodb.net/inventory?retryWrites=true&w=majority';
let OPTION = {user: 'testuser7777', pass: 'testuser7777', autoIndex: true};

mongoose.set('strictQuery', true);
mongoose
    .connect(URI, OPTION)
    .then(() => {
        app.listen(port, () => {
            console.log(` Server Running on port ${port}`);
        })
    })
    .catch((error) => console.log(error));

// Routing Implement
app.use("/api/v1",router)

// Undefined Route Implement
app.use("*",(req,res)=>{
    res.status(404).json({status:"fail",data:"Not Found"})
})


module.exports=app;
