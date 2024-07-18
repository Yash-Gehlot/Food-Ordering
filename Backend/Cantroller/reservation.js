import { json } from "express";
import ErrorHandler from "../Error/error.js";
import { Reservation } from "../Models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, date, time } = req.body;
  if (!firstName || !lastName || !email || !phone || !date || !time) {
    return next(
      new ErrorHandler("please fill the complete reservation form ", 400)
    );
  }
  try {
    await Reservation.create(firstName, lastName, email, phone, date, time);
    res.staus(201).json({
      succes: true,
      message: "Reservation Sent Successfully",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const ValidationError = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(ValidationError.join(" , "), 400));
    }
    return next(error);
  }
};
