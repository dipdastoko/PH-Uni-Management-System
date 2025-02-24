import express from 'express';
import { UserContollers } from './user.controller';

const router = express.Router();

router.post('/create-student', UserContollers.createStudent);

export const UserRoutes = router;
