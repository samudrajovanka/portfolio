import { AUTH_ERR_MSG } from '@constants/errorMessage';
import AuthenticationError from '@exceptions/AuthenticationError';
import { getSession } from 'next-auth/react';

const protectUserLogin = async (req) => {
  const session = await getSession({ req });

  if (!session) {
    throw new AuthenticationError(AUTH_ERR_MSG);
  }

  return session;
};

export default protectUserLogin;
