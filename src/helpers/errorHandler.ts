import type { NextFunction, Request, Response } from 'express';

export default function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  if (error && error.message) {
    res.status(400).json({
      status: 'error',
      message: error.message,
    });
  } else {
    console.log(error.message);
    res.status(500).json({
      status: 'error',
      message: 'Internal Server Error',
    });
  }
  next();
}
