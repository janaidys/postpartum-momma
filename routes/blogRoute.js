const express = require('express');
const router = express.Router();

// get all blog posts 
router.get('/', (request, response, next)=>{
    response.status(200).json({success: {message: "This will send the blog data of ALL posts"}, statusCode: 200});
});


// get 1 blog post 
router.get('/:id', (request, response, next)=>{
    response.status(200).json({success: {message: "This will send the blog data of one post by id"}, statusCode: 200});
});

// create a new blog post
router.post('/create/new', (request, response, next)=>{
    response.status(200).json({success: {message: "This will send all the data that has the ability to create new posts"}, statusCode: 200});
});

router.put('/edit/:id', (request, response, next)=>{
    response.status(200).json({success: {message: "This will send all the data that to modify one blog post by id"}, statusCode: 200});
});

router.delete('/delete/:id', (request, response, next)=>{
    response.status(200).json({success: {message: "This will send all the data that to delete one blog post by id"}, statusCode: 200});
});

module.exports = router;