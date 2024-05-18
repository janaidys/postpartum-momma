// require('dotenv').config();


// require('./config/connection');
// require('./config/authStrategy');


// packages 
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000; 
const session = require('express-session');
const passport = require('passport');
const helmet =  require('helmet');
const dotenv = require('dotenv');


// define routing variables 
const blogRoute = require('./routes/blogRoute');
// const adminRoute = require('./routes/adminRoute')

//middleware
const cors = require('cors')
app.use(morgan('dev'));
app.use(express.json());
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


app.get("/about", (request, response, next) => {
    response.status(200).json({success: {message: "This route points to the About page"}, statusCode: 200});
});

app.get("/login", (request, response, next) => {
    response.status(200).json({success: {message: "This route points to the Login page"}, statusCode: 200});
});

// Admin Path 
app.get("/admin", (request, response, next) => {
    response.status(200).json({success: {message: "This route points to the Admin page"}, statusCode: 200});
});


// // Upload path
// app.post('/upload', (request, response, next) => {
//     let file = req.files.image;
//     let date = new Date();
//     // image name
//     let imageName = date.getDate() + date.getTime() + file.name;
//     // image upload path
//     let path = 'public/uploads/' + imageName;

//     // create upload
//     file.mv(path, (error, result) => {
//         if(error){
//             return next(error);
//         } else{
//             // our image upload path
//             response.json(`uploads/${imageName}`)
//         }
// })
// });

// Route Paths
// use the routes in this file
app.use('api/blog', blogRoute);
// app.use('/,'authRoutes);






    
 


// Server
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
    //go to localhost 
    console.log(`http://localhost:${PORT}/`);
});
