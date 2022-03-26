const { Op } = require("sequelize")

const UniverseError = require("../../models/universe-error")
const { Sequelize, sequelize, QueryTypes } = require("./sequelize")

const models = require("./models")

const query = (sql, bind, options = {}) =>
  sequelize.query(sql, {
    type: QueryTypes.SELECT,
    bind,
    ...options,
  })

const update = (sql, bind, options = {}) =>
  sequelize.query(sql, {
    type: QueryTypes.UPDATE,
    bind,
    ...options,
  })

const withTransaction = (handler) => sequelize.transaction(handler)

//==============================================================================
// Users
//==============================================================================
const createUser = (data = {}, options = {}) => models.User.create(data, options)

const deleteUserById = async (id, options = {}) => {
  const user = await models.User.findOneOrError({
    where: {
      id,
    },
    ...options,
  })
  return user.destroy(options)
}

const getAllUsers = (options = {}) => models.User.findAll(options)

const getUserById = (id, options = {}) => models.User.findOneOrError({
  where: {
    id,
  },
  ...options,
})

const updateUserById = async (id, data, options = {}) => {
  const user = await models.User.findOneOrError({
    where: {
      id,
    },
    ...options,
  })

  Object.assign(user, data)
  return user.save(options)
}

module.exports = {
  models,
  query,
  update,
  withTransaction,

  // Users
  createUser,
  deleteUserById,
  getAllUsers,
  getUserById,
  updateUserById,
}
