import { PERMISSION_ERR_MSG } from '@constants/errorMessage';
import { PERMISSION_ERR } from '@constants/errorType';
import InvariantError from '@exceptions/InvariantError';

const protectRole = (userRole, roles) =>
  new Promise((resolve, reject) => {
    if (!roles.includes(userRole)) {
      reject(new InvariantError(PERMISSION_ERR_MSG, PERMISSION_ERR, 403));
    }

    resolve(true);
  });

export default protectRole;
