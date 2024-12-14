import { ITour } from './tour.interface';
import { Tour } from './tour.model';

// create tour
const createTour = async (playLoad: ITour) => {
  const result = await Tour.create(playLoad);
  return result;
};

// all tour
const allTour = async (query: Record<string, unknown>) => {
  console.log(query);

  const queryObj = { ...query };
  const excludingImportant = ['searchTerm'];
  excludingImportant.forEach((key) => delete queryObj[key]);

  const searchTerm = query?.searchTerm || '';

  // "name","startLocation","location"
  const searchable = ['name', 'startLocation', 'location'];

  const searchQuery = Tour.find({
    $or: searchable.map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    })),
  });

  const result = await searchQuery.find(queryObj);

  return result;
};

// single tour
const singleTour = async (id: string) => {
  const result = await Tour.findById(id);
  return result;
};

// update tour
const updateTour = async (id: string, data: ITour) => {
  const result = await Tour.findByIdAndUpdate(id, data, { new: true });
  return result;
};

// delete tour
const deleteTour = async (id: string) => {
  const result = await Tour.findByIdAndDelete(id);
  return result;
};

const getNextSchedule = async (id: string) => {
  const tour = await Tour.findById(id);
  const nextSchedule = tour?.getNextNearestStartDateEnd();

  return {
    tour,
    nextSchedule,
  };
};

export const tourService = {
  createTour,
  allTour,
  singleTour,
  updateTour,
  deleteTour,
  getNextSchedule,
};
