const passport = require('passport');
const bcrypt = require('bcrypt');

const User = require('../models/userModel')

const loginLocalFailed = (request, response, next) => {
    console.log(request.body)
    response.status(401).json({error: {message: "Username or password is incorrect."}, statusCode: 401,
});
};

const logoutRequest = (request, response, next) => {
    try{
    if(200) {
        response.status(200).json({
success: {message: "User logged out!"}, statusCode:200, 
})
}
} catch (error) {
    response.status(400).json({error: {message: "Something went wrong!"}, statusCode:400,   
});
};
};

const signupRequest = (request, response, next) => {
  const {firstName, lastName, email, password}  = request.body;

  bcrypt.hash(password, 10, async (error, hashedPassword) => { 
    if(error) {
        return next(error);
    }
    const newUser = new User ({ 
        firstName, 
        lastName, 
        email,
        password: hashedPassword,
    });
    try {
        await newUser.save();
        request.login(newUser, (error) => { 
            if (error) {
                response.status(400).json({error: {message: "Something went wrong while signing up!"}, statusCode:400,
            });
        }
    });   
    } catch (error) {
        console.log(error)
        // if(error.code === 11000 && error.keyPattern.username) {
        //     response.status(400).json({error: {message: "Username already exists."}, statusCode: 400, 
        // });
        // }else {
        //     response.status(500).json({error: {message: "Internal server error"}, statusCode: 500,
        // });
        // }
        
    } 
});
};


module.exports = {loginLocalFailed, logoutRequest, signupRequest};
