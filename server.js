import express from 'express';
import { PORT } from './config/config.js';


const app = express();

//middleware
app.use(express.json());


app.listen(PORT,()=>{
    console.log(`server running on http://localhost:${PORT}`);
    
})




