// seatRoutes.js

import express from 'express';
import createSeatsController from '../controllers/createSeatController.js';
import getSeatsController from '../controllers/getSeatsController.js';
import updateUserForm from '../controllers/updateUserController.js';

const router = express.Router();

router.post('/createSeats', createSeatsController);
router.get('/getSeats', getSeatsController); // New route for fetching seats

// Update user form for a specific seat
router.post('/updateUser', updateUserForm);

export default router;




