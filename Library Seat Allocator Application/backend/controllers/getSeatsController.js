// getSeatsController.js

import Seat from '../models/seatModel.js';

const getSeats = async (req, res) => {
  try {
    const seats = await Seat.find();
    res.status(200).json(seats);
  } catch (error) {
    console.error('Error retrieving seats:', error);
    res.status(500).json({ error: 'Internal Server Error.' });
  }
};

export default getSeats;
