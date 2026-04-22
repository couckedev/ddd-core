export abstract class BusinessError extends Error {
  public override name = "BusinessError";
  public abstract readonly code: string;
}
