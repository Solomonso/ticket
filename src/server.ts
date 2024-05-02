import express from 'express';
import router from './routes/ticket';
import cors from 'cors';

const app = express();
const PORT = 9090;

app.use(express.json());
app.use(cors());
app.use('/api', router);

app.listen(PORT , () => {
    console.log(`Server running on port ${PORT}`);
});