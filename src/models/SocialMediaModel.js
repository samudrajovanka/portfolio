import mongoose from 'mongoose';

const { Schema } = mongoose;

const SocialMediaSchema = new Schema(
  {
    label: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
      unique: true,
      enum: ['github', 'linkedin', 'dribbble', 'email', 'youtube'],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.SocialMedia || mongoose.model('SocialMedia', SocialMediaSchema);
