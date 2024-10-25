import userModel from '../models/userModel.js';
import createError from '../utils/appError.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Registration
/*
 * Name, Email, Password, Confirm Password - All Fields are required
 * Password must be at least 8 characters
 * Password must contain special characters, both lower-case and upper-case letters and numbers
 * Password must match with Confirm password
 * Email must be unique
 * If all conditions are met, create a new user
 */
export const signup = async (req, res, next) => {
    try {
        if (!req.body.name || !req.body.email || !req.body.password || !req.body.confirmPassword) {
            return next(new createError('All fields are required', 400));
        }

        if (req.body.password.length < 8) {
            return next(new createError('Password must be at least 8 characters', 400));
        }

        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

        if (!req.body.password.match(passwordRegex)) {
            return next(new createError('Password must contain special characters, lower-case, upper-case letters and digits', 400));
        }

        if (req.body.password !== req.body.confirmPassword) {
            return next(new createError('Passwords do not match', 400));
        }

        const existingUser = await userModel.findOne({ email: req.body.email });

        if (existingUser) {
            return next(new createError('User already exists', 400));
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 12);

        // Call create on userModel instead of user
        const newUser = await userModel.create({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
        });

        // Assign Token
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });

        res.status(201).json({
            status: 'success',
            message: 'User registered successfully',
            token,
        });

    } catch (error) {
        next(new createError(error.message, 400));
    }
};

// Login
export const login = async (req, res, next) => {
    try {
        const {email, password} = req.body;

        const user = await userModel.findOne({ email });

        if (!user) {
            return next(new createError('User Not Found', 401));
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return next(new createError('Invalid email or password', 401));
        }

        // Assign Token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
        });

        res.status(200).json({
            status: 'success',
            message: 'User logged in successfully',
            token,
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
            }
        });
    } catch (error) {
        next(new createError(error.message, 400));
    }
};
