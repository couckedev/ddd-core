import { AbstractDomainEvent } from "../events/domain-event.abstract.js";
import { AbstractBasicAggregate } from "./basic-aggregate.abstract.js";

export abstract class AbstractEventSourcedAggregate<
  EventType extends AbstractDomainEvent,
> extends AbstractBasicAggregate {
  get streamId(): string {
    return `${this.aggregateType}-${this.aggregateId}`;
  }

  protected _currentRevision: number = -1;

  private _pending_events: EventType[] = [];

  get currentRevision(): number {
    return this._currentRevision;
  }

  protected abstract applyEvent<Event extends EventType>(event: Event): void;

  protected recordEvent(event: EventType): void {
    const revision = this._currentRevision + 1;
    event._stamp(this.streamId, revision);
    this._currentRevision = revision;
    this._pending_events.push(event);
  }

  public getUncommittedEvents(): EventType[] {
    return this._pending_events;
  }

  public commitEvents(): void {
    this._pending_events = [];
  }

  public rehydrate(events: EventType[]): this {
    for (const event of events) {
      this.applyEvent(event);
      this._currentRevision = event.revision;
    }
    return this;
  }
}
