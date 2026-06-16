export abstract class BusinessError extends Error {
  public readonly reason: string;

  constructor(message: string, reason: string) {
    super(message);
    this.name = this.constructor.name;
    this.reason = reason;
  }
}
