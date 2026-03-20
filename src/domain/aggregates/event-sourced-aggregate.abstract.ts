import { AbstractDomainEvent } from "../events/domain-event.abstract.js";
import { StreamEvent } from "../events/stream-event.type.js";
import { AbstractBasicAggregate } from "./basic-aggregate.abstract.js";

export abstract class AbstractEventSourcedAggregate<
  EventType extends AbstractDomainEvent,
> extends AbstractBasicAggregate {
  /**
   * Represents the last persisted revision of this aggregate (rehydrated from history).
   * It MUST NOT be incremented when recording new domain events.
   * The infrastructure layer is responsible for assigning revisions and enforcing optimistic locking.
   */
  protected _currentRevision: number = -1;

  private _pending_events: EventType[] = [];

  get currentRevision(): number {
    return this._currentRevision;
  }

  protected abstract applyEvent<Event extends EventType>(event: Event): void;

  protected recordEvent(event: EventType): void {
    this.applyEvent(event);
    this._pending_events.push(event);
  }

  public getUncommittedEvents(): EventType[] {
    return this._pending_events;
  }

  public commitEvents(): void {
    this._pending_events = [];
  }

  public rehydrate(history: StreamEvent<EventType>[]): this {
    for (const item of history) {
      this.applyEvent(item.event);
      this._currentRevision = item.revision;
    }
    return this;
  }
}
