import { Router } from 'express';
import solveFirstChallenge from '../challenges/firstChallenge/controller.ts';
import solveNinthChallenge from '../challenges/ninthChallenge/controller.ts';
const router = Router();

router.get('/phase-change-diagram', solveNinthChallenge);
router.get('/1', solveFirstChallenge);
export default router;
