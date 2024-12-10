import { StatusCodes } from "http-status-codes";
import CustomError from "./custom.error.js";

class BadRequestError extends CustomError {
  statusCode;
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

export default BadRequestError;
