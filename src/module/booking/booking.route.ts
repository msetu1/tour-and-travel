import express from 'express';
import { BookingCOntroller } from './booking.controller';

const router = express.Router();

router.post('/create-booking', BookingCOntroller.createBooking);

export const BookingRoute = router;
