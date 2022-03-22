module.exports = (err, req, res, next) => {
  let message
  let status

  if (err.statusCode) {
    message = err.message || "Internal Error"
    status = err.statusCode
  } else {
    req.log.error(JSON.stringify({
      message: err.message,
      stack: err.stack,
    }))

    message = "Internal Error"
    status = 500
  }

  res.locals.error = message

  let canRetry
  let contactSupport

  if (Object.keys(err).includes("canRetry")) {
    canRetry = err.canRetry
  } else {
    canRetry = true
  }

  if (Object.keys(err).includes("contactSupport")) {
    contactSupport = err.contactSupport
  } else {
    contactSupport = true
  }

  return res.status(status).send({ message, can_retry: canRetry, contact_support: contactSupport })
}
