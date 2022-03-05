import { VALIDATION_ERR } from '@constants/errorType';
import InvariantError from '@exceptions/InvariantError';
import { CreateSocialMediaPayloadSchema, UpdateSocialMediaPayloadSchema } from './schema';

const socialMediaValidation = {
  validateCreatePayload: (payload) => {
    const validationResult = CreateSocialMediaPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message, VALIDATION_ERR);
    }
  },
  validateUpdatePayload: (payload) => {
    const validationResult = UpdateSocialMediaPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message, VALIDATION_ERR);
    }
  },
};

export default socialMediaValidation;
