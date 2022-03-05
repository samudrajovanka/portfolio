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
        // get all project
        const projects = await projectService.getAll();

        // return response
        return res.status(200).json({
          success: true,
          message: 'Project retrieved successfully',
          data: {
            length: projects.length,
            projects,
          },
        });
      }
      case 'POST': {
        // protect user login
        const session = await protectUserLogin(req);

        // restrict user
        await protectRole(session.user.role, ['super admin']);

        // validate payload
        projectValidation.validateCreatePayload(req.body);

        // create project
        const projectId = await projectService.create(req.body);

        // send response
        return res.status(201).json({
          success: true,
          message: 'Project created successfully',
          data: {
            id: projectId,
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
