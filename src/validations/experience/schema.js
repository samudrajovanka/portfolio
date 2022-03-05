import Joi from 'joi';

const CreateExperiencePayloadSchema = Joi.object({
  company: Joi.string().max(100).required(),
  startMonth: Joi.date().required(),
  endMonth: Joi.date().required(),
  position: Joi.string().required(),
  type: Joi.string().required(),
  stacks: Joi.array().items(Joi.string()).min(1).max(5).required(),
});

const UpdateExperiencePayloadSchema = Joi.object({
  company: Joi.string().max(100).required(),
  startMonth: Joi.date().required(),
  endMonth: Joi.date().required(),
  position: Joi.string().required(),
  type: Joi.string().required(),
  stacks: Joi.array().items(Joi.string()).min(1).max(5).required(),
});

export { CreateExperiencePayloadSchema, UpdateExperiencePayloadSchema };
