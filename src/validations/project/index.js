import { VALIDATION_ERR } from '@constants/errorType';
import InvariantError from '@exceptions/InvariantError';
import { CreateProjectPayloadSchema, UpdateProjectPayloadSchema } from './schema';

const projectValidation = {
  validateCreatePayload: (payload) => {
    const validationResult = CreateProjectPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message, VALIDATION_ERR);
    }
  },
  validateUpdatePayload: (payload) => {
    const validationResult = UpdateProjectPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message, VALIDATION_ERR);
    }
  },
};

export default projectValidation;
