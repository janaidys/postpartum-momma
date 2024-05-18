const blogData = require('data.js');


// get ALL blog posts
const getAllBlogs = async(request, response, next) => {
    try {
        await response.status(200).json({success: {message: "Found all blog posts!"}, data: blogData, statusCode: 200})
    } catch (error) {
        response.status(400).json({error: {message: "Something went wrong getting all the blog posts!"}, statusCode: 400})
        
    }
};


// get 1 blog post
const getPost =  async(request, response, next) => { 
    const {id} = req.params;
    const foundPost = blogData.find(post) => post.id === Number(id));
    try {
        await response.status(200).json({success: {message:"Found the blog post you were looking for!"}, data: foundPost, statusCode: 200})
    } catch (error) {
        
    }
}
