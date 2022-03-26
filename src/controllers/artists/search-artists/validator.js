const { celebrate, Joi } = require("celebrate")

module.exports = celebrate({
  query: {
    q: Joi.string().required(),
  },
})
