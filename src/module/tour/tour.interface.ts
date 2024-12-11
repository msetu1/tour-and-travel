import { Model } from "mongoose";

export interface ITour{
    name:string;
    durationHours:number;
    averageRating:number;
    price:number;
    coverImg:string;
    image:string[];
    startDate:Date[];
    startLocation:string;
    location:string[];
    slug:string[];
}

export interface ITourMethods{
    getNextNearestStartDateEnd():{
        nearestDate:Date|null
        estimatedDate:Date|null
    }
};

export type TTourModel=Model<ITour,Record<string,undefined>,ITourMethods>