import catchAsync from '../../utils/catchAsync';
import { BookingService } from './booking.service';

// create booking
const createBooking = catchAsync(async (req, res) => {
  const result = await BookingService.createBooking(req.body);

  res.status(200).json({
    success: true,
    message: 'Booking created successfully',
    data: result,
  });
});

export const BookingCOntroller = {
  createBooking,
};
