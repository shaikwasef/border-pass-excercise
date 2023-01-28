export interface IQuestion {
	question: string;
	type: QuestionType,
	mandatory: boolean
	options?: string[] | number[],
}

export interface IAnswer {
	answer: string | string[];
	index: number
}

enum QuestionType {
	CHECKBOX = "checkbox",
	MULTI_SELECT = "multiSelect",
	TEXT_INPUT = "textInput",
	SLIDER = "slider",
	DROP_DOWN = "dropDown"
}