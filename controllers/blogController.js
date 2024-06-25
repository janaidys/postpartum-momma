// summoning post model
const Post = require("../models/blogModel");

// get ALL blog posts
const getAllPosts = async (request, response, next) => {
  try {

      const posts =  await Post.find({})
        response
          .status(200)
          .json({
            success: { message: "Found all blog posts!" },
            data: posts,
            statusCode: 200,
          })
    ;
    
  } catch (error) {
    response
      .status(400)
      .json({
        error: { message: "Something went wrong getting all the blog posts!" },
        statusCode: 400,
      });
  }
};

// get 1 blog post
const getPost = async (request, response, next) => {
  const { id } = request.params;

  try {
    await Post.findOne({ _id: id }).then((foundPost) => {
      response
        .status(200)
        .json({
          success: { message: "Found the blog post you were looking for!" },
          data: foundPost,
          statusCode: 200,
        });
    });
  } catch (error) {
    response
      .status(400)
      .json({
        error: { message: "Something went wrong when retrieving a blog post!" },
        statusCode: 400,
      });
  }
};

// create a blog post
const createPost = async (request, response, next) => {
  console.log(request);
  const { banner, title, blurb, article, upload } = request.body;

  const newPost = new Post({
    banner: banner,
    title: title,
    blurb: blurb,
    article: article,
    upload: upload
  });
  console.log(newPost);

  await newPost.save();

  try {
    response.status(201).json({
      success: "A new blog post is created",
      data: newPost,
      statusCode: 201,
    });
  } catch (error) {
    response
      .status(400)
      .json({ error: "Something went wrong creating a blog post", statusCode: 400 });
  }
};


// edit a blog post
const editPost = async (request, response, next) => {
    const { id } = request.params;
  
    const { banner, title, article } = request.body;
  
    await Post.findByIdAndUpdate(
      {id},
      {
        banner,
        title,
        article,
      },
      { new: true }
    );
  
    try {
      response.status(201).json({
        success: "Post is updated",
        data: newPost,
        statusCode: 201,
      });
    } catch (error) {
      response
        .status(400)
        .json({
          error: "Something went wrong while editing the blog post",
          statusCode: 400,
        });
    }
  };

// delete a blog post

const deletePost = async (request, response, next) => {
    const { id } = request.params;
  
    await Post.findByIdAndDelete(id);
  
    try {
      response
        .status(200)
        .json({ success: "Blog post deleted successfully!", statusCode: 200 });
    } catch (error) {
      response
        .status(400)
        .json({
          error: "Something went wrong while deleting the blog post!",
          statusCode: 400,
        });
    }
  };


  module.exports = { getAllPosts, getPost, createPost, editPost, deletePost };