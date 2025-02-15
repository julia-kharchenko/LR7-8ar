import { StatusCodes } from "http-status-codes";
import CustomError from "./custom.error.js";

class NotFoundError extends CustomError {
  statusCode;
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

export default NotFoundError;
