import { CompositeBusinessError } from "../errors/business/composite-business.error.js";
import type { BusinessError } from "../errors/business/business.error.js";
import type { ValidationResult } from "./validation-result.type.js";
import type { ValidationSuccessResult } from "./validation-success-result.type.js";
import type { ValidationFailureResult } from "./validation-failure-result.type.js";

export class Validation {
  static succeed<Value>(value: Value): ValidationSuccessResult<Value> {
    return { valid: true, value };
  }

  static fail<ErrorType extends BusinessError>(
    errors: ErrorType[],
  ): ValidationFailureResult<ErrorType> {
    return { valid: false, errors };
  }
  
  /**
   * Asserts that all validation results are valid and returns their values.
   * Throws a {@link CompositeBusinessError} collecting all errors if any result failed.
   *
   * @example
   * const [name, age] = Validation.assertValid(
   *   validateName(input.name),
   *   validateAge(input.age),
   * );
   */
  static assertValid<Results extends ValidationResult<unknown>[]>(
    ...results: Results
  ): {
    [Index in keyof Results]: Results[Index] extends ValidationResult<
      infer ExtractedValue
    >
      ? ExtractedValue
      : never;
  } {
    const errors: BusinessError[] = results.flatMap((result) =>
      result.valid ? [] : result.errors,
    );

    if (errors.length > 0) {
      throw new CompositeBusinessError(errors);
    }

    const values = results.map(
      (result) => (result as ValidationSuccessResult<unknown>).value,
    );

    return values as never;
  }
}
