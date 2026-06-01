import type { BusinessError } from "../errors/business/business.error.js";

export class Validation {
  static succeed<T>(value: T): { valid: true; value: T } {
    return { valid: true, value };
  }
  static fail<E extends BusinessError>(errors: E[]): { valid: false; errors: E[] } {
    return { valid: false, errors };
  }
}
