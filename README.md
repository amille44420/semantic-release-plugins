# semantic-release-plugins

![npm](https://img.shields.io/npm/v/@amille/semantic-release-plugins)
![CircleCI](https://img.shields.io/circleci/build/github/amille44420/semantic-release-plugins)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Provide a bunch of custom plugins for `semantic-release`.

```sh
# install using npm
npm install --save-dev @amille/semantic-release-tools

# or using yarn
yarn add -D @amille/semantic-release-tools
```

## Build docker image

You may automatically build and push docker.

Add the plugin `@amille/semantic-release-tools/dockerize` to your `.releaserc` file.

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

| Variable name   | Mandatory          | Description                           |
| --------------- | ------------------ | ------------------------------------- |
| DOCKER_REGISTRY |                    | Docker registry (ex: `hub.domain.co`) |
| DOCKER_IMAGE    | :heavy_check_mark: | Image name (ex: `hello-world`)        |
| DOCKER_LOGIN    |                    | Username for docker login             |
| DOCKER_PASSWORD |                    | Password for docker login             |

## Update app version in helm chart

You may automatically update the `appVersion` in a helm chart file.

Add the plugin `@amille/semantic-release-tools/helmChartUpdate` to your `.releaserc` file.

```json
{
    "plugins": [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        [
            "@amille/semantic-release-tools/helmChartUpdate",
            {
                "chart": "./chart/Chart.yaml"
            }
        ]
    ]
}
```
