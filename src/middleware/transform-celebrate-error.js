const { isCelebrateError } = require("celebrate")
const UniverseError = require("../models/universe-error")

module.exports = (err, req, res, next) => {
  if (!isCelebrateError(err)) {
    return next(err)
  }

  const { joi } = err

  if (!joi || !joi.message) {
    return next(err)
  }

  req.log.warn(`JOI ERROR: ${JSON.stringify(joi)}`)

  return next(UniverseError.badRequest(joi.message, false, true))
}
