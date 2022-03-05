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
        // protect user login
        const session = await protectUserLogin(req);

        // restrict user
        await protectRole(session.user.role, ['super admin']);

        // get id from url
        const { id } = req.query;

        // get data
        const socialMedia = await socialMediaService.getById(id);

        // send response
        return res.status(200).json({
          success: true,
          message: 'Social media found',
          data: {
            socialMedia,
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
        socialMediaValidation.validateUpdatePayload(req.body);

        // update social media
        await socialMediaService.updateById(id, req.body);

        // send response
        return res.status(200).json({
          success: true,
          message: 'Social media updated successfully',
        });
      }
      case 'DELETE': {
        // protect user login
        const session = await protectUserLogin(req);

        // restrict user
        await protectRole(session.user.role, ['super admin']);

        // get id from url
        const { id } = req.query;

        // delete social media
        await socialMediaService.deleteById(id);

        // send response
        return res.status(200).json({
          success: true,
          message: 'Social media deleted successfully',
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
