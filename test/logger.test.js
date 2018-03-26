const Logger = require("../index");

Logger.info("info message");
Logger.debug("debug message");
Logger.warning("warning message");
Logger.error("error message");
setTimeout(() => {
    Logger.debug("Delayed debug message");
}, 5000);
