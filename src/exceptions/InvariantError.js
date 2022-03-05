import { INVARIANT_ERR } from '@constants/errorType';
import ClientError from '@exceptions/ClientError';

class InvariantError extends ClientError {
  constructor(message, type = INVARIANT_ERR, statusCode = 400) {
    super(message, type, statusCode);
    this.name = 'Invariant Error';
  }
}

export default InvariantError;
