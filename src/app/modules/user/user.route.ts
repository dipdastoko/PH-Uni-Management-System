import express, { NextFunction, Request, Response } from 'express';
import { UserContollers } from './user.controller';
import { AnyZodObject } from 'zod';
import { studentValidations } from '../student/student.zod.validation';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(studentValidations.createStudentValidationSchema),
  UserContollers.createStudent,
);

export const UserRoutes = router;
