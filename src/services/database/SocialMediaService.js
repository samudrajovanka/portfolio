import { SOCIAL_MEDIA_NOT_FOUND_ERR_MSG } from '@constants/errorMessage';
import NotFoundError from '@exceptions/NotFoundError';
import SocialMedia from '@models/SocialMediaModel';

class SocialMediaService {
  async getAll() {
    const socialMedias = await SocialMedia.find();

    return socialMedias;
  }

  async getById(id) {
    const socialMedia = await SocialMediaService.getData({ _id: id });

    if (!socialMedia) {
      throw new NotFoundError(SOCIAL_MEDIA_NOT_FOUND_ERR_MSG);
    }

    return socialMedia;
  }

  async create({ label, url, icon }) {
    const newSocialMedia = new SocialMedia({
      label: label.trim(),
      url: url.trim(),
      icon: icon.trim(),
    });

    const socialMedia = await newSocialMedia.save();

    return socialMedia._id;
  }

  async deleteById(id) {
    const socialMedia = await SocialMediaService.getData({ _id: id });

    if (!socialMedia) {
      throw new NotFoundError(SOCIAL_MEDIA_NOT_FOUND_ERR_MSG);
    }

    await SocialMedia.deleteOne({ _id: id });
  }

  async updateById(id, { label, url, icon }) {
    const socialMedia = await SocialMediaService.getData({ _id: id });

    if (!socialMedia) {
      throw new NotFoundError(SOCIAL_MEDIA_NOT_FOUND_ERR_MSG);
    }

    socialMedia.label = label.trim();
    socialMedia.url = url.trim();
    socialMedia.icon = icon.trim();

    await socialMedia.save();
  }

  static async getData(filter) {
    const socialMedia = await SocialMedia.findOne(filter);

    return socialMedia;
  }
}

export default SocialMediaService;
