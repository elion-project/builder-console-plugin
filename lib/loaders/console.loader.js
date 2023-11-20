/* eslint-disable no-undef */
const originalConsole = global.console;
// eslint-disable-next-line no-global-assign
console = {
    debug(...args) {
        originalConsole.debug(
            ...__consolePlugin.prefix("debug"),
            ...args,
            ...__consolePlugin.suffix("debug"),
        );
    },
    error: (...args) => {
        originalConsole.error(
            ...__consolePlugin.prefix("error"),
            ...args,
            ...__consolePlugin.suffix("error"),
        );
    },
    log: (...args) => {
        originalConsole.log(
            ...__consolePlugin.prefix("log"),
            ...args,
            ...__consolePlugin.suffix("log"),
        );
    },
    info: (...args) => {
        originalConsole.info(
            ...__consolePlugin.prefix("log"),
            ...args,
            ...__consolePlugin.suffix("log"),
        );
    },
    time: (label) => {
        originalConsole.time(
            `${__consolePlugin
                .prefix("time")
                .join("  ")}: ${label} ${__consolePlugin
                .suffix("time")
                .join("  ")}`,
        );
    },
    timeEnd: (label) => {
        originalConsole.timeEnd(
            `${__consolePlugin
                .prefix("timeEnd")
                .join("  ")}: ${label} ${__consolePlugin
                .suffix("timeEnd")
                .join("  ")}`,
        );
    },
    timeLog(label, ...data) {
        originalConsole.timeLog(
            `${__consolePlugin
                .prefix("timeLog")
                .join("  ")}: ${label} ${__consolePlugin
                .suffix("timeLog")
                .join("  ")}`,
            ...data,
        );
    },
    trace: (...args) => {
        originalConsole.trace(
            ...__consolePlugin.prefix("trace"),
            ...args,
            ...__consolePlugin.suffix("trace"),
        );
    },
    warn: (...args) => {
        originalConsole.warn(
            ...__consolePlugin.prefix("warn"),
            ...args,
            ...__consolePlugin.suffix("warn"),
        );
    },
};
