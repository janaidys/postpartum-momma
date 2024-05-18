// summoning post model
const postModel = require("../models/postModel");

// get ALL blog posts
const getAllPosts = async (request, response, next) => {
  try {
    if (200) {
      await Post.find({}).then((posts) =>
        response
          .status(200)
          .json({
            success: { message: "Found all blog posts!" },
            data: posts,
            statusCode: 200,
          })
      );
    }
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
  const { id } = req.params;

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
  const { banner, title, article } = request.body;

  const newPost = new Post({
    banner: banner,
    title: title,
    article: article,
  });

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
  
    await Book.findByIdAndUpdate(
      { id },
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
  
    await Post.findByIdAndDelete({ id });
  
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




// ------for comments------

// get ALL comments

// summoning the comments model
const commentsModel = require('../models/commentsModel');

// get ALL comments on 1 blog post
const getAllComments = async (request, response, next) => {
    try {
      if (200) {
        await Book.find({}).then((books) =>
          response.status(200).json({
            success: { message: "Found all books!" },
            data: books,
            statusCode: 200,
          })
        );
      }
    } catch (error) {
      response.status(400).json({
        error: { message: "Something went wrong getting all the books!" },
        statusCode: 400,
      });
    }
  };
  
  // get ONE comment on 1 blog post 
  const getComment = async (request, response, next) => {
    const { id } = request.params;
  
    try {
      await Book.findOne({ _id: id }).then((foundBook) => {
        response.status(200).json({
          success: { message: "Found the book you are looking for!" },
          data: foundBook,
          statusCode: 200,
        });
      });
    } catch (error) {
      response.status(400).json({
        error: { message: "Something went wrong retrieving a book!" },
        statusCode: 400,
      });
    }
  };
  
  // create a comment on a blog post
  const createBook = async (request, response, next) => {
    const { title, author, genre, pages, rating, synopsis } = request.body;
  
    const newBook = new Book({
      title: title,
      author: author,
      genre: genre,
      pages: pages,
      rating: rating,
      synopsis: synopsis,
    });
  
    await newBook.save();
  
    try {
      response
        .status(201)
        .json({
          success: "A new book is created",
          data: newBook,
          statusCode: 201,
        });
    } catch (error) {
      response
        .status(400)
        .json({ error: "Something went wrong creating a book", statusCode: 400 });
    }
  };
  

  
  // delete a book
  
  const deleteBook = async (request, response, next) => {
    const { id } = request.params;
  
    await Book.findByIdAndDelete({ id });
  
    try {
      response
        .status(200)
        .json({ success: "Book deleted successfully!", statusCode: 200 });
    } catch (error) {
      response
        .status(400)
        .json({
          error: "Something went wrong while deleting the book!",
          statusCode: 400,
        });
    }
  };























  module.exports = { getAllPosts, getPost, createPost, editPost, deletePost };