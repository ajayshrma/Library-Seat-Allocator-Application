  // seatModel.js

  import mongoose from 'mongoose';

  const seatSchema = new mongoose.Schema({
    seatNumber: {
      type: String,
      required: true,
    },
    isBooked: {
      type: Boolean,
      default: false,
    },
    assignedTo: {
      userName: String,
      userNumber: String,
      startDate: Date,
      endDate: Date,
    },
  });

  const SeatModel = mongoose.model('Seat', seatSchema);

  export default SeatModel;
