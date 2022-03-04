import ClientError from '@exceptions/ClientError';
import connectDb from '@lib/connectDb';
import { clientErrRes, notAllowedErrRes, serverErrRes } from '@lib/errorResponse';
import protectApi from '@lib/protectApi';
import protectRole from '@lib/protectRole';
import protectUserLogin from '@lib/protectUserLogin';
import UserService from '@services/database/UserService';
import userValidation from '@validations/user';
import { getSession } from 'next-auth/react';

async function handler(req, res) {
  try {
    await protectApi(req);

    connectDb();

    const userService = new UserService();

    switch (req.method) {
      case 'GET': {
        const session = await getSession(req);

        const users = await userService.getAll();

        if (!session) {
          return res.status(200).json({
            success: true,
            message: 'Users retrieved successfully',
            data: {
              length: users.length,
            },
          });
        }

        return res.status(200).json({
          success: true,
          message: 'Users retrieved successfully',
          data: {
            length: users.length,
            users,
          },
        });
      }
      case 'POST': {
        const usersLength = (await userService.getAll()).length;

        if (usersLength > 0) {
          const session = await protectUserLogin(req);

          // only for super admin
          await protectRole(session.user.role, ['super admin']);
        }

        // validate payload
        userValidation.validateRegisterUserPayload(req.body);

        // create user
        const userId = await userService.create(req.body);

        // send response
        return res.status(201).json({
          success: true,
          message: 'User created successfully',
          data: {
            id: userId,
          },
        });
      }
      default:
        return res.status(405).json(notAllowedErrRes());
    }
  } catch (error) {
    if (error instanceof ClientError) {
      return res.status(error.statusCode).json(clientErrRes(error));
    }

    return res.status(500).json(serverErrRes(error));
  }
}

export default handler;
