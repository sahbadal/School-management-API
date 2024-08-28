import Student from '../models/school.models.js';

// Controller to add a new student
export const addStudent = async (req, res) => {
    const {
        firstName, lastName, email, phoneNumber, address,
        dateOfBirth, SGPA, status, courses, completeYear
    } = req.body;

    // Validate the input data
    if (!firstName || !lastName || !email || !phoneNumber || !address || !dateOfBirth || !completeYear) {
        return res.status(400).json({ error: 'All required fields must be provided' });
    }

    try {
        const newStudent = new Student({
            firstName,
            lastName,
            email,
            phoneNumber,
            address,
            dateOfBirth,
            SGPA,
            status,
            courses,
            completeYear,
        });

        const savedStudent = await newStudent.save();
        res.status(201).json({ message: 'Student added successfully', id: savedStudent._id });
    } catch (err) {
        console.error('Error adding student:', err.message);
        res.status(500).json({ error: 'Failed to add student' });
    }
};

// Controller to list students
export const listStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (err) {
        console.error('Error fetching students:', err.message);
        res.status(500).json({ error: 'Failed to retrieve students' });
    }
};

// Controller to get student details by ID
export const getStudentById = async (req, res) => {
    const { id } = req.params;

    try {
        const student = await Student.findById(id);
        if (!student) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.status(200).json(student);
    } catch (err) {
        console.error('Error fetching student:', err.message);
        res.status(500).json({ error: 'Failed to retrieve student' });
    }
};

// Controller to delete a student by ID
export const deleteStudentById = async (req, res) => {
    const { id } = req.params;

    try {
        const result = await Student.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ error: 'Student not found' });
        }
        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (err) {
        console.error('Error deleting student:', err.message);
        res.status(500).json({ error: 'Failed to delete student' });
    }
};
