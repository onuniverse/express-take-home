const { paginate, findOneOrError, createOrUpdate } = require("../functions")
const { sequelize } = require("../sequelize")

const models = {
  // DomainInstruction: require("./domain-instruction")(sequelize),
}

Object.values(models).forEach((Model) => {
  paginate(Model)
  findOneOrError(Model)
  createOrUpdate(Model)

  if (Model.associate) {
    Model.associate(models)
  }

  if (Model.includes) {
    Model.includes = Model.includes(models)
  }

  Model.allIncludes = Object.values(Model.includes || {})
})

module.exports = models
