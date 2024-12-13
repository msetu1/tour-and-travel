import express from 'express';
import { TourController } from './tour.controller';

const router = express.Router();

// schedule tour
router.get('/schedule/:id', TourController.getNextSchedule);

//create tour
router.post('/create-tour', TourController.createTour);

//single tour
router.get('/:id', TourController.singleTour);

//update tour
router.put('/:id', TourController.updateTour);

//delete tour
router.delete('/:id', TourController.deleteTour);

//all tour
router.get('/', TourController.allTour);

export const TourRoute = router;
