import express from 'express';
import router from './src/routes/routes.ts';
import errorHandler from './src/helpers/errorHandler.ts';
import middlewares from './src/middleware/middleware.ts';
const app = express();

middlewares(app);
app.use(router);

app.use(errorHandler);

app.listen(3000, () => {
  console.log('app up');
});
