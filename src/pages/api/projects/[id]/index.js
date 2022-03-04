import ClientError from '@exceptions/ClientError';
import connectDb from '@lib/connectDb';
import { clientErrRes, notAllowedErrRes, serverErrRes } from '@lib/errorResponse';
import protectApi from '@lib/protectApi';
import protectRole from '@lib/protectRole';
import protectUserLogin from '@lib/protectUserLogin';
import ProjectService from '@services/database/ProjectService';
import projectValidation from '@validations/project';

async function handler(req, res) {
  try {
    await protectApi(req);

    connectDb();

    const projectService = new ProjectService();

    switch (req.method) {
      case 'GET': {
        // protect user login
        const session = await protectUserLogin(req);

        // restrict user
        await protectRole(session.user.role, ['super admin']);

        // get id from url
        const { id } = req.query;

        // get data
        const project = await projectService.getById(id);

        // send response
        return res.status(200).json({
          success: true,
          message: 'Project found',
          data: {
            project,
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
        projectValidation.validateUpdatePayload(req.body);

        // update project
        await projectService.updateById(id, req.body);

        // send response
        return res.status(200).json({
          success: true,
          message: 'Project updated successfully',
        });
      }
      case 'DELETE': {
        // protect user login
        const session = await protectUserLogin(req);

        // restrict user
        await protectRole(session.user.role, ['super admin']);

        // get id from url
        const { id } = req.query;

        // delete project
        await projectService.deleteById(id);

        // send response
        return res.status(200).json({
          success: true,
          message: 'Project deleted successfully',
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
