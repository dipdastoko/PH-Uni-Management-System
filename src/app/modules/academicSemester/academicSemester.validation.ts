import { z } from 'zod';
import {
  AcademicSemesterCodes,
  AcademicSemesterNames,
  Months,
} from './academicSemesterConstants';
import { string } from 'joi';

const academicSemesterValidationSchema = z.object({
  body: z.object({
    name: z.enum([...AcademicSemesterNames] as [string, ...string[]]),
    year: z.date(),
    code: z.enum([...AcademicSemesterCodes] as [string, ...string[]]),
    startMonth: z.enum([...Months] as [string, ...string[]]),
    endMonth: z.enum([...Months] as [string, ...string[]]),
  }),
});

export const AcademicSemesterValidations = {
  academicSemesterValidationSchema,
};
