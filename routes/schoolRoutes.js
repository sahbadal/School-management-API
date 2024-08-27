import express from 'express';
import { addSchool, listSchools } from '../controllers/schoolController.js';

const router = express.Router();

// Route to add a new school
router.post('/addSchool', addSchool);

// Route to list schools sorted by proximity
router.get('/listSchools', listSchools);

export default router;
