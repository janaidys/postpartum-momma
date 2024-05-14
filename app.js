// require('dotenv').config();


// require('./config/connection');
// require('./config/authStrategy');


// packages 
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors')
const app = express();
const PORT = process.env.PORT || 3000; 
const session = require('express-session');
const passport = require('passport');
const helmet =  require('helmet');
const dotenv = require('dotenv');

// define routing variables 
const blogRoute = require('./routes/blogRoute');
// const forumRoute = require('./routes/forumRoute')
// const adminRoute = require('./routes/adminRoute')

//middleware

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
    //response.send("This route points to the Home page")
    response.status(200).json({success: {message: "This route points to the Home page"}, statusCode: 200});
});


app.get("/about", (request, response, next) => {
    //response.send("This route points to the About page")
    response.status(200).json({success: {message: "This route points to the About page"}, statusCode: 200});
});

app.get("/login", (request, response, next) => {
    //response.send("This route points to the Login page")
    response.status(200).json({success: {message: "This route points to the Login page"}, statusCode: 200});
});

// Admin Paths 
app.get("/admin", (request, response, next) => {
    //response.send("This route points to the Admin page")
    response.status(200).json({success: {message: "This route points to the Admin page"}, statusCode: 200});
});

app.get("/admin/create-blog", (request, response, next) => {
    response.status(200).json({success: {message: "This route points to the Create Blog Post page"}, statusCode: 200});

    let file = req.files.image;
    let date = new Date();
    // image name
    let imagename = date.getDate() + date.getTime() + file.name;
    // image upload path
    let path = 'public/uploads/' + imagename;

    // create upload
    file.mv(path, (err, result) => {
        if(err){
            throw err;
        } else{
            // our image upload path
            res.json(`uploads/${imagename}`)
        }
})
});


// Route Paths 
app.use('/', blogRoute);
app.use('/', forumRoute)

// Server
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
    //go to localhost 
    console.log(`http://localhost:${PORT}/`);
});
