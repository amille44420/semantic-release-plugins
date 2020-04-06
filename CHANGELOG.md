# [3.1.0](https://github.com/amille44420/semantic-release-plugins/compare/v3.0.2...v3.1.0) (2020-04-06)


### Features

* **archive:** exclude directories and include dot files by default ([5bc4bde](https://github.com/amille44420/semantic-release-plugins/commit/5bc4bde0b079583cf9c0242b52235d6fd0395087))

## [3.0.2](https://github.com/amille44420/semantic-release-plugins/compare/v3.0.1...v3.0.2) (2020-04-02)

## [3.0.1](https://github.com/amille44420/semantic-release-plugins/compare/v3.0.0...v3.0.1) (2020-03-24)

# [3.0.0](https://github.com/amille44420/semantic-release-plugins/compare/v2.2.1...v3.0.0) (2020-03-07)


### chore

* **helmChartUpdate:** rename helmChartUpdate as updateHelmChart ([cda6881](https://github.com/amille44420/semantic-release-plugins/commit/cda6881802b0cd21a58179f7f1098f946040eaab))


### Features

* add plugins archive and sentryRelease ([8932b97](https://github.com/amille44420/semantic-release-plugins/commit/8932b97c7eefb4c7158911f074ab3f3f3c0dd758))
* **helmChartAndUpdate:** move the chart update in prepre step ([3f1756c](https://github.com/amille44420/semantic-release-plugins/commit/3f1756c388a74027181834d3ee4fa3cc2de30f9c))


### BREAKING CHANGES

* **helmChartUpdate:** the plugin helmChartUpdate is renamed as updateHelmChart
* **helmChartAndUpdate:** the chart file is being updated in the prepare step instead of the publish step

## [2.2.1](https://github.com/amille44420/semantic-release-plugins/compare/v2.2.0...v2.2.1) (2020-03-01)


### Bug Fixes

* **dockerize:** fix critical error when using a dockerfile ([4a71f9e](https://github.com/amille44420/semantic-release-plugins/commit/4a71f9e4ae70d188d123744fd41b4f9f60116352))

# [2.2.0](https://github.com/amille44420/semantic-release-plugins/compare/v2.1.1...v2.2.0) (2020-03-01)


### Bug Fixes

* **dockerize:** fix critical error on build command ([8dad490](https://github.com/amille44420/semantic-release-plugins/commit/8dad49029595051f1b819c5942f42e59389b77e7))


### Features

* **dockerize:** provide an option to provide the version as build arg ([a8541c1](https://github.com/amille44420/semantic-release-plugins/commit/a8541c16dfa0cc2deed4c2d310be708569acb4b2))

## [2.1.1](https://github.com/amille44420/semantic-release-plugins/compare/v2.1.0...v2.1.1) (2020-03-01)

# [2.1.0](https://github.com/amille44420/semantic-release-plugins/compare/v2.0.0...v2.1.0) (2020-02-29)


### Features

* **dockerize:** add an option to specify dockerfile ([ad0b736](https://github.com/amille44420/semantic-release-plugins/commit/ad0b7369709ca3ef06a48890c7466d4879e34fab))

# [2.0.0](https://github.com/amille44420/semantic-release-plugins/compare/v1.2.0...v2.0.0) (2020-02-29)


### Features

* remove login from dockerize ([ed19ae3](https://github.com/amille44420/semantic-release-plugins/commit/ed19ae387edb2e010eccc16f7d1d0d5779fba1b5))


### BREAKING CHANGES

* manual login need to be made ahead

# [1.2.0](https://github.com/amille44420/semantic-release-plugins/compare/v1.1.0...v1.2.0) (2020-02-28)


### Features

* provide plugin configuration for dockerize ([1a33be3](https://github.com/amille44420/semantic-release-plugins/commit/1a33be32eea494c047f168aac31e3fa9fdea9750))

# [1.1.0](https://github.com/amille44420/semantic-release-plugins/compare/v1.0.0...v1.1.0) (2020-02-04)


### Features

* add a new plugin to update app version in helm charts ([62ff6f1](https://github.com/amille44420/semantic-release-plugins/commit/62ff6f10f41c5dd2a9d5262224157e808d86e390))

# 1.0.0 (2020-02-03)


### Features

* **dockerize:** add dockerize plugin ([24c34d6](https://github.com/amille44420/semantic-release-plugins/commit/24c34d60feb666ae12377b5a5fbd40b5ce878f63))
