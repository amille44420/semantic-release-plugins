const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const getChartPath = ({ chart }) => {
    if (!chart) {
        throw new Error('Chart is required for @amille/semantic-release-plugins/helmChartUpdate');
    }

    return path.resolve(process.cwd(), chart);
};

const prepare = pluginConfig => {
    const chart = getChartPath(pluginConfig);

    if (!fs.existsSync(chart)) {
        throw new Error(`${chart} chart file not found`);
    }
};

const publish = (pluginConfig, context) => {
    const { nextRelease, logger } = context;
    const { version } = nextRelease;

    const chartFile = getChartPath(pluginConfig);
    const rawChart = fs.readFileSync(chartFile, 'utf8');
    const chart = yaml.safeLoad(rawChart);
    const newChart = yaml.safeDump({ ...chart, appVersion: version });
    fs.writeFileSync(chartFile, newChart, 'utf8');
    logger.log('Chart app version has been set to %s', version);
};

module.exports = { prepare, publish };
