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
        // get all experience
        const experiences = await experienceService.getAll();

        // return response
        return res.status(200).json({
          success: true,
          message: 'Experiences retrieved successfully',
          data: {
            length: experiences.length,
            experiences,
          },
        });
      }
      case 'POST': {
        // protect user login
        const session = await protectUserLogin(req);

        // restrict user
        await protectRole(session.user.role, ['super admin']);

        // validate payload
        experienceValidation.validateCreatePayload(req.body);

        // create experience
        const experienceId = await experienceService.create(req.body);

        // send response
        return res.status(201).json({
          success: true,
          message: 'Experience created successfully',
          data: {
            id: experienceId,
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
