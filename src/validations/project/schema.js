import Joi from 'joi';

const CreateProjectPayloadSchema = Joi.object({
  name: Joi.string().min(5).max(100).required(),
  url: Joi.string().uri().required(),
  stacks: Joi.array().items(Joi.string()).min(1).max(5).required(),
});

const UpdateProjectPayloadSchema = Joi.object({
  name: Joi.string().min(5).max(100).required(),
  url: Joi.string().uri().required(),
  stacks: Joi.array().items(Joi.string()).min(1).max(5).required(),
});

export { CreateProjectPayloadSchema, UpdateProjectPayloadSchema };
