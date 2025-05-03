import express from 'express';
import router from './src/routes/routes';
import errorHandler from './src/helpers/errorHandler';
import middlewares from './src/middleware/middleware';
const app = express();

middlewares(app);
app.use(router);

app.use(errorHandler);

app.listen(3000, () => {
  console.log('app up');
});
