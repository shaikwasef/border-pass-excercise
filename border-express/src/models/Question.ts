export interface IQuestion {
	question: string;
	type: QuestionType,
	mandatory: boolean
	options?: String[] | number[],
}

enum QuestionType {
	RADIO = "radio",
	RATING = "rating",
	TEXT_INPUT = "textInput",
	MULTI_LINE_TEXT = "multiLineTextInput",
	DROP_DOWN = "dropDown"
}