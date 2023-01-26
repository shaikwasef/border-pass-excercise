import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import { questions } from './routes/routes';
import cors from 'cors'

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use('/questions', questions);

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
});