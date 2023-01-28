export function checkDisableNextButton
	(mandatory: boolean, answer?: string | string[]): boolean {
	if (mandatory && !answer) {
		return true
	}
	if (answer !== undefined) {
		return mandatory && answer.length < 1
	}
	return false
}