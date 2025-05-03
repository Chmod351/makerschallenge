import { liqVol, vapVol } from './service';
import type { Request, Response } from 'express';

function solveNinthChallenge(req: Request, res: Response) {
  const { pressure } = req.query;

  if (!pressure) {
    throw new Error('missing query parameters');
  }
  const p = Number(pressure);
  if (isNaN(p) || p < 0.05 || p > 10) {
    throw new Error('invalid pressure value');
  }

  const aproxLiqVol = liqVol(p);
  const aproxVapVol = vapVol(p);

  res.json({
    status: 'success',
    specific_volume_liquid: aproxLiqVol,
    specific_volume_vapor: Number(aproxVapVol.toFixed(4)),
  });
}
export default solveNinthChallenge;
