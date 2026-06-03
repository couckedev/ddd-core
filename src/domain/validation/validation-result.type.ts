import type { ValidationSuccessResult } from "./validation-success-result.type.js";
import type { ValidationFailureResult } from "./validation-failure-result.type.js";
import type { BusinessError } from "../errors/business/business.error.js";

export type ValidationResult<Value, ErrorType extends BusinessError = BusinessError> =
  | ValidationSuccessResult<Value>
  | ValidationFailureResult<ErrorType>;
