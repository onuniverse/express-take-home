const { celebrate, Joi } = require("celebrate")

module.exports = celebrate({
  body: {
    name: Joi.string().required(),
  },
})
