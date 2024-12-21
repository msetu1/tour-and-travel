/* eslint-disable @typescript-eslint/no-explicit-any */

import { Response } from 'express';
import httpStatusCodes from 'http-status-codes';
export const handleDuplicateError = (err: any, res: Response) => {
  res.status(httpStatusCodes.CONFLICT).json({
    success: false,
    message: err.message,
    error: err,
  });
};
