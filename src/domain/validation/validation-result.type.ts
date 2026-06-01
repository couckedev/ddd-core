import type { BusinessError } from "../errors/business/business.error.js";

export type ValidationResult<T, E extends BusinessError = BusinessError> =
  | { valid: true;  value: T }
  | { valid: false; errors: E[] }