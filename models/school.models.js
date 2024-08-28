// models/school.models.js
import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    SGPA: {
        type: Number,
        required: true,
        min: 0,
        max: 10 // Max SGPA updated to 10
    },
    status: {
        type: String,
        enum: ['Enrolled', 'Graduated', 'Dropped'],
        required: true
    },
    courses: [
        {
            type: String
        }
    ], // Array of strings for courses
    completeYear: {
        type: Number,
        required: true
    }
});

const Student = mongoose.model('Student', studentSchema);

export default Student;
