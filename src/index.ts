import express, {Request, Response} from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const { APP_URL, APP_PORT } = process.env;

app.get('/', (req: Request, res:Response) => {
    res.send('Hell World');
});

app.listen(APP_PORT, () => {
    console.log(`Server listening at: ${APP_URL}:${APP_PORT}`);
})

