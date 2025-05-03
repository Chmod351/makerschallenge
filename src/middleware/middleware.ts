import type { Application } from 'express';
import cors from 'cors';

const corsConfig = cors({
  origin: '*', // la api es pública
});

export default function middlewares(app: Application) {
  app.use(corsConfig);
}
