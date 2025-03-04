import { ObjectId } from 'mongoose';
import TAcademicSemester from './academicSemester.interface';
import { academicSemesterNameCodeMapper } from './academicSemesterConstants';
import { AcademicSemester } from './academinSemester.model';

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  // semester name --> semester code

  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Semester Code');
  }
  const result = await AcademicSemester.create(payload);
  return result;
};

const getAllAcademicSemestersFromDB = async () => {
  const result = await AcademicSemester.find();
  return result;
};

const getSemesterByIdFromDB = async (id: string) => {
  const result = await AcademicSemester.findById({ _id: id });
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAllAcademicSemestersFromDB,
  getSemesterByIdFromDB,
};
