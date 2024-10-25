import express from 'express';
const app = express();

import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import dotenv from 'dotenv';
dotenv.config();

// Middleware
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes); 

// Mongo DB Connection
mongoose.connect('mongodb://localhost:27017/wanderly_auth')
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.log('Error:', error.message));

// Global Error Handler
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';

    console.log(err)

    res.status(err.statusCode)
    .json({
        status: err.status,
        message: err.message,
    });
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
