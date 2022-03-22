const morgan = require("morgan")
const split = require("split")
const uuid = require("uuid").v4
const { createLogger, format, transports } = require("winston")

const { logLevel } = require("../config")

const makeLoggerWithRequestId = (id) => createLogger({
  transports: [
    new transports.Console({
      format: format.combine(
        format.timestamp(),
        format.printf((info) => `${info.timestamp} ${info.level}: ${id} ${info.message}`),
      ),
      level: logLevel,
    }),
  ],
  exitOnError: false,
})

morgan.token("content", (req, res) => {
  if (!res.statusCode) {
    return "-"
  }
  if (res.statusCode < 400) {
    return res.get("content-length")
  }

  return res.locals.error || "-"
})

const morganFormat = ":method :url :status :content - :response-time ms"

module.exports = (req, res, next) => {
  // Set Request ID
  const id = uuid().split("-")[0]
  req.id = id

  // Create logger for request
  const logger = makeLoggerWithRequestId(id)
  req.log = logger

  // Pass parameters on to morgan logging middleware
  const stream = split().on("data", (line) => logger.info(line))
  const morganLogger = morgan(morganFormat, { stream })

  morganLogger(req, res, next)
}
