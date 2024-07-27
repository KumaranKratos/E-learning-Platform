import { Course } from "./model";
import { connenctToDb } from "./utils";

export const getCourse = async () => {
  connenctToDb();
  const Courses = await Course.find();
  return Courses;
};
