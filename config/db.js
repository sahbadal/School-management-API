import { MONGO_URI} from './config.js';
import mongoose from 'mongoose';

const connectDB = async () =>{
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Database connected');
    } catch (error) {
        console.log(`Error while connecting to Databse: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;
