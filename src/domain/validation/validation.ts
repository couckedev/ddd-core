import type { BusinessError } from "../errors/business/business.error.js";
import type { ValidationResult } from "./validation-result.type.js";

export class Validation {
  static succeed<T>(value: T): ValidationResult<T> {
    return { valid: true, value };
  }
  static fail(errors: BusinessError[]): ValidationResult<never> {
    return { valid: false, errors };
  }
}
