const express = require('express')
const app = new express()
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const validator = require('validator');

dotenv.config();

// Middleware 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const upload = multer(/* configure multer here */);

app.use(cors());

//security h
app.use(helmet());

// Sanitize 
app.use(mongoSanitize());

// Limit the rate 
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100, 
});
app.use(limiter);

app.use(hpp());


app.get('*', (req, res) => {
    res.status('404').json('Message: "404 Not Found!"')
});



module.exports = app