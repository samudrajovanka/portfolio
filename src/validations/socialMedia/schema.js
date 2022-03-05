import Joi from 'joi';

const CreateSocialMediaPayloadSchema = Joi.object({
  label: Joi.string().min(5).max(100).required(),
  url: Joi.string().uri().required(),
  icon: Joi.string().required(),
});

const UpdateSocialMediaPayloadSchema = Joi.object({
  label: Joi.string().min(5).max(100).required(),
  url: Joi.string().uri().required(),
  icon: Joi.string().required(),
});

export { CreateSocialMediaPayloadSchema, UpdateSocialMediaPayloadSchema };
