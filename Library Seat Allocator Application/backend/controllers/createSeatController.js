// createseatController.js

import Seat from '../models/seatModel.js';

const createSeats = async (req, res) => {
  const { totalSeats } = req.body;

  try {
    // Validation: Ensure totalSeats is a number and greater than 0
    const parsedTotalSeats = parseInt(totalSeats);

    if (isNaN(parsedTotalSeats) || parsedTotalSeats <= 0) {
      return res.status(400).json({ error: 'Invalid totalSeats value.' });
    }

    // Clear existing seats
    await Seat.deleteMany({});

    // Create new seats
    const newSeats = Array.from({ length: parsedTotalSeats }, (_, index) => ({
      seatNumber: `A${index + 1}`,
      isBooked: false,
      assignedTo: {
        userName: null,
        userNumber: null,
        startDate: null,
        endDate: null,
      },  
    }));

    // Insert the new seats into the database
    await Seat.insertMany(newSeats);

    console.log(`Successfully created ${parsedTotalSeats} seats.`);
    res.status(201).json({ message: `Successfully created ${parsedTotalSeats} seats.` });
  } catch (error) {
    console.error('Error creating seats:', error);
    res.status(500).json({ error: 'Internal Server Error.' });
  }
};

export default createSeats;
