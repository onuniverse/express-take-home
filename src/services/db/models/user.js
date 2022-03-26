const { DataTypes, Sequelize } = require("sequelize")

module.exports = (sequelize) => {
  const User = sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
  )

  User.associate = (models) => {
    // Register any sequelize relationships here
  }

  return User
}
