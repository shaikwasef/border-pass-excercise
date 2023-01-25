import { Router, Request, Response } from 'express';
import { IQuestion } from '../models/Question';
import fs from 'fs';
import { AppError } from '../models/AppError';
export const questions = Router();

questions.get('/', (_: Request, res: Response) => {
	res.setHeader('Content-Type', 'application/json');
	try {
		let fileData = fs.readFileSync('./data/questions.json');
		fileData = JSON.parse(fileData.toString());
		res.status(200).json(fileData);
	} catch (err) {
		const status = err instanceof AppError ? err.status : 500;
		if (err) {
			res.status(500).send({
				status,
				message: 'Internal server error',
			});
		}
	}
});