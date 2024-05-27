// 1. Import winston module   (need to install using npm)
/*
const winston = require("winston");

// 2. Logging configuration
const logConfiguration = {
  transports: [
    new winston.transports.File({
      filename: "logs/userActivity.logs",
    }),
  ],

  format: winston.format.combine(
    winston.format.label({
      label: `Authentication API Logs`,
    }),
    winston.format.timestamp({
      format: "MMM-DD-YYYY HH:mm:ss",
    }),
    winston.format.printf(
      (info) =>
        `[${info.level}] - ${info.label};  ${[info.timestamp]}; Message: ${
          info.message
        }`
    )
  ),
};

// 3. Create logger object
const logger = winston.createLogger(logConfiguration);

module.exports = logger;

*/

const winston = require("winston");

try {
  // Logging configuration
  const logConfiguration = {
    transports: [
      new winston.transports.File({
        filename: "logs/userActivity.logs",
      }),
    ],

    format: winston.format.combine(
      winston.format.label({
        label: `Authentication API Logs`,
      }),
      winston.format.timestamp({
        format: "MMM-DD-YYYY HH:mm:ss",
      }),
      winston.format.printf(
        (info) =>
          `[${info.level}] - ${info.label};  ${[info.timestamp]}; Message: ${
            info.message
          }`
      )
    ),
  };

  // Create logger object
  const logger = winston.createLogger(logConfiguration);

  module.exports = logger;
} catch (error) {
  console.error("Error initializing logger:", error);
}
