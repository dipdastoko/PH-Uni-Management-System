import express, { NextFunction, Request, Response } from 'express';
import { UserContollers } from './user.controller';
import { AnyZodObject } from 'zod';
import { studentValidations } from '../student/student.zod.validation';

const router = express.Router();

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // validation
      //data validation using zod
      await schema.parseAsync({
        body: req.body,
      });
      next();
    } catch (err) {
      next(err);
    }
  };
};
router.post(
  '/create-student',
  validateRequest(studentValidations.studentValidationSchema),
  UserContollers.createStudent,
);

export const UserRoutes = router;
