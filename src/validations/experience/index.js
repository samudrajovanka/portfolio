import { VALIDATION_ERR } from '@constants/errorType';
import InvariantError from '@exceptions/InvariantError';
import { CreateExperiencePayloadSchema, UpdateExperiencePayloadSchema } from './schema';

const experienceValidation = {
  validateCreatePayload: (payload) => {
    const validationResult = CreateExperiencePayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message, VALIDATION_ERR);
    }
  },
  validateUpdatePayload: (payload) => {
    const validationResult = UpdateExperiencePayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message, VALIDATION_ERR);
    }
  },
};

export default experienceValidation;
