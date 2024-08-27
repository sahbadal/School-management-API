import express from 'express';
import { PORT } from './config/config.js';
import connection from './config/db.js';
import schoolRoutes from './routes/schoolRoutes.js';

const app = express();

//middleware
app.use(express.json());

app.use('/api/schools', schoolRoutes);

app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
    
})




