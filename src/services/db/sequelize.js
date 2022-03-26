require("pg").defaults.parseInt8 = true
const { Sequelize, QueryTypes } = require("sequelize")
const { databaseUrl } = require("../../config")

const sequelize = new Sequelize(databaseUrl, {
  supportBigNumbers: true,
  bigNumberStrings: false,
  dialect: "postgres",
  dialectOption: {
    ssl: true,
    native: true,
  },
  pool: {
    max: 25,
    min: 1,
    acquire: 60000,
    idle: 60000,
  },
  define: {
    paranoid: true,
    timestamps: false,
    underscored: false,
    freezeTableName: true,
  },
  retry: {
    match: [
      /SequelizeConnectionError/,
      /SequelizeConnectionRefusedError/,
      /SequelizeHostNotFoundError/,
      /SequelizeHostNotReachableError/,
      /SequelizeInvalidConnectionError/,
      /SequelizeConnectionTimedOutError/,
    ],
    name: "query",
    backoffBase: 100,
    backoffExponent: 1.1,
    timeout: 60000,
    max: Infinity,
  },
  logQueryParameters: true,
  logging: (msg, ts) => console.log(`[Sequelize] ${msg} (${ts} ms)`),
  benchmark: true,
})

module.exports = { sequelize, Sequelize, QueryTypes }
