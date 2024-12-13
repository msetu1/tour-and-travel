/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import httpStatusCodes from 'http-status-codes';
import mongoose from 'mongoose';
import { handleGenericError } from '../helpers/handleGenericError';
import { handleDuplicateError } from '../helpers/handleDuplicateError';
import { handleValidationError } from '../helpers/handleValidationError';
import { handleCastError } from '../helpers/handleCastError';

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof mongoose.Error.CastError) {
    handleCastError(err,res)
  }

  // validate error
  else if (err instanceof mongoose.Error.ValidationError) {
    handleValidationError(err,res)
  }

  // duplicate error
  else if (err.code && err.code === 11000) {
    handleDuplicateError(err,res);
  }
  
  // generic error 
  else if (err instanceof Error) {
    handleGenericError(err,res);
  }
};

export default globalErrorHandler;
