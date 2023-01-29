export interface IQuestion {
	question: string;
	type: QuestionType,
	mandatory: boolean
	options?: string[] | number[],
}

export interface IAnswer {
	[key: number]: string
}

export enum QuestionType {
	RADIO = "radio",
	RATING = "rating",
	TEXT_INPUT = "textInput",
	MULTI_LINE_TEXT = "multiLineTextInput",
	DROP_DOWN = "dropDown"
}