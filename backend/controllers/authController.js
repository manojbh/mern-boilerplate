const User = require('../models/user');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const ErrorHandler = require('../utils/errorHandler');
const sendToken = require('../utils/token');

// Register User
exports.registerUser = catchAsyncErrors( async (req, res, next) => {
    const {name, email, password} = req.body;

    const  user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: 'User-avatar',
            url: 'https://upload.wikimedia.org/wikipedia/commons/5/59/User-avatar.svg'
        }
    });

    sendToken(user, 200, res);

    // const token = user.getJwtToken();

    // res.status(201).json({
    //     success: true,
    //     token
    // })
}); 

exports.loginUser = catchAsyncErrors( async (req, res, next) => {
    const { email, password } = req.body;

    // check if email or password is blank
    if (!email || !password) {
        return next(new ErrorHandler('Please enter email and password', 400));
    }

    // check if user is in db
    const user = await User.findOne({email}).select('+password');
    if (!user) {
        return next(new ErrorHandler('Invalid User', 401));
    }

    // check password
    const isPasswordMatched = await user.comparePassword(password);
    if (!isPasswordMatched) {
        return next(new ErrorHandler('Invalid Password', 401));
    }

    sendToken(user, 200, res);

})