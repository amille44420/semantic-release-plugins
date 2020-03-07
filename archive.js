const fs = require('fs');
const path = require('path');
const glob = require('glob');
const JSZip = require('jszip');

const prepare = pluginConfig => {
    const { output, assets, globOptions } = pluginConfig;
    const zip = new JSZip();

    if (!output) {
        throw new Error('Output is required');
    }

    if (!Array.isArray(assets)) {
        throw new Error('assets must be an array');
    }

    assets.forEach(asset => {
        const { pattern, relative = '' } = asset instanceof String ? { pattern: asset } : asset;
        const matches = glob.sync(pattern, globOptions);

        matches.forEach(match => {
            zip.file(path.relative(relative, match), fs.readFileSync(match));
        });
    });

    return new Promise(resolve => {
        zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
            .pipe(fs.createWriteStream(output))
            .on('finish', resolve);
    });
};

module.exports = { prepare };
