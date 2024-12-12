import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { UserRoute } from './module/user/user.route';
import { TourRoute } from './module/tour/tour.route';
import globalErrorHandler from './utils/globalErrorHandler';
import { BookingRoute } from './module/booking/booking.route';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/user', UserRoute);
app.use('/api/tour', TourRoute);
app.use('/api/booking', BookingRoute);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running !!');
});

app.use(globalErrorHandler)

export default app;
