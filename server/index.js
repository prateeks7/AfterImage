import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import aiRoutes from './routes/aiRoutes.js';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/ai', aiRoutes);


try{
    connectDB(process.env.MONGODB_URL);
}
catch (error) {
    console.log(error);
}

app.get('/', async (req,res)=>{
    res.send("Hello");
});


app.listen(1000);