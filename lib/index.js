const path = require("path");

module.exports = async (params) => {
    // eslint-disable-next-line no-param-reassign
    params.variables.__consolePlugin = {
        prefix: (type) => {
            if (params.config.prefix) {
                return (
                    params.config[`prefix-${type}`] ||
                    params.config.prefix ||
                    []
                );
            }
            return [];
        },
        suffix: (type) => {
            if (params.config.suffix) {
                return (
                    params.config[`suffix-${type}`] ||
                    params.config.suffix ||
                    []
                );
            }
            return [];
        },
    };
    params.webpackOptions.config.entry.unshift(
        require.resolve(path.resolve(__dirname, "loaders/console.loader.js")),
    );
    return params;
};
