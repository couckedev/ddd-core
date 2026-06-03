import { CompositeBusinessError } from "../errors/business/composite-business.error.js";
import type { BusinessError } from "../errors/business/business.error.js";
import type { ValidationResult } from "./validation-result.type.js";

export class Validation {
  static succeed<T>(value: T): { valid: true; value: T } {
    return { valid: true, value };
  }
  static fail<ErrorType extends BusinessError>(
    errors: ErrorType[],
  ): { valid: false; errors: ErrorType[] } {
    return { valid: false, errors };
  }
  static assertValid(...results: ValidationResult<unknown>[]): void {
    const errors = results.flatMap((r) => (r.valid ? [] : r.errors));
    if (errors.length > 0) {
      throw new CompositeBusinessError(errors);
    }
  }
}
