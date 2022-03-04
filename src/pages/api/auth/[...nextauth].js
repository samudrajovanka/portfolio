import connectDb from '@lib/connectDb';
import userValidation from '@validations/user';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '@models/UserModel';
import AuthenticationError from '@exceptions/AuthenticationError';
import { LOGIN_FAILED_ERR_MSG } from '@constants/errorMessage';
import bcrypt from 'bcrypt';

export default NextAuth({
  session: {
    jwt: true,
    maxAge: 24 * 60 * 60, // 24 hours
    updateAge: 3 * 60 * 60, // 3 hours
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        connectDb();

        userValidation.validateLoginUserPayload({
          email: credentials.email,
          password: credentials.password,
        });

        const user = await User.findOne({ email: credentials.email.toLowerCase() });

        if (!user) {
          throw new AuthenticationError(LOGIN_FAILED_ERR_MSG);
        }

        const isMatch = await bcrypt.compare(credentials.password, user.password);

        if (!isMatch) {
          throw new AuthenticationError(LOGIN_FAILED_ERR_MSG);
        }

        return { name: user.name, email: user.email, role: user.role };
      },
    }),
  ],
  database: process.env.MONGO_URI,
  callbacks: {
    async session({ session, token }) {
      session.user = token.user;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
});
