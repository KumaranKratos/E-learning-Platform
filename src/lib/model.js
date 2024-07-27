import mongoose from "mongoose";

const courseSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    overview: {
      type: String,
      required: true,
    },
    stars: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
    updated: {
      type: String,
    },
    access: {
      type: String,
    },
    InstructorName: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
    },
    status: {
      type: Number,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    lessons: [
      {
        title: String,
        content: String,
        vid: String,
      },
    ],
  },
  { timestamps: true }
);

export const Course =
  mongoose.models?.Course || mongoose.model("Course", courseSchema);
