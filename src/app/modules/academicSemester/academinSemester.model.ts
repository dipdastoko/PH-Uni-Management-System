import { model, Schema } from 'mongoose';
import TAcademicSemester, {
  TAcademicSemesterCodes,
  TAcademicSemesterNames,
  TMonths,
} from './academicSemester.interface';

const Months: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const AcademicSemesterNames: TAcademicSemesterNames[] = [
  'Autumn',
  'Fall',
  'Summer',
];

const AcademicSemesterCodes: TAcademicSemesterCodes[] = ['01', '02', '03'];

const academicSemesterSchema = new Schema<TAcademicSemester>({
  name: {
    type: String,
    enum: AcademicSemesterNames,
    required: true,
  },
  year: {
    type: Date,
    required: true,
  },
  code: {
    type: String,
    required: true,
    enum: AcademicSemesterCodes,
  },
  startMonth: {
    type: String,
    required: true,
    enum: Months,
  },
  endMonth: {
    type: String,
    required: true,
    enum: Months,
  },
});

export const AcademicSemester = model<TAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
);
