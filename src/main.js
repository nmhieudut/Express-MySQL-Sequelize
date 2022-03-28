import cors from 'cors';
import env from 'dotenv';
import express from 'express';
import routes from 'routes';
import http from 'http';
import { errorHandler } from 'middleware/error';
import { ErrorMessage } from 'constants/messages';
import { connect } from './config/connectDB';
import logger from 'middleware/logger';

connect();
env.config();

const app = express();
const httpServer = http.Server(app);

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(logger);
app.use(cors());
app.use(process.env.BASE_URL, routes);

app.get('/', (req, res) => {
  res.send('Express MySQL APIs');
});

app.all('*', (req, res, next) => {
  const err = new Error(ErrorMessage.requestErrorMessage.NOT_FOUND);
  err.statusCode = 404;
  next(err);
});
app.use(errorHandler);
const PORT = process.env.PORT || 8080;

httpServer.listen(PORT, () => {
  console.log('Server is listening on port:', PORT);
});
