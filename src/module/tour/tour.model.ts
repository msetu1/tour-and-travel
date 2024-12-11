import { model, Schema } from 'mongoose';
import { ITour, ITourMethods, TTourModel } from './tour.interface';

const tourSchema = new Schema<ITour,TTourModel,ITourMethods>({
  name: { type: String, required: true },
  durationHours: { type: Number, required: true },
  averageRating: { type: Number, default: 5 },
  price: { type: Number, required: true },
  coverImg: { type: String, required: true },
  image: [String],
  startDate: [Date],
  startLocation: { type: String },
  location: [String],
  slug: String,
});

tourSchema.methods.getNextNearestStartDateEnd=function(){
const today =new Date();

const futureDates=this.startDate.filter((startDate:Date)=>{
return startDate > today;
});

futureDates.sort((a:Date,b:Date)=>a.getTime()-b.getTime())

const nearestDate=futureDates[0];
const estimatedDate=new Date(nearestDate.getTime()+this.durationHours*60*60);

return{
  nearestDate,
  estimatedDate
}

}


export const Tour = model<ITour,TTourModel>('Tour', tourSchema);
