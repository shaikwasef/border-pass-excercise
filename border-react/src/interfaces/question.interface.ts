export interface IQuestion {
	question: string;
	type: QuestionType,
	mandatory: boolean
	options?: String[] | number[],
}

enum QuestionType {
	CHECKBOX = "checkbox",
	MULTI_SELECT = "multiSelect",
	TEXT_INPUT = "textInput",
	SLIDER = "slider",
	DROP_DOWN = "dropDown"
}