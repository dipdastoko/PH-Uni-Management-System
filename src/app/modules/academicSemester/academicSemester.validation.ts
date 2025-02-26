import { z } from 'zod';

const academicSemesterValidationSchema = z.object({
  body: z.object({}),
});
