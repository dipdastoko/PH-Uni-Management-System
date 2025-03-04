import express from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterValidations } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(AcademicSemesterValidations.academicSemesterValidationSchema),
  AcademicSemesterControllers.createAcademicSemester,
);

router.get('/', AcademicSemesterControllers.getAllAcademicSemesters);

router.get('/:id', AcademicSemesterControllers.getSemesterById);

export const AcademicSemesterRoutes = router;
