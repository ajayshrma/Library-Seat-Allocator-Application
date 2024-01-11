import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './db/db_connection.js';
import seatRoutes from './routes/seatRoutes.js'


import cors from 'cors';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
connectDB()
    .then(() => {
        app.use(express.json());
        app.use(express.static('public'));

        // // Add the POST route for form submissions
        // app.post('/api/submit-form', submissionController.submitForm);
        
        app.use('/api', seatRoutes);
    

        app.listen(PORT, () => {
            console.log(`Server is running at port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('MONGODB connection failed!!!', error);
    });
