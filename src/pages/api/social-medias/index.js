import ClientError from '@exceptions/ClientError';
import connectDb from '@lib/connectDb';
import { clientErrRes, notAllowedErrRes, serverErrRes } from '@lib/errorResponse';
import protectApi from '@lib/protectApi';
import protectRole from '@lib/protectRole';
import protectUserLogin from '@lib/protectUserLogin';
import SocialMediaService from '@services/database/SocialMediaService';
import socialMediaValidation from '@validations/socialMedia';

async function handler(req, res) {
  try {
    await protectApi(req);

    connectDb();

    const socialMediaService = new SocialMediaService();

    switch (req.method) {
      case 'GET': {
        // get all social media
        const socialMedias = await socialMediaService.getAll();

        // return response
        return res.status(200).json({
          success: true,
          message: 'Social medias retrieved successfully',
          data: {
            length: socialMedias.length,
            socialMedias,
          },
        });
      }
      case 'POST': {
        // protect user login
        const session = await protectUserLogin(req);

        // restrict user
        await protectRole(session.user.role, ['super admin']);

        // validate payload
        socialMediaValidation.validateCreatePayload(req.body);

        // create social media
        const socialMediaId = await socialMediaService.create(req.body);

        // send response
        return res.status(201).json({
          success: true,
          message: 'Social media created successfully',
          data: {
            id: socialMediaId,
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
