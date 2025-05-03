import { liqVol, vapVol } from './service.ts';
import type { Request, Response } from 'express';

async function solveNinthChallenge(req: Request, res: Response) {
  const { pressure } = req.query;

  if (!pressure) {
    res.status(400).json('missing query parameters');
  }
  const p = Number(pressure);
  if (isNaN(p) || p < 0.05 || p > 10) {
    return res.status(400).json('invalid pressure value');
  }

  const aproxLiqVol = liqVol(p);
  const aproxVapVol = vapVol(p);

  res.json({
    specific_volume_liquid: aproxLiqVol,
    specific_volume_vapor: Number(aproxVapVol.toFixed(4)), // redondeamos el valor
  });
}
export default solveNinthChallenge;
