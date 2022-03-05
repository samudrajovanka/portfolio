import ClientError from '@exceptions/ClientError';
import connectDb from '@lib/connectDb';
import { clientErrRes, notAllowedErrRes, serverErrRes } from '@lib/errorResponse';
import protectApi from '@lib/protectApi';
import protectRole from '@lib/protectRole';
import protectUserLogin from '@lib/protectUserLogin';
import ExperienceService from '@services/database/ExperienceService';
import experienceValidation from '@validations/experience';

async function handler(req, res) {
  try {
    await protectApi(req);

    connectDb();

    const experienceService = new ExperienceService();

    switch (req.method) {
      case 'GET': {
        // protect user login
        const session = await protectUserLogin(req);

        // restrict user
        await protectRole(session.user.role, ['super admin']);

        // get id from url
        const { id } = req.query;

        // get data
        const experience = await experienceService.getById(id);

        // send response
        return res.status(200).json({
          success: true,
          message: 'Experience found',
          data: {
            experience,
          },
        });
      }
      case 'PUT': {
        // protect user login
        const session = await protectUserLogin(req);

        // restrict user
        await protectRole(session.user.role, ['super admin']);

        // get id from url
        const { id } = req.query;

        // validate payload
        experienceValidation.validateUpdatePayload(req.body);

        // update professional experience
        await experienceService.updateById(id, req.body);

        // send response
        return res.status(200).json({
          success: true,
          message: 'Experience updated successfully',
        });
      }
      case 'DELETE': {
        // protect user login
        const session = await protectUserLogin(req);

        // restrict user
        await protectRole(session.user.role, ['super admin']);

        // get id from url
        const { id } = req.query;

        // delete professional experience
        await experienceService.deleteById(id);

        // send response
        return res.status(200).json({
          success: true,
          message: 'Experience deleted successfully',
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
