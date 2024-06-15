const express = require('express');
const router = express.Router();
const {getAllPosts, getPost, createPost, editPost, deletePost} = require("../controllers/blogController")

// get all blog posts 
router.get('/', getAllPosts);

// get 1 blog post 
router.get('/:id', getPost);

// create a new blog post
router.post('/create/new', createPost);

//edit a blog post
router.put('/edit/:id', editPost);

//delete a blog post
router.delete('/delete/:id', deletePost);

module.exports = router;