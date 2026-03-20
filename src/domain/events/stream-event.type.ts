import type { AbstractDomainEvent } from "./domain-event.abstract.js";

export type StreamEvent<EventType extends AbstractDomainEvent> = {
  revision: number;
  event: EventType;
};
