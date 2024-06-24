require('dotenv').config();


require('./config/connection.js');
require('./config/authStrategy');


// packages 
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000; 
const session = require('express-session');
const passport = require('passport');
const helmet =  require('helmet');
const dotenv = require('dotenv');


// define routing variables 
const blogRoute = require('./routes/blogRoute');
const authRoute = require('./routes/authRoute');


//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(
    helmet({
        contentSecurityPolicy:false, 
    })
    );
app.use(session({
    secret: process.env.SECRET_KEY, 
    resave: false, 
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session())


// public directory is available
app.use(express.static(path.join(__dirname + "/public")));


// User+Admin GET Paths 

app.get("/", (request, response, next) => {
    response.status(200).json({success: {message: "This route points to the Home page"}, statusCode: 200});
});

app.get("/bed", (request, response, next) => {
    response.status(200).json({success: {message: "This route points to the Bed page"}, statusCode: 200});
});

app.get("/recovery", (request, response, next) => {
    response.status(200).json({success: {message: "This route points to the Recovery page"}, statusCode: 200});
});

app.get("/about", (request, response, next) => {
    response.status(200).json({success: {message: "This route points to the About page"}, statusCode: 200});
});

app.get("/login", (request, response, next) => {
    response.status(200).json({success: {message: "This route points to the Login page"}, statusCode: 200});
});

app.get("/signup", (request, response, next) => {
    response.status(200).json({success: {message: "This route points to the Signup page"}, statusCode: 200});
});


// Admin Path 
app.get("/admin", (request, response, next) => {
    response.status(200).json({success: {message: "This route points to the Admin page"}, statusCode: 200});
});


// Route Paths
// use the routes in this file
app.use('/api/blog', blogRoute);
app.use('/,', authRoute);




// Server
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
    //go to localhost 
    console.log(`http://localhost:${PORT}/`);
});
