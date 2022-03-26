const { celebrate, Joi } = require("celebrate")

module.exports = celebrate({
  params: {
    userId: Joi.number().integer().required(),
  },
  body: {
    name: Joi.string().required(),
  },
})
