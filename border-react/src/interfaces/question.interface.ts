export interface IQuestion {
	question: string;
	type: QuestionType,
	mandatory: boolean
	options?: string[] | number[],
}

export interface IAnswer {
	[key: number]: string | string[]
}

enum QuestionType {
	CHECKBOX = "checkbox",
	MULTI_SELECT = "multiSelect",
	TEXT_INPUT = "textInput",
	SLIDER = "slider",
	DROP_DOWN = "dropDown"
}