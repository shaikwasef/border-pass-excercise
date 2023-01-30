import { QuestionType } from "../interfaces/question.interface"

export const mockQuestionTextBox = {
	question: 'What is your name?',
	type: QuestionType.TEXT_INPUT,
	mandatory: true,
	index: 0,
}

export const mockQuestionDropDown = {
	question: 'Select your age range from the below drop down?',
	type: QuestionType.DROP_DOWN,
	options: ['20 - 25', '25 - 30', '30 - 35', '35 - 40'],
	mandatory: true,
	index: 1,
}

export const mockRadioButton = {
	question:
		'Have you ever been declined admit from a Canadian university program?',
	type: QuestionType.RADIO,
	options: ['YES', 'NO'],
	mandatory: false,
	index: 2,
}

export const mockRating = {
	question: "On a scale of 1 to 10 how do you rate your experience with BorderPass?",
	type: QuestionType.RATING,
	mandatory: false,
	index: 2
}

export const mockAnswer = {}