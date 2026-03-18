export interface IntegrationEvent<PayloadType = unknown> {
  eventName: string;
  occurredAt: string;
  streamId?: string;
  revision?: number;
  payload: PayloadType;
}
