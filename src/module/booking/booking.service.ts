import { Tour } from '../tour/tour.model';
import { IBooking } from './booking.interface';
import { Booking } from './booking.model';

// create booking
const createBooking = async (playLoad: IBooking):Promise<IBooking> => {
  const { tour, bookingSlots } = playLoad;
  const requiredTour = await Tour.findById(tour);

  if (!requiredTour) {
    throw new Error('Tour not found');
  }

  const totalPrice = requiredTour.price * bookingSlots;
  playLoad.totalPrice = totalPrice;
  playLoad.bookingStatus = 'Pending';

  if(requiredTour.availableSeats<bookingSlots){
    throw new Error('Not enough seats available')
  }

  const booking =await Booking.create(playLoad)

  const updatedTour =await Tour.findByIdAndUpdate(tour,{$inc:{availableSeats:-booking}},{new:true});

  if (!updatedTour) {
    throw new Error('Failed to update tour')
  }

  return booking;
};

export const BookingService = {
  createBooking,
};
