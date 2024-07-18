import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
    minLength: [3, "First name must conatin at least 3 charector!"],
    mixLength: [30, "First name cannot exceed 30 charectors!"],
  },

  lastName: {
    type: String,
    require: true,
    minLength: [3, "Last name must conatin at least 3 charector!"],
    mixLength: [30, "Last name cannot exceed 30 charectors!"],
  },

  email: {
    type: String,
    require: true,
    validate: [validator.isEmail, "Provide a valid email"],
  },

  phone: {
    type: Number,
    require: true,
    minLength: [10, "Last name must conatin at least 3 charector!"],
    mixLength: [10, "Last name cannot exceed 30 charectors!"],
  },

  time: {
    type: String,
    require: true,
  },

  date: {
    type: String,
    require: true,
  },
});
export const Reservation = mongoose.model("Reservation", reservationSchema);
