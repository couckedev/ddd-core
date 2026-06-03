import type { BusinessError } from "../errors/business/business.error.js";

export type ValidationFailureResult<ErrorType extends BusinessError = BusinessError> = {
  valid: false;
  errors: ErrorType[];
};
