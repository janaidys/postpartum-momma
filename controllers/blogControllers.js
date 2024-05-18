const blogData = require('data.js');

const getAllBlogs = async(request, response, next) => {
    try {
        await response.status(200).json({success: {message: "Found all blog posts!"}, data: blogData, statusCode: 200})
    } catch (error) {
        response.status(400).json({error: {message: "Something went wrong getting all the blog posts!"}, statusCode: 400})
        
    }
};
