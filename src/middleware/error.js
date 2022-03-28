import { ErrorMessage } from 'constants/messages';

const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message =
    err.message || ErrorMessage.responseErrorMessage.INTERNAL_SERVER_ERROR;

  res.status(err.statusCode).json({
    message: err.message
  });
};

export { errorHandler };
