import express from 'express';
import mongoose, { mongo } from 'mongoose';


// import Routes
import userRouter from './routes/user.router.js';
import authRouter from './routes/auth.router.js';

// import dotenv
import dotenv from 'dotenv';
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO).then(() => { 
    console.log('Connected to MongoDB!');
}).catch(err => {
    console.log('Failed to connect to MongoDB!', err);
});

// Create an Express App
const app = express();
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}!`);
});

// Middleware
app.use(express.json());   // Middleware to parse JSON data

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((err, req, res, next) => {
    const statusCode = 500 || err.statusCode;
    return res.status(statusCode).json({
        success: false,
        status: statusCode,
        message: err.message,
    });
});