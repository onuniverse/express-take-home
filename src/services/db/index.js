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

module.exports = {
  models,
  query,
  update,
  withTransaction,
}
