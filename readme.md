# Colored console logger for Node.js

This is a very simple module for outputting colored console logs.

## Installation

The package can be installed with yarn

`yarn add logchou`

or npm

`npm install --save logchou`

## Usage

```javascript
const Logger = require("logchou");

// outputs in blue : [INFO] info message
Logger.info("info message");

// outputs in cyan : [DEBUG] debug message
Logger.debug("debug message");

// outputs in yellow/orange : [WARNING] warning message
Logger.warning("warning message");

// outputs in black with red background : [ERROR] error message
Logger.error("error message");
```

When `env.process.NODE_ENV` is set to "test", no logs are displayed except for error levels.

Note that the colors may vary depending on your terminal color scheme.