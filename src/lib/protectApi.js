import { PERMISSION_ERR_MSG } from '@constants/errorMessage';
import { PERMISSION_ERR } from '@constants/errorType';
import InvariantError from '@exceptions/InvariantError';

const protectApi = (req) =>
  new Promise((resolve, reject) => {
    if (req.headers['x-api-key'] !== process.env.API_KEY) {
      reject(new InvariantError(PERMISSION_ERR_MSG, PERMISSION_ERR, 403));
    }

    resolve(true);
  });

export default protectApi;
