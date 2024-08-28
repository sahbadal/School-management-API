import dotenv from 'dotenv';
dotenv.config();


export const {
    PORT,
    MONGO_URI,
    DB_NAME
} = process.env