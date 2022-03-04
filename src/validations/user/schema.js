import Joi from 'joi';

const UserRegisterPayloadSchema = Joi.object({
  name: Joi.string().required().min(3).max(20),
  email: Joi.string().email().required(),
  password: Joi.string().required().min(8).max(100),
  confirmPassword: Joi.any()
    .valid(Joi.ref('password'))
    .required()
    .options({ messages: { 'any.only': '{{#label}} does not match' } }),
  role: Joi.string(),
});

const UserLoginPayloadSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required().min(8).max(100),
});

export { UserRegisterPayloadSchema, UserLoginPayloadSchema };
