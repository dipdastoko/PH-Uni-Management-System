import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';
import { AcademicSemesterServices } from './academicSemester.service';

const createAcademicSemester = catchAsync(async (req, res) => {
  // const { password, s };

  const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester is created successfully',
    data: result,
  });
});

const getAllAcademicSemesters = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAllAcademicSemestersFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semesters retrieved successfully',
    data: result,
  });
});

const getSemesterById = catchAsync(async (req, res) => {
  const semesterId = req.params.id;
  const result =
    await AcademicSemesterServices.getSemesterByIdFromDB(semesterId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester retrieved successfully',
    data: result,
  });
});

export const AcademicSemesterControllers = {
  createAcademicSemester,
  getAllAcademicSemesters,
  getSemesterById,
};
