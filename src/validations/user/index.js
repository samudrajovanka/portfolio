import { VALIDATION_ERR } from '@constants/errorType';
import InvariantError from '@exceptions/InvariantError';
import { UserLoginPayloadSchema, UserRegisterPayloadSchema } from './schema';

const userValidation = {
  validateRegisterUserPayload: (payload) => {
    const validationResult = UserRegisterPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message, VALIDATION_ERR);
    }
  },
  validateLoginUserPayload: (payload) => {
    const validationResult = UserLoginPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message, VALIDATION_ERR);
    }
  },
};

export default userValidation;
