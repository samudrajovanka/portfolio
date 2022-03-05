import mongoose from 'mongoose';

const { Schema } = mongoose;

const ExperienceSchema = new Schema(
  {
    company: {
      type: String,
      required: true,
    },
    startMonth: {
      type: Date,
      required: true,
    },
    endMonth: {
      type: Date,
      required: true,
    },
    position: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ['Freelance', 'Full Time', 'Part Time'],
    },
    stacks: [
      {
        type: String,
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Experience || mongoose.model('Experience', ExperienceSchema);
