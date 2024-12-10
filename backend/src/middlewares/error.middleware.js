import { StatusCodes } from "http-status-codes";

const errorMiddleware = (err, req, res, next) => {
  const customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "Something went wrong, please try again later",
  };
  res.status(customError.statusCode).json({ msg: customError.msg });
};

export default errorMiddleware;
