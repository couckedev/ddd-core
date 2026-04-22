import { TechnicalError } from "./technical.error.js";

export class AggregateEventApplicationError extends TechnicalError {
  public override name = 'AggregateEventApplicationError';
}
