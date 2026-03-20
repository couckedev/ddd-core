export abstract class AbstractDomainEvent {
  public readonly occurredAt: Date = new Date();

  abstract get eventName(): string;
}
