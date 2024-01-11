// updateUserController.js

import Seat from '../models/seatModel.js';

const updateUserForm = async (req, res) => {
  const { userName, userNumber, startDate, endDate, seatId } = req.body;

  try {
    const seat = await Seat.findById(seatId);

    if (!seat) {
      return res.status(404).json({ error: 'Seat not found.' });
    }

    seat.assignedTo = {
      userName,
      userNumber,
      startDate,
      endDate,
    };

    seat.isBooked = true;

    await seat.save();

    res.status(200).json({ message: 'User form updated successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error.' });
  }
};

export default updateUserForm;
