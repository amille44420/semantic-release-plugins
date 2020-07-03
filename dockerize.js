const { exec } = require('child_process');

const getConfig = pluginConfig => ({
    registry: pluginConfig.registry || process.env.DOCKER_REGISTRY,
    image: pluginConfig.image || process.env.DOCKER_IMAGE,
    dockerfile: pluginConfig.dockerfile || process.env.DOCKER_FILE,
    argVersion: pluginConfig.argVersion,
    target: pluginConfig.target,
});

const runDocker = cmd =>
    new Promise((resolve, reject) => {
        const options = {
            cwd: process.cwd(),
            env: process.env,
        };

        exec(`docker ${cmd}`, options, error => {
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        });
    });

const getImageName = (tag, config) => {
    const { image, registry } = config;

    if (!image) {
        throw new Error('DOCKER_IMAGE is required');
    }

    if (!registry) {
        return `${image}:${tag}`;
    }

    return `${registry}/${image}:${tag}`;
};

const prepare = async (pluginConfig, context) => {
    const { argVersion, dockerfile, target, ...config } = getConfig(pluginConfig);
    const { nextRelease, logger } = context;
    const { version, channel } = nextRelease;

    // build a versioned image
    const versionTag = getImageName(version, config);

    const command = [
        'build',
        target && `--target ${target}`,
        `-t ${versionTag}`,
        dockerfile && `-f ${dockerfile}`,
        argVersion && `--build-arg ${argVersion}=${version}`,
        '.',
    ]
        .filter(Boolean)
        .join(' ');

    logger.log('Docker building for %s', versionTag);
    await runDocker(command);

    if (channel) {
        // tag the image for the channel
        const channelTag = getImageName(channel, config);
        logger.log('Docker tagging for %s', channelTag);
        await runDocker(`tag ${versionTag} ${channelTag}`);
    }
};

const publish = async (pluginConfig, context) => {
    const config = getConfig(pluginConfig);
    const { nextRelease, logger } = context;
    const { version, channel } = nextRelease;

    // push the versioned image
    const versionTag = getImageName(version, config);
    logger.log('Docker pushing for %s', versionTag);
    await runDocker(`push ${versionTag}`);

    if (channel) {
        // push the image on the channel
        const channelTag = getImageName(channel, config);
        logger.log('Docker pushing for %s', channelTag);
        await runDocker(`push ${channelTag}`);
    }
};

module.exports = { prepare, publish };
