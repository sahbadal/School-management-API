import express from 'express';
import { PORT } from './config/config.js';
import schoolRoutes from './routes/schoolRoutes.js';
import connectDB from './config/db.js';

const app = express();

connectDB()

//middleware
app.use(express.json());

// app.use('/api/schools', schoolRoutes);

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
    
})




