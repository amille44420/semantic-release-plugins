# semantic-release-plugins

![npm](https://img.shields.io/npm/v/@amille/semantic-release-plugins)
![CircleCI](https://img.shields.io/circleci/build/github/amille44420/semantic-release-plugins)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)


Provide a bunch of custom plugins for `semantic-release`.

## Build docker image

You may automatically build and push docker images using `@amille/semantic-release-tools/dockerize`.

```sh
# install using npm
npm install --save-dev @amille/semantic-release-tools/dockerize

# or using yarn
yarn add -D @amille/semantic-release-tools/dockerize
```

Add the plugin to your `.releaserc` file.

```json
{
    "plugins": [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@amille/semantic-release-tools/dockerize"
    ]
}
```

And finally configure it using environment variables

|Variable name|Mandatory|Description|
|---|---|---|
|DOCKER_REGISTRY| |Docker registry (ex: `hub.domain.co`)|
|DOCKER_IMAGE|:heavy_check_mark:|Image name (ex: `hello-world`)|
|DOCKER_LOGIN| |Username for docker login|
|DOCKER_PASSWORD| |Password for docker login|

