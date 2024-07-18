import express from 'express'
import { sendReservation } from '../Cantroller/reservation.js'

const router = express.Router();

router.post("/send",sendReservation);
export default router;