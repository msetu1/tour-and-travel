import { model, Schema } from 'mongoose';
import { ITour, ITourMethods, TTourModel } from './tour.interface';

const tourSchema = new Schema<ITour, TTourModel, ITourMethods>(
  {
    name: {
      type: String,
      required: [true, 'A tour must have a name'],
      trim: true,
      maxlength: [40, 'A tour name must have less or equal to 40 characters'],
      minlength: [5, 'A tour name must have more or equal to 5 characters'],
      unique: true,
    },
    durationHours: {
      type: Number,
      required: [true, 'A tour must have a duration'],
      min: [1, 'Duration must be at least 1 hour'],
      max: [100, 'Duration must not exceed 100 hours'],
    },
    averageRating: {
      type: Number,
      default: 5,
      min: [1, 'Rating must be at least 1'],
      max: [5, 'Rating must be at most 5'],
    },
    price: {
      type: Number,
      required: [true, 'A tour must have a price'],
      min: [0, 'Price must be a positive number'],
    },
    coverImg: {
      type: String,
      required: [true, 'A tour must have a cover image'],
      validate: {
        validator: function (v: string) {
          return /^https?:\/\/.+\.(jpg|jpeg|png|webp)$/.test(v);
        },
        message:
          'Cover image must be a valid URL ending with .jpg, .jpeg, .png, or .webp',
      },
    },
    image: {
      type: [String],
      validate: {
        validator: function (v: string[]) {
          return v.every((img) =>
            /^https?:\/\/.+\.(jpg|jpeg|png|webp)$/.test(img),
          );
        },
        message:
          'Each image must be a valid URL ending with .jpg, .jpeg, .png, or .webp',
      },
    },
    startDate: {
      type: [Date],
      validate: {
        validator: function (v: Date[]) {
          return v.every((date) => date instanceof Date && date > new Date());
        },
        message: 'Start dates must be in the future',
      },
    },
    startLocation: {
      type: String,
      trim: true,
      maxlength: [
        100,
        'Start location must have less or equal to 100 characters',
      ],
    },
    location: {
      type: [String],
      validate: {
        validator: function (v: string[]) {
          return v.length > 0;
        },
        message: 'There must be at least one location',
      },
    },
    slug: {
      type: [String],
      required: [true, 'A tour must have a price'],
    },
    availableSeats: {
      type: Number,
      required: [true, 'tour need available'],
    },
  },
  {
    timestamps: true,
  },
);

tourSchema.methods.getNextNearestStartDateEnd = function () {
  const today = new Date();

  const futureDates = this.startDate.filter((startDate: Date) => {
    return startDate > today;
  });

  futureDates.sort((a: Date, b: Date) => a.getTime() - b.getTime());

  const nearestDate = futureDates[0];
  const estimatedDate = new Date(
    nearestDate.getTime() + this.durationHours * 60 * 60,
  );

  return {
    nearestDate,
    estimatedDate,
  };
};

export const Tour = model<ITour, TTourModel>('Tour', tourSchema);
