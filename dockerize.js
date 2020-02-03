const { exec } = require('child_process');

const { DOCKER_REGISTRY: registry, DOCKER_IMAGE: image, DOCKER_LOGIN: login, DOCKER_PASSWORD: pwd } = process.env;

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

const getImageName = tag => {
    if (!image) {
        throw new Error('DOCKER_IMAGE is required');
    }

    if (!registry) {
        return `${image}:${tag}`;
    }

    return `${registry}/${image}:${tag}`;
};

const dockerLogin = async logger => {
    if (registry) {
        logger.log('Docker login to %s', registry);
        await runDocker(`login ${registry} -u ${login} -p ${pwd}`);
    } else if (login) {
        logger.log('Docker login to official hub');
        await runDocker(`login -u ${login} -p ${pwd}`);
    }
};

const prepare = async (pluginConfig, context) => {
    const { nextRelease, logger } = context;
    const { version, channel } = nextRelease;

    // we must login first
    await dockerLogin(logger);

    // build a versioned image
    const versionTag = getImageName(version);
    logger.log('Docker building for %s', versionTag);
    await runDocker(`build -t ${versionTag} .`);

    if (channel) {
        // tag the image for the channel
        const channelTag = getImageName(channel);
        logger.log('Docker tagging for %s', channelTag);
        await runDocker(`tag ${versionTag} ${channelTag}`);
    }
};

const publish = async (pluginConfig, context) => {
    const { nextRelease, logger } = context;
    const { version, channel } = nextRelease;

    // push the versioned image
    const versionTag = getImageName(version);
    logger.log('Docker pushing for %s', versionTag);
    await runDocker(`push ${versionTag}`);

    if (channel) {
        // push the image on the channel
        const channelTag = getImageName(channel);
        logger.log('Docker pushing for %s', channelTag);
        await runDocker(`push ${channelTag}`);
    }
};

module.exports = { prepare, publish };
