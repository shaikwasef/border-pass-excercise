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
	CHECKBOX = "checkbox",
	RADIO = "radio",
	MULTI_SELECT = "multiSelect",
	TEXT_INPUT = "textInput",
	SLIDER = "slider",
	DROP_DOWN = "dropDown"
}