import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    enrollmentDate: {
        type: Date,
        default: Date.now,
    },
    SGPA: {
        type: Number,
        min: 0,
        max: 4,
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive', 'Graduated'],
        default: 'Active',
    },
    courses: [
        {
            courseName: String,
            grade: String,
        }
    ],
    completeYear: {
        type: String, 
        required: true,
    },
});

const Student = mongoose.model('Student', studentSchema);

export default Student;
