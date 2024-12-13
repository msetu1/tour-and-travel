import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { UserRoute } from './module/user/user.route';
import { TourRoute } from './module/tour/tour.route';
import globalErrorHandler from './middleware/globalErrorHandler';
import { BookingRoute } from './module/booking/booking.route';
import notFound from './middleware/notFound';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/user', UserRoute);
app.use('/api/tour', TourRoute);
app.use('/api/booking', BookingRoute);

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server is running !!',
  });
});

// error handling
app.use(globalErrorHandler);

// not found error --> 404
app.use(notFound);

export default app;
