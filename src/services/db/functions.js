/* eslint-disable no-param-reassign */
const UniverseError = require("../../models/universe-error")

function findOneOrError(Model) {
  Model.findOneOrError = async (options = {}) => {
    const result = await Model.findOne(options)

    if (!result) {
      throw UniverseError.notFound()
    }

    return result
  }
}

module.exports = {
  findOneOrError,
}
