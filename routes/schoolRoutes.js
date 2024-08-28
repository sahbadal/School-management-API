import express from 'express';
import { addStudent, listStudents, getStudentById,deleteStudentById } from '../controllers/schoolController.js';

const router = express.Router();

// Route to add a new student
router.post('/addStudent', addStudent);

// Route to list all students
router.get('/listStudents', listStudents);

// Route to get a student by ID
router.get('/getStudent/:id', getStudentById);

// Route to delete a student by ID
router.delete('/deleteStudent/:id', deleteStudentById);

export default router;
