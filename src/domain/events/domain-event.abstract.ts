export abstract class AbstractDomainEvent {
  public readonly occurredAt: Date = new Date();
  public readonly streamId!: string;
  public readonly revision!: number;

  abstract get eventName(): string;

  _stamp(streamId: string, revision: number): void {
    Object.assign(this, { streamId, revision });
  }
}
