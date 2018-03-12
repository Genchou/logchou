const colors = require('colors');
const ENV = process.env.NODE_ENV || "dev";

const levels = {
    error: (str) => {
        return "[ERROR]".bgRed.bold.black + colors.bgRed.black(` ${str}`);
    },
    warning: (str) => {
        return "[WARNING]".underline.yellow + colors.yellow(` ${str}`);
    },
    debug: (str) => {
        return "[DEBUG]".underline.cyan + colors.cyan(` ${str}`);
    },
    info: (str) => {
        return "[INFO]".underline.blue + colors.blue(` ${str}`);
    }
}

class Logger {
    static log(level, ...debugs) {
        Array.from(debugs).forEach(arg => {
            if (typeof arg !== "string") {
                console.log(arg);
            } else {
                console.log(levels[level](arg));
            }
        });
    }

    static error() {
        Logger.log("error", ...arguments);
    }

    static warning() {
        if (ENV === "test") { return; }
        Logger.log("warning", ...arguments);
    }

    static info() {
        if (ENV === "test") { return; }
        Logger.log("info", ...arguments);
    }

    static debug() {
        if (ENV === "test") { return; }
        Logger.log("debug", ...arguments);
    }
}

module.exports = Logger;
