const { paginate, findOneOrError, createOrUpdate } = require("../functions")
const { sequelize } = require("../sequelize")

// FIXME: Get migrations working
// FIXME: Add README comments for how to make new migrations
const models = {
  User: require("./user")(sequelize),
}

Object.values(models).forEach((Model) => {
  findOneOrError(Model)

  if (Model.associate) {
    Model.associate(models)
  }

  if (Model.includes) {
    Model.includes = Model.includes(models)
  }

  Model.allIncludes = Object.values(Model.includes || {})
})

module.exports = models
