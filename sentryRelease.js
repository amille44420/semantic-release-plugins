const { exec } = require('child_process');

const runCli = cmd =>
    new Promise((resolve, reject) => {
        const options = { cwd: process.cwd() };

        exec(`sentry-cli releases ${cmd.join(' ')}`, options, error => {
            if (error) {
                reject(error);
            } else {
                resolve();
            }
        });
    });

const publish = async (pluginConfig, context) => {
    const { project, sourcemaps = [] } = pluginConfig;
    const { nextRelease } = context;
    const version = `${project}@${nextRelease}`;

    // create the release
    await runCli(['new', '--project', project, version]);

    // list source maps to upload
    for (const sourcemap of sourcemaps) {
        // eslint-disable-next-line no-await-in-loop
        await runCli(['files', version, 'upload-sourcemaps', sourcemap]);
    }

    // finalize the release
    await runCli(['finalize', version]);
};

module.exports = { publish };
