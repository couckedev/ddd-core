# Changelog

## [2.3.0](https://github.com/couckedev/ddd-core/compare/ddd-core-v2.2.0...ddd-core-v2.3.0) (2026-06-01)


### Features

* **domain:** add validation items to allow cumulative validations ([#8](https://github.com/couckedev/ddd-core/issues/8)) ([465881f](https://github.com/couckedev/ddd-core/commit/465881f50496b2aff8a0352ddc366f7d8a25a150))


### Bug Fixes

* **domain:** add generic error type to ValidationResult for proper type inference ([#11](https://github.com/couckedev/ddd-core/issues/11)) ([8fe3eaf](https://github.com/couckedev/ddd-core/commit/8fe3eaf90455fcdbe734a682d020956b081caccb))
* **domain:** add generic on fail method of validation ([#10](https://github.com/couckedev/ddd-core/issues/10)) ([52f1754](https://github.com/couckedev/ddd-core/commit/52f17548b82e1e24c6e2e99be198aa156d3daac5))
* **domain:** return concrete branch types from Validation helpers ([#12](https://github.com/couckedev/ddd-core/issues/12)) ([14aa9a4](https://github.com/couckedev/ddd-core/commit/14aa9a43095164be69318a76faa38d2017710ae3))

## [2.2.0](https://github.com/couckedev/ddd-core/compare/ddd-core-v2.1.0...ddd-core-v2.2.0) (2026-04-22)


### Features

* add new concurrency error ([#6](https://github.com/couckedev/ddd-core/issues/6)) ([a179c96](https://github.com/couckedev/ddd-core/commit/a179c96cf1cdf07da44ef20679e893136240b265))

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
