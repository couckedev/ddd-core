# Changelog

## [2.1.0](https://github.com/couckedev/ddd-core/compare/ddd-core-v2.0.0...ddd-core-v2.1.0) (2026-04-21)


### Features

* adding code on business error ([#4](https://github.com/couckedev/ddd-core/issues/4)) ([2c7e481](https://github.com/couckedev/ddd-core/commit/2c7e4814de8fcaca36781978d146f9b1f8bbc617))

## [2.0.0](https://github.com/couckedev/ddd-core/compare/ddd-core-v1.0.0...ddd-core-v2.0.0) (2026-03-20)


### ⚠ BREAKING CHANGES

* Domain events no longer contain streamId/revision and aggregates rehydrate from StreamEvent history items. WHY: Because stream id and revision stamping are supposed to be on infrastructure side

### Code Refactoring

* move streamId/revision stamping to infrastructure ([ab30b29](https://github.com/couckedev/ddd-core/commit/ab30b296407862bbfd8f53b6fac57d1c98ca18b1))

## 1.0.0 (2026-03-18)


### Features

* minimal DDD core ([e1dc141](https://github.com/couckedev/ddd-core/commit/e1dc1415fd357ce2256b787bc5294d1bf650c4bb))

## [0.0.2](https://github.com/couckedev/ddd-core/compare/ddd-core-v0.0.1...ddd-core-v0.0.2) (2026-03-18)


### Features

* minimal core for domain and application ([301ac45](https://github.com/couckedev/ddd-core/commit/301ac45d1226d50c76e96f6da9d335a706307ead))
