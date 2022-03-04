import { PROJECT_NOT_FOUND_ERR_MSG } from '@constants/errorMessage';
import NotFoundError from '@exceptions/NotFoundError';
import Project from '@models/ProjectModel';

class ProjectService {
  async getAll() {
    const projects = await Project.find();

    return projects;
  }

  async getById(id) {
    const project = await ProjectService.getData({ _id: id });

    if (!project) {
      throw new NotFoundError(PROJECT_NOT_FOUND_ERR_MSG);
    }

    return project;
  }

  async create({ name, url, stacks }) {
    const newProject = new Project({
      name: name.trim(),
      url: url.trim(),
      stacks,
    });

    const project = await newProject.save();

    return project._id;
  }

  async deleteById(id) {
    const project = await ProjectService.getData({ _id: id });

    if (!project) {
      throw new NotFoundError(PROJECT_NOT_FOUND_ERR_MSG);
    }

    await Project.deleteOne({ _id: id });
  }

  async updateById(id, { name, url, stacks }) {
    const project = await ProjectService.getData({ _id: id });

    if (!project) {
      throw new NotFoundError(PROJECT_NOT_FOUND_ERR_MSG);
    }

    project.name = name.trim();
    project.url = url.trim();
    project.stacks = stacks;

    await project.save();
  }

  static async getData(filter) {
    const project = await Project.findOne(filter);

    return project;
  }
}

export default ProjectService;
