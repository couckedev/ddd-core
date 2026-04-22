import { TechnicalError } from "./technical.error.js";

export abstract class ConcurrencyError extends TechnicalError {
  public override name = "ConcurrencyError";
}
