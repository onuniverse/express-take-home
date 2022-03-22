/* eslint-disable no-param-reassign */
const UniverseError = require("../../models/universe-error")

function paginate(Model) {
  Model.paginate = async (options = {}) => {
    const { count, rows } = await Model.findAndCountAll(options)

    const { limit, offset } = options

    return {
      results: rows || [],
      metadata: {
        count: rows ? rows.length : 0,
        total: count || 0,
        limit: limit || 10,
        offset: offset || 0,
      },
    }
  }
}

function findOneOrError(Model) {
  Model.findOneOrError = async (options = {}, includeGone = true) => {
    const opt = { ...options, paranoid: false }

    const result = await Model.findOne(opt)

    if (!result) {
      throw UniverseError.notFound()
    }

    if (includeGone && result.deleted_at) {
      throw UniverseError.gone()
    }

    return result
  }
}

function createOrUpdate(Model) {
  Model.createOrUpdate = async (where, updates, options = {}) => {
    const existingObjects = await Model.findAll({ where, ...options, limit: 2 })

    if (existingObjects.length > 1) {
      throw new Error("Expected one row and got two!")
    } else if (existingObjects.length === 1) {
      const [existingObject] = existingObjects
      Object.assign(existingObject, updates)
      await existingObject.save({ ...options })
      return existingObject
    }

    const newObject = await Model.create(
      {
        ...where,
        ...updates,
      },
      options,
    )

    return newObject
  }
}

module.exports = {
  paginate,
  findOneOrError,
  createOrUpdate,
}
