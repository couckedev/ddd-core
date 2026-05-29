import type { BusinessError } from "../errors/business/business.error.js";

export type ValidationResult<T> =
  | { valid: true;  value: T }
  | { valid: false; errors: BusinessError[] }