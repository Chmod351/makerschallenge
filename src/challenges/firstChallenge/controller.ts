import type { NextFunction, Request, Response } from 'express';
import { calculateSpeed, getMeasurement, getSolution } from './service.ts';

type RawMesearument = {
  distance: string;
  time: string;
};

async function solveFirstChallenge(req: Request, res: Response, next: NextFunction) {
  try {
    const measure: RawMesearument | undefined = await getMeasurement();
    if (!measure) {
      return next(new Error('measurement unavailable'));
    }
    const { distance, time }: RawMesearument = measure;

    // parseamos los datos obtenidos para poder calcular la velocidad
    const parsedDistance = parseFloat(distance);
    const parsedTime = parseFloat(time);

    if (parsedTime <= 0) throw new Error('time must be > 0');

    const speed = calculateSpeed({
      distance: parsedDistance,
      time: parsedTime,
    });

    const challengeResult = await getSolution({ speed });

    res.status(200).json({
      status: 'ok',
      result: challengeResult,
      distance: parsedDistance,
      time: parsedTime,
    });
  } catch (error) {
    // subo cualquier error al error handler
    next(error);
  }
}
export default solveFirstChallenge;
