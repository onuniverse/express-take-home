const express = require("express")

const middleware = require("./middleware")
const routes = require("./routes")
const UniverseError = require("./models/universe-error")

const app = express()

app.use(middleware.requestLogger)

app.use(routes)

app.use((req, res, next) => next(UniverseError.notFound("Route not found")))

app.use(middleware.transformCelebrateError)
app.use(middleware.handleError)

module.exports = app
