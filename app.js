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
// const blogRoute = require('./routes/blogRoute');
// const forumRoute = require('./routes/forumRoute')
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

// Admin Paths 
app.get("/admin", (request, response, next) => {
    response.status(200).json({success: {message: "This route points to the Admin page"}, statusCode: 200});
});

app.get("/admin/create-blog", (request, response, next) => {
    response.status(200).json({success: {message: "This route points to the Create Blog Post page"}, statusCode: 200});

});

// Upload path
app.post('/upload', (request, response, next) => {
    let file = req.files.image;
    let date = new Date();
    // image name
    let imageName = date.getDate() + date.getTime() + file.name;
    // image upload path
    let path = 'public/uploads/' + imageName;

    // create upload
    file.mv(path, (error, result) => {
        if(error){
            return next(error);
        } else{
            // our image upload path
            response.json(`uploads/${imageName}`)
        }
})
});

// BLOG PATHS//

// get ALL blog posts data
app.get('api/blog', (request, response, next) => {
    response.status(200).json({success: {message: "This will send all of the blog data"}, statusCode: 200});
}); 

app.get('api/blog/:id', (request, response, next)=>{
    response.status(200).json({success: {message: "This will send the blog data of one post by id"}, statusCode: 200});
});

app.get('api/blog/create/new', (request, response, next)=>{
    response.status(200).json({success: {message: "This will send all the data that has the ability to create new posts"}, statusCode: 200});
});

app.get('api/blog/edit/:id', (request, response, next)=>{
    response.status(200).json({success: {message: "This will send all the data that to modify one blog post by id"}, statusCode: 200});
});

app.get('api/blog/delete/:id', (request, response, next)=>{
    response.status(200).json({success: {message: "This will send all the data that to delete one blog post by id"}, statusCode: 200});
});





    
// Route Paths 
// app.use('/', blogRoute);

// Server
app.listen(PORT, () => {
    console.log(`The server is listening on port ${PORT}`);
    //go to localhost 
    console.log(`http://localhost:${PORT}/`);
});
