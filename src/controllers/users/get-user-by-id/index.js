const controller = require("../../controller")
const handler = require("./handler")
const validator = require("./validator")

module.exports = [
  validator,
  controller(handler),
]
