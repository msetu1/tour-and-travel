import catchAsync from '../../utils/catchAsync';
import { tourService } from './tour.service';

// create tour
const createTour = catchAsync(async (req, res) => {
  const result = await tourService.createTour(req.body);

  res.status(200).json({
    success: true,
    message: 'Tour data  created successfully',
    data: result,
  });
});

// all tour
const allTour = catchAsync(async (req, res) => {
  const result = await tourService.allTour(req.query);

  res.status(200).json({
    success: true,
    message: 'Tour data  retrieved successfully',
    data: result,
  });
});

// single tour
const singleTour = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await tourService.singleTour(id);

  res.status(200).json({
    success: true,
    message: 'Single Tour retrieved data successfully',
    data: result,
  });
});

// update tour
const updateTour = catchAsync(async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const result = await tourService.updateTour(id, body);

  res.status(200).json({
    success: true,
    message: 'Tour data  updated successfully',
    data: result,
  });
});

// delete tour
const deleteTour = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await tourService.deleteTour(id);

  res.status(200).json({
    success: true,
    message: 'Tour data deleted successfully',
    data: result,
  });
});

const getNextSchedule = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await tourService.getNextSchedule(id);

  res.status(200).json({
    success: true,
    message: 'get Next Schedule successfully',
    data: result,
  });
});

export const TourController = {
  createTour,
  allTour,
  singleTour,
  updateTour,
  deleteTour,
  getNextSchedule,
};
