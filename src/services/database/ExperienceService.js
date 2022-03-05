import { PRO_EXP_NOT_FOUND_ERR_MSG } from '@constants/errorMessage';
import NotFoundError from '@exceptions/NotFoundError';
import Experience from '@models/ExperienceModel';

class ExperienceService {
  async getAll() {
    const proExps = await Experience.find();

    return proExps;
  }

  async getById(id) {
    const proExp = await ExperienceService.getData({ _id: id });

    if (!proExp) {
      throw new NotFoundError(PRO_EXP_NOT_FOUND_ERR_MSG);
    }

    return proExp;
  }

  async create({ company, startMonth, endMonth, position, type, stacks }) {
    const newProExp = new Experience({
      company: company.trim(),
      startMonth,
      endMonth,
      position: position.trim(),
      type: type.trim(),
      stacks,
    });

    const proExp = await newProExp.save();

    return proExp._id;
  }

  async deleteById(id) {
    const proExp = await ExperienceService.getData({ _id: id });

    if (!proExp) {
      throw new NotFoundError(PRO_EXP_NOT_FOUND_ERR_MSG);
    }

    await Experience.deleteOne({ _id: id });
  }

  async updateById(id, { company, startMonth, endMonth, position, type, stacks }) {
    const proExp = await ExperienceService.getData({ _id: id });

    if (!proExp) {
      throw new NotFoundError(PRO_EXP_NOT_FOUND_ERR_MSG);
    }

    proExp.company = company.trim();
    proExp.startMonth = startMonth;
    proExp.endMonth = endMonth;
    proExp.position = position.trim();
    proExp.type = type.trim();
    proExp.stacks = stacks;

    await proExp.save();
  }

  static async getData(filter) {
    const proExp = await Experience.findOne(filter);

    return proExp;
  }
}

export default ExperienceService;
