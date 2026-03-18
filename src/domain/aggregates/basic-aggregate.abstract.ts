export abstract class AbstractBasicAggregate {
  abstract get aggregateType(): string;
  abstract get aggregateId(): string;
}
